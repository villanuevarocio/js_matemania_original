

import { Routes, Route } from "react-router-dom";

import './App.css'


import { CardGrid } from "./components/CardGrid/CardGrid";
import { productos } from "./data/productos";
import { Carrusel } from "./components/Carrusel/carrusel";
import { Confiar } from "./components/Confiar/Confiar";
import { Destacados } from "./components/Destacados/destacados";
import { NavBar } from "./components/NavBarPP/NavBar";
import { Footer } from "./components/Footer/Footer";
import { Home } from "./components/pages/Home";



function App() {
  //  console.log(dataProducts)
  return (
    <>
    <NavBar />
    <br/>
    <Carrusel/>
    <br />
    <Destacados/>

    <br/>



    {/* <CardGrid data={productos} /> */}
    <Confiar />



    <Footer />

    </>
  );
}

export default App;
