import React from "react";
import {NavLink} from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav>
      <div className="nav-wrapper blue px1">
        <a href="/" className="brand-logo">
          Learn Typescript
        </a>
        <ul className="right hide-on-med-and-down">
          <li>
            <NavLink to="/">Главная</NavLink>
          </li>
          <li>
            <NavLink to="/about">О странице</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
