export default async function userLogin(
  { email, password },
  setIsLogged,
  setToken,
  setError,
  setLoggedUserId,
  navigate
) {
  try {
    const response = await fetch(
      "https://collectionwebserver.onrender.com/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      }
    );
    console.log(response);
    if (response.ok) {
      const data = await response.json();
      if (data.isBlocked && data.isBlocked === true) {
        throw new Error("Login failed: User is blocked.");
      }

      // Handle the login response
      console.log(data);
      // Extract the token and userId from the response
      const authToken = data.token;

      // Set the isLoggedIn state to true when login is successful
      setIsLogged(true);
      // Set the token
      setToken(authToken);
      setLoggedUserId(data._id);
      navigate("/");
      return data; // Return the login data if needed
    } else {
      throw new Error("Login failed, account does not exist!");
    }
  } catch (error) {
    // Handle the error within the component
    setError(error.message);
    console.error(error);
  }
}
