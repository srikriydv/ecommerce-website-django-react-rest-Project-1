import React from "react";
import { Link } from "react-router-dom";
import { UserContext, CartContext } from "../Context";
import { useContext } from "react";

function Header() {
  const linkStyle = {
    fontSize: "40px",
  };
  const userContext = useContext(UserContext);
  const {cartData, setCartData} = useContext(CartContext);
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <Link className="navbar-brand" style={linkStyle} to="/">
            Python Market Place
          </Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
              <li className="nav-item active">
                <Link className="nav-link" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/categories">
                  Categories
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  My Account
                </a>
                <ul className="dropdown-menu">
                  {userContext != 'true' &&
                    <>
                      <li><Link className="dropdown-item" to="/customer/login">Login</Link></li>
                      <li><Link className="dropdown-item" to="/customer/register">Register</Link></li>
                    </>}
                  {userContext == 'true' &&
                    <>
                      <li><Link className="dropdown-item" to="/customer/dashboard">Dashboard</Link></li>
                      <li><Link className="dropdown-item" to="/customer/logout">logout</Link></li>
                    </>
                  }
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Vender Panel
                </a>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/seller/login">Login</Link></li>
                  <li><Link className="dropdown-item" to="/seller/register">Register</Link></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><Link className="dropdown-item" to="/seller/dashboard">Dashboard</Link></li>
                  <li><Link className="dropdown-item" to="/seller/login">logout</Link></li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/checkout">
                  New Orders (4)
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/checkout">
                  My Cart ({cartData.length})
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
