import React from "react";
import { useSelector } from "react-redux";
// import './App.css';
import { Link } from 'react-router-dom';

const Header = () => {
  const { cartItems } = useSelector((state) => state.cart);

  return (
    <>
      <nav className="navbar row sticky-top">
        {/* logo */}
        <div className="col-12 col-md-3">
        <Link to={"/"}>
        <img src="/images/logo.webp" alt="logo" className="logo" />
        </Link>
             </div>

        {/* Search bar and Search icon */}
        <div className="col-12 col-md-6 mt-2 mt-md-0">
          <div className="input-group">
            <input
              type="text"
              id="search_field"
              className="form-control"
              placeholder="Search Your Favorite Reastaurant....."
            />
            <div className="input-group-append">
              <button id="search_btn" className="btn">
                <i className="fa fa-search" arial-hidden="true"></i>
              </button>
            </div>
          </div>
        </div>

        {/* Login */}
        <div className="col-12 col-md-3 mt-4 mt-md-0 text-center">
          <button className="btn" id="login_btn">
            Login
          </button>

          <Link to="/cart" style={{textDecoration:"none"}}>
            <span className="ml-3" id="cart">
              Cart
            </span>
            <span className="ml-1" id="cart_count">
              {cartItems.length}
            </span>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Header;
