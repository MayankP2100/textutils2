import React from "react";

export default function Navbar(navbarProps) {
  return (
    <nav className="navbar p-1" style={navbarProps.darkTheme}>
      <div className="container-fluid">
        <span className="navbar-brand fw-semibold fs-2" style={navbarProps.darkTheme}>
          {navbarProps.brand}
        </span>
        <form className="me-auto fw-semibold">
          <a className="navbar-brand" href="/" style={navbarProps.darkTheme}>
            Home
          </a>
          <a className="navbar-brand" href="/" style={navbarProps.darkTheme}>
            {navbarProps.about}
          </a>
        </form>
        {/* <form className="d-flex" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form> */}
        <div className="form-check form-switch form-check-reverse">
          <input
            className="form-check-input my-2"
            type="checkbox"
            id="flexSwitchCheckReverse"
          />
          <label
            className="form-check-label fw-semibold fs-5"
            htmlFor="flexSwitchCheckReverse"
          >
            Toggle Theme
          </label>
        </div>
      </div>
    </nav>
  );
}
