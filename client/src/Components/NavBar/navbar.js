import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../NavBar/navbar.css";
import logo from "../../Assets/Images/uaplLogo.png"
import { TrackOrderIcon, HamburgetMenuClose, HamburgetMenuOpen } from "../NavBar/icons";

function NavBar() {
  const [click, setClick] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleClick = () => setClick(!click);

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          
            <NavLink exact to="/" className="nav-logo">
                {screenWidth > 960 && <span>Track Your Order</span>}
              <span className="icon">
                <TrackOrderIcon />
              </span>
            </NavLink>
          <div className='logo'>
            <img src={logo}  alt="logo"/>
          </div>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/a"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Services
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/a"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                About Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/a"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Login
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            {click ? (
              <span className="icon">
                <HamburgetMenuClose />{" "}
              </span>
            ) : (
              <span className="icon">
                <HamburgetMenuOpen />
              </span>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
