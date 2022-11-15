import React from "react"
import { m2, producto2, producto3, producto4, producto5, producto6, producto7} from "../../assets"
import './destacados.css'

export const Destacados = () =>{
    return(
        <section id="productos">
        <div class="container text-center mt-5 py-5">
          <h3>Nuestros productos destacados <br />
            <small class="text-muted">Lo que eligen los argentinos.</small></h3>
        </div>
        <div class="container">
          <div class="row row-cols-4 row-cols-md-4">
            <div class="col">
              <div class="card">
                <img src={m2} class="card-img-top" />
                <div class="card-body">
                  <h5 class="card-title">MATE DELUXE DE ALGARROBO -LISO-</h5>
                  <p class="card-text"><small class="text-muted"><del>$10.640,00</del></small><strong> $7.980,00</strong> <br />
                    3 cuotas sin interés de <strong>$2.660,00</strong></p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <img src={producto2} />
                <div class="card-body">
                  <h5 class="card-title">MATE IMPERIAL PREMIUM</h5>
                  <p class="card-text"><small class="text-muted"><del>$11.500,00</del></small><strong> $9.900,00</strong> <br />
                    3 cuotas sin interés de <strong>$3.500,00</strong></p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <img src={producto3} />
                <div class="card-body">
                  <h5 class="card-title">MATE PAMPA</h5>
                  <p class="card-text"><small class="text-muted"><del>$9.500,00</del></small><strong> $7.400,00</strong> <br />
                    3 cuotas sin interés de <strong>$2.550,00</strong></p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <img src={producto4} />
                <div class="card-body">
                  <h5 class="card-title">MATE BLANCO LISO</h5>
                  <p class="card-text"><small class="text-muted"><del>$12.500,00</del></small><strong> $10.400,00</strong> <br />
                    3 cuotas sin interés de <strong>$3.700,00</strong></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}