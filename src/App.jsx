import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./containers/Header";
import Content from "./containers/Content";
import Footer from "./containers/Footer";
function App() {
  return (
    <div className="app vh-100 bg-dark d-flex flex-column">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
