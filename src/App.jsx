import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SiparisFormu from "./components/SiparisFormu.jsx";
import CustomHeader from "./components/CustomHeader.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <CustomHeader />
      <SiparisFormu />
    </>
  );
}

export default App;
