import React, { useState } from "react";

export default function Navbar(navbarProps) {

  const [switchStatus, setSwitchStatus] = useState(true);

  function handleSwitchToggle() {
    if (switchStatus === false) {
      setSwitchStatus(true);
      navbarProps.sendDataToParent(switchStatus);
    } else if (switchStatus === true) {
      setSwitchStatus(false);
      navbarProps.sendDataToParent(switchStatus);
    }
  }

  return (
    <nav className="navbar p-1" style={navbarProps.setTheme}>
      <div className="container-fluid">
        <span
          className="navbar-brand fw-semibold fs-2"
          style={navbarProps.setTheme}
        >
          {navbarProps.brand}
        </span>
        <form className="me-auto fw-semibold">
          <a className="navbar-brand" href="/" style={navbarProps.setTheme}>
            Home
          </a>
          <a className="navbar-brand" href="/" style={navbarProps.setTheme}>
            {navbarProps.about}
          </a>
        </form>
        <div className="form-check form-switch form-check-reverse">
          <input
            className="form-check-input my-2"
            type="checkbox"
            id="flexSwitchCheckReverse"
            onChange={handleSwitchToggle}
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
