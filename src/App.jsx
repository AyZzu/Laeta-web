import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Mila from "./Pages/subPage/Mila"
import Airi from "./Pages/subPage/Airi"
import Aluna from "./Pages/subPage/Aluna"
import Sevina from "./Pages/subPage/Sevina"
import Oriel from "./Pages/subPage/Oriel"
import Shaon from "./Pages/subPage/Shaon"
import Althea from "./Pages/subPage/Althea"


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="/MilaDragon" element={<Mila />} />
        <Route path="/AiriAirintika" element={<Airi />} />
        <Route path="/AlunaDiva" element={<Aluna />} />
        <Route path="/SevinaReina" element={<Sevina />} />
        <Route path="/ShaonRiverB" element={<Shaon />} />
        <Route path="/AltheaAntonia" element={<Althea />} />
        <Route path="/ShiraishiOriel" element={<Oriel />} />
      </Routes>
    </>
  );
}

export default App;
