async function loadEverything() {
   try {
       const user = await getUserData(1);
       console.log("User:", user);
       const posts = await getUserPosts(user.id);
       console.log("Post:", posts);
       const comments = await getPostComments(posts[0].id);
  } catch (error) {
      console.log("Error:", error);
  }
}

loadEverything();
