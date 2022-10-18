import React, { Component } from "react";

class SmallCardCategorias extends Component {
    constructor(props) {
        super(props);
        this.state = {
            paletas: 0,
            accesorios: 0,
            bolsos: 0,
        };
    }

    apiCall(url, respuesta) {
        fetch(url)
            .then((response) => response.json())
            .then((data) => respuesta(data))
            .catch((e) => console.log(e));
    }

    componentDidMount() {
        this.apiCall("/api/products", this.totalPaletas);
        this.apiCall("/api/products", this.totalAccesorios);
        this.apiCall("/api/products", this.totalBolsos);
    }

    totalPaletas = (data) => {
        this.setState({
            paletas: data.count.totalPaletas, // en el state de este comnponente seteale en la propiedad  total el valor data.meta.total
        });
    };

    totalAccesorios = (data) => {
        this.setState({
            accesorios: data.count.totalAccesorios,
        });
    };

    totalBolsos = (data) => {
        this.setState({
            bolsos: data.count.totalBolsos,
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
                                        Paletas
                                    </div>
                                    <div className="h5 mb-0 font-weight-bold text-gray-800">
                                        {this.state.paletas}
                                    </div>
                                </div>
                                <div className="col-auto">
                                    <i className="fas fa-bullseye fa-2x text-gray-300"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 mb-4">
                    <div className="card border-left-success shadow h-100 py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                                        {" "}
                                        Accesorios
                                    </div>
                                    <div className="h5 mb-0 font-weight-bold text-gray-800">
                                        {this.state.accesorios}
                                    </div>
                                </div>
                                <div className="col-auto">
                                    <i className="fas fa-user-circle fa-2x text-gray-300"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 mb-4">
                    <div className="card border-left-warning shadow h-100 py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                                        Bolsos
                                    </div>
                                    <div className="h5 mb-0 font-weight-bold text-gray-800">
                                        {this.state.bolsos}
                                    </div>
                                </div>
                                <div className="col-auto">
                                    <i className="fas fa-shopping-bag fa-2x text-gray-300"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
export default SmallCardCategorias;
