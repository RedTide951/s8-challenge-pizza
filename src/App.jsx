import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route } from "react-router-dom/";
import SiparisFormu from "./components/SiparisFormu.jsx";
import CustomHeader from "./components/CustomHeader.jsx";
import IntroPage from "./components/IntroPage";

function App() {
  return (
    <div>
      <IntroPage />
      <CustomHeader />
      <Switch>
        <Route path="/siparis-formu" component={SiparisFormu} />
      </Switch>
    </div>
  );
}

export default App;
