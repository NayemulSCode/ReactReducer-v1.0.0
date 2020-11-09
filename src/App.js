import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import LoginUi from "./LoginUi";

function App() {
  return (
    <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/login">LogIn</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        
        <Route path="/login">
          <LoginUi/>
        </Route>
        {/* <Route path="/">
          <Home />
        </Route> */}
      </Switch>
    </div>
  </Router>
);
}
export default App;
