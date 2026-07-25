// Basic fetch 
fetch("https://jsonplaceholder.typicode.com/users/1")
    .then(response => {
        console.log("Response object:", response);
        console.log("Status:", response.status);
        console.log("OK:", response.ok);
        return response.json();
    })
    .then(data => {
        console.log("User data:", data);
    })
    .catch(error => {
        console.error("Fetch error:", error);
    });

// Fetch with Async/Await
async function getUser(id) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Failed to fetch user:", error);
    }
}

// Use it
const user = await getUser(1);
console.log(user);

// Exercise
async function getAllUsers() {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Failed to fetch users:", error);
    }
}
const userAllUsers = await getAllUsers();
console.log(userAllUsers);

async function getUserPosts(id) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Failed to fetch posts:", error);
    }
}
const userPosts = await getUserPosts(1);
console.log(userPosts);
