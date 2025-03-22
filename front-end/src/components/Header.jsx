import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsStaggered } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [selected, setSelected] = useState("Home");

  return (
    <nav className="header">
      <div className="header-container">
        <Link>
          <FontAwesomeIcon icon={faBarsStaggered} style={{ fontSize: "21px" }} />
        </Link>

        <ul className="header-items">
          {[
            { name: "Home", path: "/" },
            { name: "Categories", path: "/" },
            { name: "Log In", path: "/" },
          ].map((item) => (
            <li
              key={item.name}
              className={selected === item.name ? "active" : ""}
              onClick={() => setSelected(item.name)}
            >
              <Link to={item.path}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
); };

export default Header;