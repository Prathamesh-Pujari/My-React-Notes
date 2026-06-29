import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="mb-5 p-5 flex gap-8 font-bold bg-gray-600 text-white">
      <div>
        <NavLink to="/">Home</NavLink>
      </div>
      <div>
        <NavLink to="/products">Products</NavLink>
      </div>
      <div>
        <NavLink to="/animals">Animals</NavLink>
      </div>
      <div>
        <NavLink to="/fruits">Fruits</NavLink>
      </div>
      <div>
        <NavLink to="/users">Users</NavLink>
      </div>
    </div>
  );
};

export default Navbar;
