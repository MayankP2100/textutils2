import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import PropTypes from "prop-types";
import TextForm from "./components/TextForm";

function App() {
  const [themeValue, setThemeValue] = useState("");

  function getThemeValue(themeValueFromChildren) {
    if (themeValueFromChildren) {
    setThemeValue(1);
    } else if (!themeValueFromChildren) {
      setThemeValue(0);
    }
    console.log(themeValue);
  }

  let navbarProps = {
    brand: PropTypes.string.isRequired,
    about: PropTypes.string.isRequired,
    darkTheme: PropTypes.object.isRequired,
    sendDataToParent: PropTypes.func.isRequired,
  };

  let textformProps = {
    darkThemeBody: PropTypes.object.isRequired,
    darkThemeTextarea: PropTypes.object.isRequired,
  };

  let generalDarkTheme = {
    backgroundColor: "#3e3e42",
    color: "#fff",
  };

  let generalLightTheme = {
    backgroundColor: "#B8CFFB",
    color: "#fffff",
  };

  let navbarDarkTheme = {
    backgroundColor: "#333333",
    color: "#fff",
  };

  let navbarLightTheme = {
    backgroundColor: "#8AB0F9",
    color: "#fffff",
  };

  let texrareaDarkTheme = {
    height: "200px",
    backgroundColor: "#555555",
    color: "#D3D3D3",
  };

  let texrareaLightTheme = {
    height: "200px",
    backgroundColor: "#E9FBFA",
    color: "#fffff",
  };

  navbarProps.darkTheme = navbarLightTheme;
  navbarProps.sendDataToParent = getThemeValue;
  navbarProps.brand = "TextUtils2";
  navbarProps.about = "About";

  textformProps.darkThemeBody = generalLightTheme;
  textformProps.darkThemeTextarea = texrareaLightTheme;

  return (
    <>
      <div
        style={{
          backgroundColor: generalLightTheme.backgroundColor,
          color: generalLightTheme.color,
          height: "100vh",
          width: "100vw",
        }}
      >
        <Navbar {...navbarProps} />
        <TextForm {...textformProps} />
      </div>
    </>
  );
}

export default App;
