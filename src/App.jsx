import "./App.css";
import { Switch, Route } from "react-router-dom/";
import SiparisFormu from "./components/SiparisFormu.jsx";
import LandingPage from "./components/LandingPage.jsx";
import AppBar from "./components/AppBar.jsx";

function App() {
  return (
    <div>
      {/*  <AppBar /> */}
      <Switch>
        <Route path="/" component={LandingPage} />
      </Switch>
      <Switch>
        <Route path="/siparis-onayi" component={SiparisFormu} />
      </Switch>
    </div>
  );
}

export default App;
