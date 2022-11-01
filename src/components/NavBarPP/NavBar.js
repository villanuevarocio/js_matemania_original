import React from 'react';
import { navButtos } from '../../data/productos';
import './navbar.css';
import { logo } from '../../assets';


export const NavBar = () =>{
    // console.log(navButtos
    return(<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div classNameName="container-fluid">
      <a className="navbar-brand" > 
            <img src={logo} 
            alt="logo" width={"100px"} id="imagen_logo"/> 
            <h2>Matemania</h2>
       </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbar">
        <ul className="navbar-nav">
            <li className= "nav-item "> <a className="nav-link active "> Inicio</a> </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Productos</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" href="#">Contacto</a>
          </li>        
          <li className="nav-item dropdown">
            <a className="nav-link active dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Mas
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <li><a className="dropdown-item" href="#">Como cuidar tu mate</a></li>
              <li><a className="dropdown-item" href="#">Preguntas frecuentes</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>)
}