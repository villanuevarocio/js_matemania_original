import React from "react"
import './FotProd.css'
import { personalizado1 } from '../../assets'

export const FotProd = () => {
    return(
        <section id="foto_prod">
            <div className="container py-5">

                <div className="row text-black">

                    <div className="col-lg-6 col-md-12">
                        <img classNameName="img-responsive" src={personalizado1} width="400px" alt="..." />
                    </div>

                    <div className="col-lg-6 col-md-12 mt-4">
                        <h1 id="titulo"><strong> Realizamos mates personalizado a pedido</strong> </h1>
                        <h3> Nuestros productos premium son desarrollados bajo los más altos estándares de calidad y responsabilidad.</h3> <br></br>
                        <h3>
                        Cada calabaza crece distinta, a su tiempo y con su forma. Mas Grandes, mas pequeñas, mas angostas o amplias:
                        la naturaleza no se repite, siempre crea.
                        Al pasa los años tu palma desarrolla un vinculo unico con aquella textura, con aquella forma,
                        y cada nuevos encuentro con tu mate es un reencuentro con experiencias vividas, momentos guardados y sensaciones grabadas.
                        </h3>
                        <div className="d-grid mt-4">
                            <button className="btn btn-sm btn-outline-success"> Contactanos por nuestro tu mate presonalizado</button>
                        </div>
                    </div>

                </div>

            </div>
      </section>

    )

}