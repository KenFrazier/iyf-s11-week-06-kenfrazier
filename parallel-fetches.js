async function fetchEndpoint(url) {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
    }
    return response.json();
}

Promise.allSettled([
    fetchEndpoint("https://jsonplaceholder.typicode.com/users/1"),
    fetchEndpoint("https://jsonplaceholder.typicode.com/posts/1"),
    fetchEndpoint("https://jsonplaceholder.typicode.com/users/9999")
])
    .then((results) => {
    for (const result of results) {
        if (result.status === "fulfilled") {
            console.log("Success:", result.value)
        } else {
            console.log("Failed:", result.reason)
        }
    }
});
