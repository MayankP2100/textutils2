import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("Hello, I'm a text.");

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
    <div className="container my-5">
      <h1 className="my-3">Enter text here to analyze</h1>

      <div className="form-floating">
        <textarea
          className="form-control fs-4"
          id="floatingTextarea2"
          style={{ height: "300px" }}
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
    </div>
  );
}
