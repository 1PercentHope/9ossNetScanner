import Scanner from "./Components/Scanner/Scanner.jsx";
import SignIn from "./Components/SignIn/SignIn.jsx";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import store from "./store.js";
import { Provider } from "react-redux";
import './App.css'
function App() {
  return (
    <div className='main'>
      <nav className="navBar"> 
      <div className="icon">
          <div className='line1'></div>
          <div className='line2'></div>
          <div className='line3'></div>
      </div>
        </nav>
      <div className='logIn'>
       <center> <Provider store={store}>
          <Router>
            <root>
              <Route path="/" exact={true} component={SignIn} />
              <Route path="/scanner" component={Scanner} />
            </root>
          </Router>
        </Provider></center>
      </div>
    </div>
  );
}

export default App;
