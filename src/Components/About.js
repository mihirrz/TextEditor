import React from "react";

export default function About(props) {
  return (
    <div >
      <div style={{color : props.mode==="dark"?"white":"black" }}> 
        <center>
          <h2>About Tetra Text Editor</h2>
          <strong>
            <p>
              The following Application is created to ease the work of contents
              writter to do better while working on there projects.
            </p>
          </strong>
          <p>Creator : MIHIR RAJ</p>
          <p>Email : tetratexteditor@hmail.com</p>
          <p>contact us : 001-2233-667</p>
        </center>
      </div>
    </div>
  );
}
