import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import PropTypes from "prop-types";
import TextForm from "./components/TextForm";
import About from "./components/About";
import { Route, Routes, HashRouter } from "react-router-dom";

function App() {
  const [themeValue, setThemeValue] = useState(false);

  let generalTheme;
  let navbarTheme;
  let textareaTheme;
  let bodyTheme;
  let cardTheme;
  let cardInfoTheme;
  let upperButtonsTheme;
  let lowerButtonsTheme;

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

  let upperButtonsLightTheme = {
    backgroundColor: "blue",
    color: "white",
  };

  let upperButtonsDarkTheme = {
    backgroundColor: "red",
    color: "white",
  };

  let lowerButtonsLightTheme = {
    backgroundColor: "green",
    color: "white",
  };

  let lowerButtonsDarkTheme = {
    backgroundColor: "yellow",
    color: "black",
  };

  let cardLightTheme = {
    backgroundColor: "#ecf4fe",
    color: "#000000",
    width: "fit-content",
  };

  let cardDarkTheme = {
    backgroundColor: "#636262",
    color: "#fff",
    width: "fit-content",
  };

  let cardInfoLightTheme = {
    backgroundColor: "#ecf4fe",
    color: "#000000",
    width: "fit-content",
  };

  let cardInfoDarkTheme = {
    backgroundColor: "#636262",
    color: "#fff",
    width: "fit-content",
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
    setUpperButtonTheme: PropTypes.object.isRequired,
    setLowerButtonTheme: PropTypes.object.isRequired,
  };

  let aboutProps = {
    setCardTheme: PropTypes.object.isRequired,
    setCardInfoTheme: PropTypes.object.isRequired,
  };

  if (themeValue === true) {
    generalTheme = generalDarkTheme;
    navbarTheme = navbarDarkTheme;
    textareaTheme = textareaDarkTheme;
    bodyTheme = bodyDarkTheme;
    upperButtonsTheme = upperButtonsDarkTheme;
    lowerButtonsTheme = lowerButtonsDarkTheme;
    cardTheme = cardDarkTheme;
    cardInfoTheme = cardInfoDarkTheme;
  } else if (themeValue === false) {
    generalTheme = generalLightTheme;
    navbarTheme = navbarLightTheme;
    textareaTheme = textareaLightTheme;
    bodyTheme = bodyLightTheme;
    upperButtonsTheme = upperButtonsLightTheme;
    lowerButtonsTheme = lowerButtonsLightTheme;
    cardTheme = cardLightTheme;
    cardInfoTheme = cardInfoLightTheme;
  }

  navbarProps.setTheme = navbarTheme;
  navbarProps.sendDataToParent = getThemeValue;
  navbarProps.brand = "TextUtils2";
  navbarProps.about = "About";

  textformProps.setThemeBody = generalTheme;
  textformProps.setThemeTextarea = textareaTheme;
  textformProps.setUpperButtonTheme = upperButtonsTheme;
  textformProps.setLowerButtonTheme = lowerButtonsTheme;

  aboutProps.setCardTheme = cardTheme;
  aboutProps.setCardInfoTheme = cardInfoTheme;

  return (
    <>
      <HashRouter>
        <div style={bodyTheme}>
          <Navbar {...navbarProps} />
          <Routes>
            <Route path="/" element={<TextForm {...textformProps} />} />
            <Route path="/about" element={<About {...aboutProps} />} />
          </Routes>
        </div>
      </HashRouter>
    </>
  );
}

export default App;
