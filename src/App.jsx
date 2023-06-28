import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./containers/Header";
import Content from "./containers/Content";
import Footer from "./containers/Footer";
import { useEffect, useState } from "react";
import useLocalStorage from "./hooks/useLocalStorage";
import useCookiesStorage from "./hooks/useCookiesStorage";
import getUser from "./API/getUser";

function App() {
  const [loggedUserId, setLoggedUserId] = useLocalStorage("loggedUserId", "");
  const [token, setToken] = useCookiesStorage("token", "");
  const [userData, setUserData] = useState("");

  useEffect(() => {
    console.log(!token);
    if (!token) {
      setLoggedUserId("");
    }
  }, []);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const user = await getUser(loggedUserId, token);
        setUserData(user);
      } catch (error) {
        console.error("Error occurred during user fetch:", error);
      }
    };

    if (loggedUserId) {
      fetchUser();
    }
  }, [loggedUserId]);

  return (
    <div className="app bg-dark">
      <Header
        token={token}
        loggedUserId={loggedUserId}
        setLoggedUserId={setLoggedUserId}
      />
      <Content
        loggedUserId={loggedUserId}
        setToken={setToken}
        setLoggedUserId={setLoggedUserId}
        userData={userData}
        token={token}
      />
      <Footer />
    </div>
  );
}

export default App;
