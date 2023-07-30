import React, { useState } from "react";
import wordcount from "wordcount";

export default function TextForm(props) {
  const [text, setText] = useState("Hello, I'm a text.");

  let words = wordcount(text);
  let characters = text.length;

  function onChangeHandle(event) {
    setText(event.target.value);
  }

  function onUpperClickHandle() {
    let newText = text.toUpperCase();
    setText(newText);
  }

  function onlowerClickHandle() {
    let newText = text.toLowerCase();
    setText(newText);
  }

  function onClearClickHandle() {
    let newText = "";
    setText(newText);
  }

  function onRepeatClickHandle() {
    let newText = text.repeat(2);
    setText(newText);
  }

  function onRemoveExtraSpacesClickHandle() {
    let newText = text;
    newText = newText.replace(/\s+/g, " ");
    setText(newText);
  }

  function onCopyClickHandle() {
    let newText = text;
    navigator.clipboard.writeText(newText);
  }

  return (
    <div className="container my-4">
      <h1 className="my-3">Enter text here to analyze</h1>

      <div className="form-floating">
        <textarea
          className="form-control fs-4"
          id="floatingTextarea2"
          style={{ height: "200px" }}
          value={text}
          onChange={onChangeHandle}
        ></textarea>
      </div>

      <div
        className="container btn-group-vertical my-4"
        role="group"
        aria-label="Vertical button group"
      >
        <div
          className="btn-group"
          role="group"
          aria-label="Basic outlined example"
        >
          <button
            type="button"
            className="btn btn-primary p-3 fw-semibold fs-5 text-start"
            onClick={onUpperClickHandle}
          >
            Convert to UPPERCASE
          </button>
          <button
            type="button"
            className="btn btn-primary p-3 fw-semibold fs-5 text-center"
            onClick={onlowerClickHandle}
          >
            Convert to lowercase
          </button>
          <button
            type="button"
            className="btn btn-primary p-3 fw-semibold fs-5 text-end"
            onClick={onClearClickHandle}
          >
            Clear Text
          </button>
        </div>

        <div
          className="btn-group"
          role="group"
          aria-label="Basic outlined example"
        >
          <button
            type="button"
            className="btn btn-success p-3 fw-semibold fs-5 text-start"
            onClick={onRemoveExtraSpacesClickHandle}
          >
            Remove Extra Spaces
          </button>
          <button
            type="button"
            className="btn btn-success p-3 fw-semibold fs-5 text-center"
            onClick={onRepeatClickHandle}
          >
            Repeat Text
          </button>
          <button
            type="button"
            className="btn btn-success p-3 fw-semibold fs-5 text-end"
            onClick={onCopyClickHandle}
          >
            Copy Text
          </button>
        </div>
      </div>
      <hr className="my-1 border-3" />
      <div className="container">
        <h2>Text Summary</h2>
        <pre className="fs-5">
          Words: {words} | Characters: {characters}
          <br />
          Minutes to read: {0.008 * words}
        </pre>
        <h2>Preview</h2>
        <p className="fs-4" style={{ textAlign: "justify" }}>
          {text}
        </p>
      </div>
    </div>
  );
}
