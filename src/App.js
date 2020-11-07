import "./styles/App.scss";
import SigninScreen from "./components/SigninScreen";
import OverviewScreen from "./components/OverviewScreen";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import SignupScreen from "./components/SignupScreen";
import CreatebranchScreen from "./components/CreatebranchScreen";
import AssignrolesScreen from "./components/AssignrolesScreen";

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
        <Route exact path="/createbranch">
          <CreatebranchScreen />
        </Route>
        <Route exact path="/assignroles">
          <AssignrolesScreen />
        </Route>
        <Redirect to="/Signup" />
      </Switch>
    </Router>
  );
}

export default App;
