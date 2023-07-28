import React from "react";

export default function Navbar(navbarProps) {
  return (
    <nav className="navbar bg-primary-subtle">
      <div className="container-fluid">
        <span className="navbar-brand fw-semibold fs-2">{navbarProps.brand}</span>
        <form className="me-auto fw-semibold">
          <a className="navbar-brand" href="/">
            Home
          </a>
          <a className="navbar-brand" href="/">
            {navbarProps.about}
          </a>
        </form>
        <form className="d-flex" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
  );
}
