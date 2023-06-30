export default async function createCollection(userId, itemData, token) {
  try {
    const formData = new FormData();
    formData.append("file", itemData.image);
    console.log(itemData.image);
    console.log(formData);

    const url = "https://collectionwebserver.onrender.com/createCollection";
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: { userId, formData },
    });
    console.log(formData);
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
