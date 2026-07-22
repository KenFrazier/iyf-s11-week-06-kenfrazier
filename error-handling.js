async function fetchUser(userId) {
  const defaultUser = {
    id: null,
    name: "Guest User",
    email: "unknown@example.com"
  };

  try {
    const response = await fetch(`https://api.example.com/users/${userId}`);

    if (response.status === 404) {
      console.log(`User ${userId} not found, using default.`);
      return defaultUser;
    }

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const user = await response.json();
    return user;

  } catch (error) {
    console.error("Fetch failed:", error.message);
    return defaultUser;
  }
}

const user = await fetchUser(9999);
console.log(user);
