async function createPost(title, body, userId) {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            title,
            body,
            userId
        })
    });

    if (!response.ok) {
        throw new Error("Failed to create post");
    }

    return response.json();
}

async function main() {
    const newPost = await createPost(
        "My First Post",
        "This is the content of my post.",
        1
    );
    console.log("Created:", newPost);
}

main();
