import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import PropTypes from 'prop-types'
import TextForm from "./components/TextForm";

function App() {
  let navbarProps = {
    brand: PropTypes.string.isRequired,
    about: PropTypes.string.isRequired
  };

  navbarProps.brand = "TextUtils2";
  navbarProps.about = "About";
  return (
    <>
      <Navbar {...navbarProps} />
      <TextForm />
    </>
  );
}

export default App;
