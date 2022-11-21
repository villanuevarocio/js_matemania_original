import React from "react";
import { origen } from "../../assets";
import './origen.css'


 
export const Origen = () => {
    return (

     <><></><section className="sobre_nosotros" id="sobre_nosotros">
            <div className="container">

                <div className="row text-black">
                    <div className="col-lg-6 col-md-12 ">
                        <img classNameName="img-responsive" src={origen} width="400px" alt="..." />
                    </div>

                    <div className="col-lg-6 col-md-12 mt-4">
                        <h1 id="titulo"><strong> ORIGEN</strong> </h1>
                        <p> Nuestros productos premium son desarrollados bajo los más altos estándares de calidad y responsabilidad.</p> <br></br>
                        <p id="flores"> ✤  ✤  ✤ </p> <br />
                        <p>
                            Producida y envasada en el sur de la provincia de Misiones, zona en la que se encuentra la mejor calidad de materia prima.De sabor intenso, con tonos ahumados y un leve amargor, Origen nace inspirada en el trabajo y la pasión de los antiguos productores de yerba mate.<br></br> Nuestro exclusivo blend es el resultado de la cuidadosa selección de materias primas, el tradicional secado barbacuá y el prolongado estacionamiento natural. Es la opción ideal para quienes buscan el sabor tradicional y las propiedades energizantes y antioxidantes de la yerba mate.
                        </p>
                        <p>
                        Ofrecemos la más amplia variedad de mates  en el país. Con nosotros encontrarás todo lo referido al mate para todos los gustos y estilos, de la más alta calidad y a precios competitivos.<br></br> Trabajamos con dedicación pensando en la satisfacción de nuestros clientes. Estamos ubicados en la localidad de Palermo, nuestro personal está para atenderle.
                        </p>
                    </div>
                </div>

            </div>
        </section><section className="sobre_nosotros" id="quienes_somos">
                <div className="container">
                    <br></br>

                    <div className="col-12">
                        <h1>QUIÉNES SOMOS ?</h1>
                        <p> Somos una familia matera, que se encarga de brindarte los mejores insumos materos para todas tus necesidades. Nos caracterizamos por tener buena calidad en nuestros productos y muy buena atención.<br /> <br /> Nos enfocamos en los detalles y en la atención personalizada para poder brindar un servicio cálido y eficiente. En MateManía no solo ofrecemos insumos materos sino también productos que conllevan historias, leyendas, buenos momentos y costumbres de nuestros pasado, presente y futuro.</p>
                        <p>¡TE INVITAMOS A SER UN #MATEMANIACO!</p>

                    </div>
                    <br></br>

                </div>
            </section></>
    
    );

 }

