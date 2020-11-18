import Scanner from "./Components/Scanner/Scanner.jsx";
import SignIn from "./Components/SignIn/SignIn.jsx";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import store from "./store.js";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <root>
          <Route path="/" exact={true} component={SignIn} />
          <Route path="/scanner" component={Scanner} />
        </root>
      </Router>
    </Provider>
  );
}

export default App;
