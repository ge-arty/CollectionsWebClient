import Cookies from "js-cookie";
export default async function userLogout(
  token,
  navigate,
  userId,
  setLoggedUserId
) {
  try {
    const response = await fetch(
      `https://collectionwebserver.onrender.com/logout/${userId}`,
      {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ online: false }),
      }
    );
    if (response.ok) {
      Cookies.set("token", "");
      setLoggedUserId("");
      localStorage.removeItem("loggedUserId");
      navigate("/");
      console.log("Logged out successfully");
    }
  } catch (error) {
    console.error("Error occurred during logout:", error);
  }
}
