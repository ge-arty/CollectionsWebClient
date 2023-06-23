import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./containers/Header";
import Content from "./containers/Content";
import Footer from "./containers/Footer";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";

function App() {
  const [isLogged, setIsLogged] = useState(false);
  const [loggedUserId, setLoggedUserId] = useState("");
  const [token, setToken] = useState("");

  // useEffect(() => {
  //   const handleBeforeUnload = async () => {
  //     try {
  //       await fetch("https://collectionwebserver.onrender.com/logout", {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({ online: false }),
  //       });
  //     } catch (error) {
  //       console.error("Error occurred during logout:", error);
  //       // Handle the error or display an error message
  //     }
  //   };

  //   window.addEventListener("beforeunload", handleBeforeUnload);

  //   return () => {
  //     window.removeEventListener("beforeunload", handleBeforeUnload);
  //   };
  // }, []);

  // useEffect(() => {
  //   // Getting token from Cookies
  //   const savedToken = Cookies.get("token");
  //   if (savedToken) {
  //     setToken(savedToken);
  //   }

  //   //  Saving new token into Cookies
  //   Cookies.set("token", token);
  // }, [token]);

  return (
    <div className="app vh-100 bg-dark d-flex justify-content-between flex-column">
      <Header
        token={token}
        isLogged={isLogged}
        userId={loggedUserId}
        setIsLogged={setIsLogged}
      />
      <Content
        isLogged={isLogged}
        userId={loggedUserId}
        token={token}
        setToken={setToken}
        setIsLogged={setIsLogged}
        setLoggedUserId={setLoggedUserId}
      />
      <Footer />
    </div>
  );
}

export default App;
