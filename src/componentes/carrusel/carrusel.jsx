import React from 'react'
import '../carrusel/carrusel.css'
function carrusel() {
  return (
        <div id="carouselIm" interval={2800} className="carousel slide">
        <div className="carousel-inner">
            <div className="carousel-item active">
            <img src="../img/carro.png" alt="First slide" class="d-block w-100" />
            </div>
            <div className="carousel-item">
            <img src="../img/casa1.png" class="d-block w-100"alt="Second slide"/>
            </div>
            <div className="carousel-item">
            <img src="../img/lote.png" className="d-block w-100"  alt="Third slide"/>
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselIm" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselIm" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
        </div>
  )
}

export default carrusel