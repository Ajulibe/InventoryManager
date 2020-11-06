import "./App.css";
import SigninScreen from "./components/SigninScreen";
import OverviewScreen from "./components/OverviewScreen";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import SignupScreen from "./components/SignupScreen";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/Signin">
          <SigninScreen />
        </Route>
        <Route exact path="/Signup">
          <SignupScreen />
        </Route>
        <Route exact path="/Overview">
          <OverviewScreen />
        </Route>
        <Redirect to="/Signup" />
      </Switch>
    </Router>
  );
}

export default App;
