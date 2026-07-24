// Promise chain version:
function getDataWithPromises() {
    return getUserData(1)
        .then(user => getUserPosts(user.id))
        .then(posts => getPostComments(posts[0].id))
        .then(comments => comments);
}

// Async/await version (much cleaner!):
async function getDataWithAsync() {
    const user = await getUserData(1);
    const posts = await getUserPosts(user.id);
    const comments = await getPostComments(posts[0].id);
    return comments;
}

// Using:
getDataWithAsync().then(comments => console.log(comments));

// Or inside another async function:
async function main() {
    const comments = await getDataWithAsync();
    console.log(comments);
}

// Exercise 2
async function fetchUserData(userId) {
    try {
        const user = await getUserData(userId);
        const posts = await getUserPosts(user.id);
        return { user, posts };
    } catch (error) {
        console.error("Failed to fetch:", error);
        throw error;  // Re-throw if needed
    }
}

// Exercise 3
async function getAllUsers() {
    // Sequential (slow):
    const user1 = await getUserData(1);
    const user2 = await getUserData(2);
    const user3 = await getUserData(3);
    // Total time: ~3 seconds
    
    // Parallel (fast):
    const [u1, u2, u3] = await Promise.all([
        getUserData(1),
        getUserData(2),
        getUserData(3)
    ]);
    // Total time: ~1 second
    
    return [u1, u2, u3];
}
