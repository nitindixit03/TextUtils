import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";
import About from "./components/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); // whether dark mode is enabled or not!
  const [alert, setAlert] = useState(null);
  // const [isRed, setIsRed] = useState('');
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.background = "#042743";
      showAlert("Dark Mode has been enabled", "success");
      // document.title = "TextUtils - Dark Mode";
      // setInterval(()=>{
      //   document.title = 'TextUtils is Amazing Mode';
      // },2000);
      // setInterval(()=>{
      //   document.title = 'Install TextUtils now!!';
      // },1500);
    } else {
      setMode("light");
      document.body.style.background = "white";
      showAlert("Light Mode has been enabled", "success");
      // document.title = "TextUtils - Light Mode";
    }
  };

  // const redMode = ()=>{

  //   document.body.style.background ='red';
  //   setIsRed('red')
  //   if(isRed){
  //     setIsRed('')
  //   }
  //   showAlert("red Mode has been enabled","success");
  // }
  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
            <Routes>
              <Route path="/about" element={<About mode={mode}/>}/> 
              <Route path="/" element={<TextForm showAlert={showAlert}  heading=" Try TextUtils - word counter, character counter, Remove extra spaces"  mode={mode}/>}>
              </Route>
            </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
