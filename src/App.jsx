import { useState } from "react";
import "./App.css";
import UnicornNavbar from "./Common/Navbar/UnicornNavbar";
import Verify from "./Common/Navbar/Verify/Verify";

import About from "./Features/About/About";

function App() {
  return (
    <>
      <UnicornNavbar />

      <About />
    </>
  );
}

export default App;
