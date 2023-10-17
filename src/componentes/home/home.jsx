import React from 'react'
import Narvbar from '../narvbar/narbvar'
import Carrusel from '../carrusel/carrusel'
import Carrito from '../carrito-compras/carrito'


function home() {
  return (
    <>
    <div>
      <Narvbar />
      <Carrusel />
      <Carrito/>
      
      {/* SECCIÓN CONTACTO DE INICIO */}
      <div id="Contacto_Inicio">
        <h1 className="text-white" style={{ textAlign: "left", marginLeft: "115px", marginTop: "150px" }}>
          <b>Comunícate con Nosotros</b>
        </h1>
        <h2 className="text-white mt-5" style={{ textAlign: "left", marginLeft: "115px" }}>
          Contacto
        </h2>
        <h2 className="text-white" style={{ textAlign: "left", marginLeft: "115px" }}>
          Correos Institucionales
        </h2>
      </div>
    </div>
    </>

    
  )
}

export default home