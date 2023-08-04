import React from "react";
import { NavLink,useLocation } from "react-router-dom";

function NavBar() {
  const location=useLocation()
  return <div>{/*{code here}*/}
  <div className="navbar">
    <NavLink to="/">Home</NavLink>
    <NavLink to="/movies">Movies</NavLink>
    <NavLink to="/directors">Directors</NavLink>
    <NavLink to="/actors">Actors</NavLink>
  </div>
  </div>;
}

export default NavBar;