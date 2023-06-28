export default async function createCollection(userId, itemData, token) {
  try {
    const response = await fetch(
      "https://collectionwebserver.onrender.com/createCollection",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId, itemData }),
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
    console.error(error);
  }
}
