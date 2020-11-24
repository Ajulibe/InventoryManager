import "../src/styles/main.css";
import SigninScreen from "./components/SigninScreen";
import OverviewScreen from "./components/OverviewScreen";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import SignupScreen from "./components/SignupScreen";
import CreatebranchScreen from "./components/CreatebranchScreen";
import AssignrolesScreen from "./components/AssignrolesScreen";
import OverviewScreenTeller from "./components/OverviewScreenTeller";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/Signin" component={SigninScreen} />
        <Route exact path="/Signup" component={SignupScreen} />
        <ProtectedRoute path="/overAdmin" component={OverviewScreen} />
        <ProtectedRoute path="/createbranch" component={CreatebranchScreen} />
        <ProtectedRoute path="/assignroles" component={AssignrolesScreen} />
        <ProtectedRoute
          path="/overview/teller"
          component={OverviewScreenTeller}
        />
        <Redirect to="/Signin" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
