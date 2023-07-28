import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import PropTypes from 'prop-types'

function App() {
  let navbarProps = {
    brand: PropTypes.string.isRequired,
    about: PropTypes.string.isRequired
  };

  navbarProps.brand = "TextUtils";
  navbarProps.about = "About";
  return (
    <>
      <Navbar {...navbarProps} />
    </>
  );
}

export default App;
