import React from "react"
import './Mate_Personalizado.css'
import { personalizado1 } from '../../assets'
import { Link } from "react-router-dom"

export const Mate_Personalizado = () => {
    return(
        <section id="foto_prod">
            <div className="container py-5">

                <div className="row text-black">

                    <div className="col-lg-6 col-md-12">
                        <img classNameName="img-responsive" src={personalizado1} id="imagen" alt="mate personalizado" />
                    </div>

                    <div className="col-lg-6 col-md-12 mt-4">
                        <h1 id="titulo"><strong> Realizamos mates personalizados a pedido.</strong> </h1>
                        <p id="parrafo"> Nuestros productos premium son desarrollados bajo los más altos estándares de calidad y responsabilidad. <br></br>
                        Cada calabaza crece distinta, a su tiempo y con su forma. Más grandes, más pequeñas, más angostas o amplias:
                        la naturaleza no se repite, siempre crea.
                        Al pasar los años tu palma desarrolla un vínculo único con aquella textura, con aquella forma,
                        y cada nuevo encuentro con tu mate es un reencuentro con experiencias vividas, momentos guardados y sensaciones grabadas.
                        </p>
                        <div className="d-grid mt-4">
                            <button className="btn btn-sm btn-outline-dark" id="boton">
                                <Link to="/contacto" className="text-success">
                                Pedí tu mate
                                </Link>
                            </button>
                        </div>
                    </div>

                </div>

            </div>
      </section>

    )

}