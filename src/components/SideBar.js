import React from "react";
import image from "../assets/images/LogoPaddleHouse.jpg";
import ContentWrapper from "./ContentWrapper";
import LastMovieInDb from "./LastMovieInDb";
import SearchProducts from "./SearchProducts";
import Chart from './Chart';
import NotFound from "./NotFound";
import { Link, Route, Switch } from "react-router-dom";

function SideBar() {
  return (
    <React.Fragment>
      {/*<!-- Sidebar -->*/}
      <ul
        className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        {/*<!-- Sidebar - Brand -->*/}
        <a
          className="sidebar-brand d-flex align-items-center justify-content-center"
          href="/"
        >
          <div className="sidebar-brand-icon">
            <img className="w-100" src={image} alt="Paddle House" />
          </div>
        </a>

        {/*<!-- Divider -->*/}
        <hr className="sidebar-divider my-0" />

        {/*<!-- Nav Item - Dashboard -->*/}
        <li className="nav-item active">
          <Link className="nav-link" to="/">
            <br />
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <br />
            <span>Dashboard - PH Sports</span>
          </Link>
        </li>

        {/*<!-- Divider -->*/}
        <hr className="sidebar-divider" />

        {/*<!-- Heading -->*/}
        <div className="sidebar-heading">Actions</div>

        <li className="nav-item nav-link">
          <Link className="nav-link" to="/search">
            <i className="fas fa-fw fa-table"></i>
            <span>Buscar Productos</span>
          </Link>
        </li>
        <li className="nav-item">
                    <Link className="nav-link" to="/LastMovieInDb">
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>Ultimo Producto</span></Link>
                </li>

        <li className="nav-item nav-link">
                <Link className="nav-link" to="/chart">
                        <i className="fas fa-fw fa-table"></i>
                        <span>Tabla</span></Link>
                </li>
        {/*<!-- Divider -->*/}
        <hr className="sidebar-divider d-none d-md-block" />
      </ul>

      <Switch>
        <Route exact path="/">
          <ContentWrapper />
        </Route>
        <Route path="/LastMovieInDb">
          <LastMovieInDb />
        </Route>
        <Route path="/Chart">
                    <Chart />
                </Route>
        <Route path="/search" component={SearchProducts} />
        <Route component={NotFound} />
      </Switch>
    </React.Fragment>
  );
}
export default SideBar;
