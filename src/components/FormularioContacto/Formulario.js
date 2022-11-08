import React from 'react'

export function FormularioContacto() {
    return (
    < section class="container">
        <h2 class="titulo"> CONTACTANOS! </h2>
    
        <div class="row">
            <div class="col-4">
                
                <form class="row g-3">
                    <div class="col-12">
                        <label for="inputEmail4" class="form-label">Nombre y Apellido</label>
                        <input type="email" class="form-control" id="inputEmail4"></input>
                    </div>

                    <div class="col-12">
                        <label for="inputEmail4" class="form-label">Teléfono celular</label>
                        <input type="email" class="form-control" id="inputEmail4"></input>
                    </div>
                
                <div class="col-12">
                    <label for="email" class="form-label">E-mail<span class="text-muted"></span></label>
                    <input type="email" class="form-control" id="email" placeholder="usuario@gmail.com"></input>

                    <div class="invalid-feedback">
                    Direccion de correo errónea
                    </div>
                </div>

                <div class="col-12">
                    <label for="inputEmail4" class="form-label">Tu consulta</label>
                    <input type="email" class="form-control" id="inputEmail4"></input>
                </div>

                <div class="col-12">
                    <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="gridCheck"></input>
                    <label class="form-check-label" for="gridCheck">
                        Deseo suscribirme y recibir ofertas exclusivas.
                    </label>
                    </div>
                    
                </div>
                
                <button type="button" class="btn btn-dark">Enviar</button>
                </form>
                
            </div>
        </div>
            
    </section>
    )
}