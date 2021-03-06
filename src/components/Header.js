import * as React from "react";
import { Link } from "react-router-dom";

export default function ButtonAppBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-primary text-light">
      <div className="container-fluid">
        <Link className="navbar-brand text-light" to="/">
          Shoe Store
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-link text-light" to="products">
              Products
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
