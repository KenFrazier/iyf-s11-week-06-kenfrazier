// Experience Callback Hell
// This is BAD - "Callback Hell" or "Pyramid of Doom"
function getUserData(userId, callback) {
    setTimeout(() => {
        callback({ id: userId, name: "John" });
    }, 1000);
}

function getUserPosts(userId, callback) {
    setTimeout(() => {
        callback([
            { id: 1, title: "Post 1" },
            { id: 2, title: "Post 2" }
        ]);
    }, 1000);
}

function getPostComments(postId, callback) {
    setTimeout(() => {
        callback([
            { id: 1, text: "Great post!" },
            { id: 2, text: "Thanks for sharing" }
        ]);
    }, 1000);
}

// The nightmare:
getUserData(1, function(user) {
    console.log("User:", user);
    getUserPosts(user.id, function(posts) {
        console.log("Posts:", posts);
        getPostComments(posts[0].id, function(comments) {
            console.log("Comments:", comments);
            // Imagine 3 more levels deep...
        });
    });
});


// Exercise 2: Promises to the Rescue


// Promise: getUserId
function getUserData(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (userId > 0) {
            resolve({ id: userId, name: "John" });
         } else {
            reject("invalid user ID");
         }
        }, 1000);
    });
}

// Promise: getUserPosts
function getUserPosts(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
           if (userId > 0) {
               resolve([
                   { id: 1, title: "Post 1" },
                   { id: 2, title: "Post 2" }
               ]);
          } else {
             reject("invalid user post");
          }
     }, 1000);
   });
}

// Promise: getUserComments
function getPostComments(postId) {
    return new Promise((resolve, reject) => {
       setTimeout(() => {
         if (postId > 0) {
             resolve([
                 { id: 1, text: "Great post!" },
                 { id: 2, text: "Thanks for sharing" }
             ]);
         } else {
            reject("invalid user comment");
         }
     }, 1000);
   });
}

// Chaining using functions
getUserData(1)
   .then(function(user) {
      console.log("User:", user);
      return getUserPosts(user.id);
   })
   .then(function(posts) {
      console.log("Posts:", posts);
      return getPostComments(posts[0].id);
   })
   .then(function(comments) {
      console.log("Comments:", comments);
   })
   .catch(function(error) {
      console.log("Error:", error);
   });

// Promise.all

// Run multiple promises in parallel
const promise1 = getUserData(1);
const promise2 = getUserData(2);
const promise3 = getUserData(3);

Promise.all([promise1, promise2, promise3])
    .then(results => {
        console.log("All users:", results);
        // results is an array [user1, user2, user3]
    })
    .catch(error => {
        // If ANY promise fails, this runs
        console.error("One failed:", error);
    });

// Promise.race
// First to complete wins
const fast = new Promise(resolve => setTimeout(() => resolve("Fast!"), 100));
const slow = new Promise(resolve => setTimeout(() => resolve("Slow!"), 500));

Promise.race([fast, slow])
    .then(result => {
        console.log("Winner:", result);  // "Fast!"
    });

// Promise.all
Promise.all([
    getUserData(1),
    getUserData(2),
    getUserData(3)
])
    .then(function(users) {
        console.log("All users:", users);
    })
    .catch(function(error) {
        console.log("Error:", error);
    });

