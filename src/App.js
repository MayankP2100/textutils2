import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import PropTypes from "prop-types";
import TextForm from "./components/TextForm";

function App() {
  const [themeValue, setThemeValue] = useState(false);

  let generalTheme;
  let navbarTheme;
  let textareaTheme;
  let bodyTheme;

  let generalDarkTheme = {
    backgroundColor: "#3e3e42",
    color: "#fff",
  };

  let generalLightTheme = {
    backgroundColor: "#B8CFFB",
    color: "#000000",
  };

  let navbarDarkTheme = {
    backgroundColor: "#333333",
    color: "#fff",
  };

  let navbarLightTheme = {
    backgroundColor: "#8AB0F9",
    color: "#000000",
  };

  let textareaDarkTheme = {
    height: "200px",
    backgroundColor: "#555555",
    color: "#D3D3D3",
  };

  let textareaLightTheme = {
    height: "200px",
    backgroundColor: "#E9FBFA",
    color: "#000000",
  };

  let bodyLightTheme = {
    backgroundColor: "#B8CFFB",
    color: "#000000",
    height: "100vh",
    width: "100vw",
  };

  let bodyDarkTheme = {
    backgroundColor: "#3e3e42",
    color: "#fff",
    height: "100vh",
    width: "100vw",
  };

  function getThemeValue(themeValueFromChildren) {
    setThemeValue(themeValueFromChildren);
    console.log(themeValue);
  }

  let navbarProps = {
    brand: PropTypes.string.isRequired,
    about: PropTypes.string.isRequired,
    setTheme: PropTypes.object.isRequired,
    sendDataToParent: PropTypes.func.isRequired,
  };

  let textformProps = {
    setThemeBody: PropTypes.object.isRequired,
    setThemeTextarea: PropTypes.object.isRequired,
  };

  if (themeValue === true) {
    generalTheme = generalDarkTheme;
    navbarTheme = navbarDarkTheme;
    textareaTheme = textareaDarkTheme;
    bodyTheme = bodyDarkTheme;
  } else if (themeValue === false) {
    generalTheme = generalLightTheme;
    navbarTheme = navbarLightTheme;
    textareaTheme = textareaLightTheme;
    bodyTheme = bodyLightTheme;
  }

  navbarProps.setTheme = navbarTheme;
  navbarProps.sendDataToParent = getThemeValue;
  navbarProps.brand = "TextUtils2";
  navbarProps.about = "About";

  textformProps.setThemeBody = generalTheme;
  textformProps.setThemeTextarea = textareaTheme;

  return (
    <>
      <div style={bodyTheme}>
        <Navbar {...navbarProps} />
        <TextForm {...textformProps} />
      </div>
    </>
  );
}

export default App;
