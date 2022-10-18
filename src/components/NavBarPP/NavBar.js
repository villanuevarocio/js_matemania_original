import React from 'react';
import { navButtos } from '../../data/productos';



export const NavBar = () =>{

    // console.log(navButtos)
    return(
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
            <div className='container-fluid'>
                <a className='navbar-brand' href='#'>Navbar</a>
                <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div className='collapse navbar-collapse' id='navbarNav'>
                    <ul className='navbar-nav'>
                        {navButtos.map( 
                            ({text, link}) => (<li key= {text} className= 'nav-item'>
                            <a className='nav-link' aria-current='page' href={link} target='_blanck'> (text) </a>
                        </li>)
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    )
}


