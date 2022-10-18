import React, { Component } from "react";

class SmallCard extends Component {
    constructor(props) {
        super(props); //ejecuta el constructor de component que es una clase de react
        this.state = {
            products: 0,
            users: 0,
            categories: 0,
        };
    }

    apiCall(url, respuesta) {
        fetch(url)
            .then((response) => response.json())
            .then((data) => respuesta(data))
            .catch((e) => console.log(e));
    }

    componentDidMount() {
        this.apiCall("/api/products", this.totalProductos);
        this.apiCall("/api/users", this.totalUsuarios);
        this.apiCall("/api/products", this.totalCategorias);
    }

    totalProductos = (data) => {
        this.setState({
            products: data.count.total, // en el state de este comnponente seteale en la propiedad  total el valor data.meta.total
        });
    };

    totalUsuarios = (data) => {
        this.setState({
            users: data.count.total,
        });
    };

    totalCategorias = (data) => {
        this.setState({
            categories: data.count.totalCategorias,
        });
    };

    render() {
        return (
            <React.Fragment>
                <div className="col-md-4 mb-4">
                    <div className="card border-left-primary shadow h-100 py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                        Productos
                                    </div>
                                    <div className="h5 mb-0 font-weight-bold text-gray-800">
                                        {this.state.products}
                                    </div>
                                </div>
                                <div className="col-auto">
                                    <i className="fas fa-film fa-2x text-gray-300"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Total awards --> */}
                <div className="col-md-4 mb-4">
                    <div className="card border-left-success shadow h-100 py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                                        {" "}
                                        Usuarios Registrados
                                    </div>
                                    <div className="h5 mb-0 font-weight-bold text-gray-800">
                                        {this.state.users}
                                    </div>
                                </div>
                                <div className="col-auto">
                                    <i className="fas fa-award fa-2x text-gray-300"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Actors quantity --> */}
                <div className="col-md-4 mb-4">
                    <div className="card border-left-warning shadow h-100 py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                                        Categorías
                                    </div>
                                    <div className="h5 mb-0 font-weight-bold text-gray-800">
                                        {this.state.categories}
                                    </div>
                                </div>
                                <div className="col-auto">
                                    <i className="fas fa-user fa-2x text-gray-300"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
export default SmallCard;
