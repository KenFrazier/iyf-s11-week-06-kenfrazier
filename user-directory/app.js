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


async function loadUsers() {
    try {
        showLoading();
        
        const fetchPromise = fetch("https://jsonplaceholder.typicode.com/users",);
        
             if (!response.ok) {
               throw new Error(`HTTP error: ${response.status}`);
             }
             const users = await response.json();
             displayUsers(users);
   
    } catch (error) {
        showError(error.message);
    } finally {
        hideLoading();
    }
}

loadUsers();
