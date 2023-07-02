export default async function createCollection(userId, itemData, token) {
  try {
    console.log(itemData.image);

    const url = "https://collectionwebserver.onrender.com/createCollection";
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId, itemData }),
    });

    if (response.ok) {
      const data = await response.json();
      console.log(data);
      return data;
    } else {
      throw new Error("Collection create failed!");
    }
  } catch (error) {
    console.error(error);
  }
}
