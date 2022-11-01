import { VarConstLet } from "./components/fundamentos/01-VarConstLet";
import { TemplateString } from "./components/fundamentos/02-TemplateString";
import { Routes, Route } from "react-router-dom";

import './App.css'

import { ObjetosLiterales } from "./components/fundamentos/03-Object";
import { JsArray } from "./components/fundamentos/04-Array";
import { CardGrid } from "./components/CardGrid/CardGrid";
import { productos } from "./data/productos";
import { DesestObj } from "./components/fundamentos/06-DesestObj";
import { Carrusel } from "./components/Carrusel/carrusel";
import { DesestArray } from "./components/fundamentos/07-DesestArray";
import { NavBar } from "./components/NavBarPP/NavBar";
import { Footer } from "./components/Footer/Footer";
import { HeroBanner } from "./components/HeroBanner/HeroBanner";
import { Map } from "./components/fundamentos/04-1-Map";
import { Home } from "./components/pages/Home";


function App() {
  //  console.log(dataProducts)
  return (
    <>
    <NavBar />
    <br/>
    <Carrusel/>



    <HeroBanner />

    <CardGrid data={productos} />


    <Footer />

    </>
  );
}

export default App;
