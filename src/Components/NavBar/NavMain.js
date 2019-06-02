import React from "react";
import { NavLink } from "react-router-dom";

const NavMain = () => {
  return (
    <div>
      <NavLink to="/" exact activeStyle={active}>
        {" "}
        Home{" "}
      </NavLink>
      <NavLink to="/bio" activeStyle={active}>
        {" "}
        Bio{" "}
      </NavLink>
      <NavLink to="/exp" activeStyle={active}>
        {" "}
        Experience{" "}
      </NavLink>
      <NavLink to="/techStack" activeStyle={active}>
        {" "}
        Tech Stack{" "}
      </NavLink>
      <NavLink to="/contact" activeStyle={active}>
        {" "}
        Contact Me{" "}
      </NavLink>
    </div>
  );
};

const active = {
  fontWeight: "bold",
  color: "red"
};

export default NavMain;
