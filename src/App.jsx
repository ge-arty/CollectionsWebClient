import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./containers/Header";
import Content from "./containers/Content";
import Footer from "./containers/Footer";
import { useEffect } from "react";
import useLocalStorage from "./hooks/useLocalStorage";
import useCookiesStorage from "./hooks/useCookiesStorage";

function App() {
  const [isLogged, setIsLogged] = useLocalStorage("isLogged", false);
  const [loggedUserId, setLoggedUserId] = useLocalStorage("loggedUserId", "");
  const [token, setToken] = useCookiesStorage("token", "");

  useEffect(() => {
    if (!token) {
      setLoggedUserId("");
      setIsLogged(false);
    }
  }, []);

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
