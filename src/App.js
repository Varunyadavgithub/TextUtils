import "./App.css";
import Navbar from "./Components/Navbar";
import Alert from "./Components/Alert";
import TextForm from "./Components/TextForm";
import React, { useState } from "react";
import About from "./Components/About";

function App() {
  const [mode, setMode] = useState("light"); //state for togglemode
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };

  return (
    <>
        <Navbar
          title="TextUtils"
          aboutText="About TextUtils"
          mode={mode}
          toggleMode={toggleMode}
        />

        <Alert alert={alert} />
        
        <div className="container my-3">
              <TextForm
                heading="TextUtils - Manipulate your text."
                mode={mode}
                showAlert={showAlert}
              />
              <hr style={{color:mode==='dark'?'white':'black'}}/>
              <About aboutText="About TextUtils" mode={mode} />
        </div>
    </>
  );
}

export default App;
