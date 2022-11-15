import React from 'react'
import { Link } from 'react-router-dom'
import './footer.css'




export const Footer = () => {
  return (
    <footer className='text-white py-4 bg-dark'>
        <div className="container">
            <div className="row gy-3">
                <div className="col-lg-3 col-md-6 d-flex">
                    <i className="bi bi-geo-alt icon"></i>
                    <div>
                        <h4>Direccion</h4>
                        <p>
                        Maipu 864, CABA <br/>
                        </p>
                        <p>
                        Buenos Aires, Argentina <br/>
                        </p>
                    </div>

                </div>

                <div className="col-lg-3 col-md-6 footer-links d-flex">
                    <i className="bi bi-telephone icon"></i>
                    <div>
                        <h4>Menu</h4>
                        <ul className="nav flex-column" id="menu">
                        <li className="nav-item mb-2"><Link
                        to="inicio">
                        Inicio
                        </Link>
                        </li>

                        <li className="nav-item mb-2"><Link
                        to="productos">
                        Productos
                        </Link>
                        </li>

                        <li className="nav-item mb-2"><Link
                        to="contacto">
                        Contacto
                        </Link>
                        </li>
                        </ul>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6 footer-links d-flex">
                    <i className="bi bi-clock icon"></i>
                    <div>
                        <h4>Abierto de</h4>
                        <p>
                        <strong>Lun-Sab:</strong>  11AM - 23PM<br/>
                        Domingos: Cerrado
                        </p>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 footer-links">
                  <h4>Seguinos</h4>
                  <div class="social-links d-flex justify-content-between">
                    <a href="https://wa.me/542944924649" class="twitter"><i class="bi bi-whatsapp" href="https://wa.me/542944924649"></i></a>
                    <a href="https://www.facebook.com/CheMateAr?_ga=2.88231707.1203844562.1667247646-669339932.1662398604&_gac=1.84163307.1667255571.CjwKCAjw5P2aBhAlEiwAAdY7dJ-ituxj7HhPoK6m24iAytYAevFD6qb_W1hnttgnZaaCXgbYmqfRNBoCcRIQAvD_BwE" class="facebook"><i class="bi bi-facebook" href="https://wa.me/542944924649"></i></a>
                    <a href="https://www.instagram.com/che.mate/?_ga=2.88231707.1203844562.1667247646-669339932.1662398604&_gac=1.84163307.1667255571.CjwKCAjw5P2aBhAlEiwAAdY7dJ-ituxj7HhPoK6m24iAytYAevFD6qb_W1hnttgnZaaCXgbYmqfRNBoCcRIQAvD_BwE" class="instagram"><i class="bi bi-instagram"></i></a>
                    <a href="https://www.youtube.com/watch?v=7tmDMPiu_cM&ab_channel=SudamericanMate" class="linkedin"><i class="bi bi-youtube"></i></a>
                  </div>
                </div>
            </div>
        </div>

        <div className="container text-center">
            <div className="copyright">
                &copy; Copyright <strong><span>Matemania</span></strong>. Todos los derechos reservados
            </div>
        </div>
    </footer>
)
}
