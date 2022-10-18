import React from "react";
import imagenFondo from "../assets/images/6328118.jpg";

function LastProductInDb() {
    return (
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">
                        Paddle House Products
                    </h5>
                </div>
                <div className="card-body">
                    <div className="text-center">
                        <img
                            className="img-fluid px-3 px-sm-4 mt-3 mb-4"
                            style={{ width: 40 + "rem" }}
                            src={imagenFondo}
                            alt=" Paddle House - Deportes "
                        />
                    </div>
                    <p>
                        El pádel (Paddle en Inglés) es un deporte de raqueta que se adapta a
                        todas las edades. Se juega siempre en pareja y consta de tres
                        elementos fundamentales para su desarrollo: la pelota, la paleta o
                        raqueta y el campo de juego o cancha. Desde **PaddleHouse** te
                        traemos al país las paletas y accesorios de marcas ya establecidas
                        en el mercado que mejor se adaptan a las necesidades de los que aman
                        este deporte, junto con otros accesorios que forman parte de los
                        elementos necesarios para disfrutar a pleno y de manera segura de
                        este deporte.
                    </p>
                    <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">
                        View products details
                    </a>
                </div>
            </div>
        </div>
    );
}

export default LastProductInDb;
