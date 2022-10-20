import React, { Component } from "react";

class LastMovie extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            lastProduct: []
        }
    }

    apiCall(url, consecuencia) {
        fetch(url)
            .then(response => response.json())
            .then(data => consecuencia(data))
            .catch(e => console.log(e))
    }

    componentDidMount() {
        this.apiCall("http://localhost:3000/api/products/lastProduct", this.lastProduct);
    }

    lastProduct = (data) => {
        this.setState({
            name: data.data[0].name,
            description: data.data[0].description,
            image: data.data[0].image,
            price: data.data[0].price,
        })
    }

    render() {
        let url = "/images/uploads/" + this.state.image
        return (
          <div className="col-lg-6 mb-4">
              <div className="card shadow mb-4">
                  <div className="card-header py-3">
                      <h5 className="m-0 font-weight-bold text-gray-800">Ultimo Producto Listado - {this.state.name} </h5>
                  </div>
                  <div className="card-body">
                      <div className="text-center">
                          <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 15 +'rem'}} src={url} alt=" Ultimo producto "/>
                      </div>
                      <p>{this.state.description}</p>
                      <p>{this.state.price}</p>
                      <a className="btn btn-danger" target="_blank" rel="nofollow" href="http://localhost:3050/products">View on the website</a>
                  </div>
              </div>
          </div>
        );
    }
};

export default LastMovie;