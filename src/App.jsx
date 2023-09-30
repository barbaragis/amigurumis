// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { NavBar } from "./Componentes/Nav/NavBar";
import { Home } from "./Pages/Home";
import { Detail } from "./Pages/Detail";
import {Footer} from "./Componentes/Footer/Footer"
import { Personalizados } from "./Pages/Personalizados/Personalizados";
import {Contacto} from "./Pages/Contacto/Contacto"


function App() {
  return (
    <>
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/item/:id" element={<Detail />} />
          <Route path="/category/:id" element={<div>categoria</div>} />
          <Route path="/personalizados" element={<Personalizados/>} />
          <Route path="/contacto" element={<Contacto/>} />
        </Routes>
      </div>
    </Router>
    <Footer />
    </>

  );
}

export default App;
