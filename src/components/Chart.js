import React, { Component } from 'react';
import ChartRow from './ChartRow';

class Chart extends Component {
    constructor(props) {
        super(props); //ejecuta el constructor de component que es una clase de react
        this.state = {
            productList: []
        };
      }
    
      apiCall(url, respuesta) {
        fetch(url)
          .then((response) => response.json())
          .then((data) => respuesta(data))
          .catch((e) => console.log(e));
      }
    
      componentDidMount() {
        this.apiCall("/api/products", this.products);
      }

      products = (data) => {
          this.setState({
              productList: data.data
          })
      }

      render() {
          return(
              <React.Fragment>
                          {/*<!-- PRODUCTS LIST -->*/}
                       
                          {/*<!-- DataTales Example -->*/}
                          <div className="card shadow mb-4">
                              <div className="card-body">
                                  <div className="table-responsive">
                                      <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                                          <thead>
                                          <h1 className="h3 mb-2 text-gray-800 ">Lista de productos</h1>
                                              <tr>
                                                  <th>Id</th>
                                                  <th>Marca</th>
                                                  <th>Descripción</th>
                                                  <th>Precio</th>
                                              </tr>
                                          </thead>
                                          <tbody>
                                              {this.state.productList.map((producto, index) => {return <ChartRow item= {producto} key={index}/>})}
                                          </tbody>
                                      </table>
                                  </div>
                              </div>
                          </div>            
              </React.Fragment>
          )
      }
}
export default Chart;