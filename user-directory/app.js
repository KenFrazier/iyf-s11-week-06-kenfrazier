const loading = document.getElementById("loading");
const errorDiv = document.getElementById("error");
const container = document.getElementById("users-container");

function showLoading() {
   loading.classList.remove("hidden");
   container.innerHTML = "";
}

function hideLoading() {
    loading.classList.add("hidden");
}

function showError(message) {
    errorDiv.textContent = `Error: ${message}`; 
    errorDiv.classList.remove("hidden");
}

function displayUsers(users) {
    container.innerHTML = users.map(user => `
        <div class="user-card">
            <h2>${user.name}</h2>
            <p>📧 ${user.email}</p>
            <p>🏢 ${user.company.name}</p>
            <p>📍 ${user.address.city}</p>
        </div>
    `).join("");
}

let allUsers = [];
async function loadUsers() {
    try {
        showLoading();

        const response = await fetch("https://jsonplaceholder.typicode.com/users");

        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }

        allUsers = await response.json();
        displayUsers(allUsers);

    } catch (error) {
        showError(error.message);
    } finally {
        hideLoading();
    }
}

function setupSearch() {
    const searchInput = document.getElementById("search");
    searchInput.addEventListener("input", (e) => {
        const query = e.target.value.toLowerCase();
        const filtered = allUsers.filter(user =>
            user.name.toLowerCase().includes(query) ||
            user.email.toLowerCase().includes(query)
        );
        displayUsers(filtered);
    });
}

function setupSort() {
    const sortSelect = document.getElementById("sort");
    sortSelect.addEventListener("change", (e) => {
        const sorted = [...allUsers].sort((a, b) => {
            if (e.target.value === "az") {
                return a.name.localeCompare(b.name);
            } else {
                return b.name.localeCompare(a.name);
            }
        });
        displayUsers(sorted);
    });
}

loadUsers();
setupSearch();
setupSort();
