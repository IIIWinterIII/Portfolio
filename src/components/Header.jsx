import React from "react";
import { Link } from "react-router-dom";
import routes from "../routes";

function Header() {
  return (
    <div>
      <nav>
        <ul>
          {routes.map((it, index) => (
            <li key={index}>
              <Link to={it.path}>{it.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Header;
