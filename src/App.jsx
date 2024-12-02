import "./App.css";
import { Switch, Route } from "react-router-dom/";
import SiparisFormu from "./components/SiparisFormu.jsx";
import IntroPage from "./components/IntroPage.jsx";
import Success from "./components/Success.jsx";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={IntroPage} />
        <Route path="/success" component={Success} />
        <Route path="/siparis-formu" component={SiparisFormu} />
      </Switch>
    </div>
  );
}

export default App;
