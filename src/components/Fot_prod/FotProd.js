import React from "react"
import './FotProd.css'
import { personalizado1 } from '../../assets'

export const FotProd = () => {
    return(
        <section id="foto_prod">
            <div class="row p-5">
                <div class="col-md-7">
                    <h2 class="heading"> Te hacemos tu mate a la medida </h2>
                    <p class="lead">Realizamos mates personalizados a medida, para que tu mate sea unico.</p>
                    <div className="mt-5">
                        <button className="btn btn-sm btn-outline-success"> Contactanos </button>
                    </div>
                </div>
                <div class="col-md-5">
                    <img src={personalizado1} className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" alt="..." />
                </div>
            </div>
      </section>

    )

}