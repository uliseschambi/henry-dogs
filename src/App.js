import { Route, useLocation } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Home from "./components/Home"; // import el index
import Nav from "./components/Nav";
import Form from "./components/Form";
import Detail from "./components/Detail";
import Footer from "./components/Footer";

function App() {
  const { pathname } = useLocation();

  return pathname === "/" ? (
    <Route path="/">
      <LandingPage />
    </Route>
  ) : (
    <>
      <Nav />
      <Route exact path="/home">
        <Home />
      </Route>
      <Route exact path="/form">
        <Form />
      </Route>
      <Route exact path="/dog/:id">
        <Detail />
      </Route>
      <Footer />
    </>
  );
}

export default App;
