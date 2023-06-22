export default async function userRegister(
  { firstName, lastName, email, password },
  setError,
  navigate
) {
  try {
    const response = await fetch(
      "https://collectionwebserver.onrender.com/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ firstName, lastName, email, password }),
      }
    );

    if (response.ok) {
      const data = await response.json();
      // Handle the registration response
      console.log(data);
      navigate("/");
      return data; // Return the registration data if needed
    } else {
      throw new Error("Registration failed, account already exist!");
    }
  } catch (error) {
    setError(error.message);
    // Handle the error
    console.error(error);
  }
}
