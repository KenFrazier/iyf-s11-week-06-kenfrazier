function getUserData(userId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ id: userId, name: "John" });
        }, 1000);
    });
}

function getUserPosts(userId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                { id: 1, title: "Post 1" },
                { id: 2, title: "Post 2" }
            ]);
        }, 1000);
    });
}

function getPostComments(postId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                { id: 1, text: "Great post!" },
                { id: 2, text: "Thanks for sharing" }
            ]);
        }, 1000);
    });
}
async function getAllUsers() {
    console.time("parallel");
    
    const [u1, u2, u3] = await Promise.all([
        getUserData(1),
        getUserData(2),
        getUserData(3) 
    ]);
    
    console.timeEnd("parallel");
    return [u1, u2, u3];
}

getAllUsers().then(users => console.log(users));


// Sequential
async function getAllUsersSequential() {
    console.time("sequential");
    
    const u1 = await getUserData(1);
    const u2 = await getUserData(2);
    const u3 = await getUserData(3);
    
    console.timeEnd("sequential");
    return [u1, u2, u3];
}

getAllUsersSequential().then(users => console.log(users));
