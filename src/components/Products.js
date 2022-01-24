import React from "react";
import { Link, Outlet } from "react-router-dom";

const Products = () => {
  return (
    <div className="container">
      <div className="row">
        <h3>Products</h3>
        <Outlet />
      </div>
    </div>
  );
};

export default Products;
