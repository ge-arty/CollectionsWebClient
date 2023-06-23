export default async function getUser(userId, token) {
  try {
    const response = await fetch(
      `https://collectionwebserver.onrender.com/user/${userId}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    console.log(userId, `token ${token}`);
    if (response.ok) {
      const user = await response.json();
      console.log(user);
    } else {
      console.error("Failed to fetch user data");
    }
  } catch (error) {
    console.error("Error occurred during user fetch:", error);
  }
}
