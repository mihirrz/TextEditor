import React, { useState } from "react";

export default function TextForms(props) {
  const [Text, setText] = useState("");

  const handleUpClick = () => {
    // console.log("Uppercase is clicked");
    const newText = Text.toUpperCase();
    setText(newText);
  };

  const handleOnChange = (event) => {
    // console.log("OnChange is Handled");
    setText(event.target.value);
  };

  const handleLoclick = () => {
    const newText = Text.toLowerCase();
    setText(newText);
  };

  const handleClear = () => {
    setText("");
  };

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode == "light" ? "black" : "white" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            onChange={handleOnChange}
            value={Text}
            id="myBox"
            rows="8"
            style={{
              backgroundColor: props.mode == "light" ? "white" : "#90969c",
              color: props.mode == "light" ? "black" : "white",
            }}
          ></textarea>
        </div>
        <button
          className="btn btn-primary mx-1"
          style={{ fontSize: "13px" }}
          onClick={handleUpClick}
        >
          Uppercase
        </button>
        <button
          className="btn btn-primary mx-1"
          style={{ fontSize: "13px" }}
          onClick={handleLoclick}
        >
          Lowercase
        </button>
        <button
          style={{ float: "right", fontSize: "13px" }}
          className="btn btn-danger mx-1"
          onClick={handleClear}
        >
          Clear Text
        </button>
      </div>
      <div
        className="container"
        style={{ color: props.mode == "light" ? "black" : "white" }}
      >
        <center>
          <h2>Your text summary</h2>
          <p>
            _________________________________________________________________________________________________________________________________________________
          </p>
          <p>
            {Text.split(" ").length} words {Text.length} Characters
          </p>
          <p>{0.008 * Text.split(" ").length} Minutes read</p>
          <p>
            {Text.length > 0 ? (
              <>
                <h4>Preview</h4>
                <p>
                  --------------------------------------------------------------------------------------------------------------
                </p>
                {Text}
              </>
            ) : (
              <h4>Enter the text in the above box to preview it here </h4>
            )}
          </p>
        </center>
      </div>
    </>
  );
}
