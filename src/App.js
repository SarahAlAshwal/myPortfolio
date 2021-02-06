import "./App.css";
import Header from "../src/Components/Header";
import Home from "../src/Components/Home";
import Footer from "../src/Components/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "../src/Components/About";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";

function App() {
  return (
    <div>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/projects">
            <Projects></Projects>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="*">
            <h1>404-Not Found</h1>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
