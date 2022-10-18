import React, { useState, useEffect, useRef } from "react";

import noPoster from "../assets/images/404.jpg";

function SearchProducts() {
  const inputRef = useRef(null);
  const [keyword, setKeyword] = useState("action");
  const url = "http://localhost:3050/api/products/";
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data.Search))
      .catch((err) => console.error(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [keyword]);

  const searchProductsHandler = (e) => {
    e.preventDefault();
    setKeyword(inputRef.current.value);
    console.log("se envio tu busqueda");
  };

  return (
    <div className="container-fluid">
      {(
        <>
          <div className="row my-4">
            <div className="col-12 col-md-6">
              {/* Buscador */}
              <form method="GET" onSubmit={searchProductsHandler}>
                <div className="form-group">
                  <label htmlFor="">Buscar por Categoria:</label>
                  <input type="text" className="form-control" ref={inputRef} />
                </div>
                <button className="btn btn-info">Search</button>
              </form>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <h2>Productos para la palabra: {keyword}</h2>
            </div>
            {/* Listado de Productos */}
            {searchProductsHandler &&
              products.map((product, i) => {
                return (
                  <div className="col-sm-6 col-md-3 my-4" key={i}>
                    <div className="card shadow mb-4">
                      <div className="card-header py-3">
                        <h5 className="m-0 font-weight-bold text-gray-800">
                          {setProducts.brand}
                        </h5>
                      </div>
                      <div className="card-body">
                        <div className="text-center">
                          <img
                            className="img-fluid px-3 px-sm-4 mt-3 mb-4"
                            src={product.category ? product.category : noPoster}
                            alt={product.brand}
                            style={{
                              width: "90%",
                              height: "400px",
                              objectFit: "cover",
                            }}
                          />
                        </div>
                        <p>{product.model}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
          {!products && (
            <div className="alert alert-warning text-center">
              No se encontraron productos de ese tipo
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default SearchProducts;
