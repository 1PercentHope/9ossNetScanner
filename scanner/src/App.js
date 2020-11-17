import Scanner from "./Components/Scanner/Scanner.jsx";
import SignIn from "./Components/SignIn/SignIn.jsx";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <root>
        <Route path="/" exact={true} component={SignIn} />
        <Route path="/scanner" component={Scanner} />
      </root>
    </Router>
  );
}

export default App;
