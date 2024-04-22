// import logo from './logo.svg';
// import React from "react";
import Navber from './components/Navber';
import Textform from './components/Textform';
// import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  const [mode,newMode] = useState('light')
  const[alert,setAlert] = useState(null)
  const showAlert = (message,type) => {
    setAlert ({
      message : message,
      type : type
    })
    setTimeout(() => {
      setAlert(null)
    },1500)
  }
  const toggleMode = () => {
    if(mode === 'light') {
      newMode('dark')
      document.body.style.backgroundColor = '#042743'
      showAlert("Dark Mode is Enabled","success")
    } else {
      newMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light Mode is Enabled","success")
    }
  }
  return (
    <>
    {/* <Router> */}
    <Navber title = "Textutills" mode = {mode} toggleMode = {toggleMode} aboutText = "About"/>
    <Alert alert = {alert}/>
    <div className="container my-3">
    {/* <Switch>
          <Route exact path="/about"> */}
            {/* <About/> */}
          {/* </Route> */}
          {/* <Route exact path="/"> */}
          <Textform heading = "Enter your text to analyze" showAlert = {showAlert} mode = {mode}/>
          {/* </Route> */}
        {/* </Switch> */}
    </div>
    {/* </Router> */}
    </>
  );
}
export default App;
