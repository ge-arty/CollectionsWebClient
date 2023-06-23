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

  useEffect(() => {
    const savedIsLogged = localStorage.getItem("isLogged");
    const savedLoggedUserId = localStorage.getItem("loggedUserId");
    setIsLogged(savedIsLogged === "true");
    setLoggedUserId(savedLoggedUserId);

    // Token
    const savedToken = Cookies.get("token");
    if (savedToken === " ") setIsLogged(false);
    if (savedToken) {
      setToken((prevToken) => {
        // Check if prev Token is not Saved One!
        if (savedToken !== prevToken) {
          Cookies.set("token", savedToken);
          return savedToken;
        }
        return prevToken;
      });
    }
  }, []);
  console.log(token);

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
