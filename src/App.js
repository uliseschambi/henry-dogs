import { Route, useLocation } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Home from "./components/Home"; // import el index
import Nav from "./components/Nav";
import Form from "./components/Form";
import Detail from "./components/Detail";
import Footer from "./components/Footer";

function App() {
  const { pathname } = useLocation();

  return pathname === "/PI-Dogs-main-client/" ? (
    <Route path="/PI-Dogs-main-client/">
      <LandingPage />
    </Route>
  ) : (
    <>
      <Nav />
      <Route exact path="/PI-Dogs-main-client/home">
        <Home />
      </Route>
      <Route exact path="/PI-Dogs-main-client/form">
        <Form />
      </Route>
      <Route exact path="/PI-Dogs-main-client/dog/:id">
        <Detail />
      </Route>
      <Footer />
    </>
  );
}

export default App;
