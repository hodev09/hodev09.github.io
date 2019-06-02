import React from "react";
import { NavLink } from "react-router-dom";

const NavMain = () => {
  return (
    <div>
      <NavLink to="/"> Home </NavLink>
      <NavLink to="/bio"> Bio </NavLink>
      <NavLink to="/exp"> Experience </NavLink>
      <NavLink to="/techStack"> Tech Stack </NavLink>
    </div>
  );
};

export default NavMain;
