import "./App.css";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextForms from "./Components/TextForms";
import React, { useState } from "react";
import Alert from "./Components/Alert";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light");
  const [modeText, setmodeText] = useState("Enable Dark Mode");
  const [alert, setalert] = useState(null);

  const showAlert = (message, type) => {
    setalert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      setmodeText("Disable Dark Mode");
      document.body.style.backgroundColor = "#2c3237";
      showAlert("Dark mode has been enabled", "success");
      document.title = "Terta Home - Dark Mode";
    } else {
      setmode("light");
      setmodeText("Enable Dark Mode");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "Terta Home - Light Mode";
    }
  };

  return (
    <Router>
      <Navbar
        title="TertaTextEditor"
        about="About Us"
        mode={mode}
        toggleMode={toggleMode}
        textMode={modeText}
      />
      <Alert alert={alert} />
      <div className="container">
        <Switch>
          <Route exact path="/about">
            <About mode={mode} />
          </Route>

          <Route exact path="/">
            <TextForms heading="Enter your text here :" mode={mode} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
