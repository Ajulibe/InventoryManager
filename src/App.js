import "../src/styles/main.css";
import SigninScreen from "./components/SigninScreen";
import OverviewScreen from "./components/OverviewScreen";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import SignupScreen from "./components/SignupScreen";
import CreatebranchScreen from "./components/CreatebranchScreen";
import AssignrolesScreen from "./components/AssignrolesScreen";
import OverviewScreenTeller from "./components/OverviewScreenTeller";
import ProtectedRoute from "./components/ProtectedRoute";
import Userauth from "./components/Userauth";
import OverViewSuper from "./components/AuthflowScreens/OverViewSuper";
import OverViewAdmin from "./components/AuthflowScreens/OverViewAdmin";
import OverViewTeller from "./components/AuthflowScreens/OverViewTeller";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/Signin" component={SigninScreen} />
        <Route exact path="/Signup" component={SignupScreen} />
        <Route exact path="/auth" component={Userauth} />
        <ProtectedRoute path="/overAdmin" component={OverviewScreen} />
        <ProtectedRoute path="/createbranch" component={CreatebranchScreen} />
        <ProtectedRoute path="/assignroles" component={AssignrolesScreen} />

        <ProtectedRoute
          path="/overview/teller"
          component={OverviewScreenTeller}
        />
        <ProtectedRoute path="/auth/superadmin" component={OverViewSuper} />
        <ProtectedRoute path="/auth/admin" component={OverViewAdmin} />
        <ProtectedRoute path="/auth/teller" component={OverViewTeller} />
        <Redirect to="/Signin" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
