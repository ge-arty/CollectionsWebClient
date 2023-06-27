export default async function createCollection(
  userId,
  { theme, name, description, image },
  token
) {
  try {
    const response = await fetch(
      "https://collectionwebserver.onrender.com/createCollection",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId, theme, name, description, image }),
      }
    );
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      return data;
    } else {
      throw new Error("Collection create did fail!");
    }
  } catch (error) {
    setError(error.message);
    console.error(error);
  }
}
