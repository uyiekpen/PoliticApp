import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/Navlink/About";
import Awards from "./components/Awards/Award"

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/award" exact component={Awards} />


      </Switch>
    </Router >
  );
}

export default App;
