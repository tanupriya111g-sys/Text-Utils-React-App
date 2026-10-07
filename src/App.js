
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  
    const [mode, setMode] = useState("light");             // Whether dark mode is enabled or not
    const [alert, setAlert] = useState(null);

    const showAlert = (message , type) => {
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
        setAlert(null);
      }, 1500); 
    }

    const toggleMode = () => {
      if(mode === 'light'){
        setMode('dark');
        document.body.style.backgroundColor = '#0b2942';
        showAlert("Dark mode has been enabled" , 'success');
        document.title='react-app - dark Mode';

       {/*setInterval(() => {
        document.title='react-app is a amazing mode';
       }, 2000);

       setInterval(() => {
        document.title='Install react-app now';
       }, 1500);*/}
        
      }
      else{
        setMode('light');
        document.body.style.backgroundColor = 'white';
        showAlert("Light mode has been enabled" , 'success');
        document.title='react-app - light Mode';
      }
    }
  

  return (
    
    <>
       {/*<Navbar title="reactapp" aboutText="About"/>*/}
       <Router>
       <Navbar title="reactapp" aboutText="About" mode={mode} toggleMode={toggleMode}/>
       <Alert alert={alert}/>
       <div className="container my-3">
        <Routes>
          <Route  exact path="/about"
            element={<About />}>
          </Route>

          <Route
           exact path="/"
            element={
            <TextForm showAlert={showAlert} heading="Enter your text here" mode={mode}/>}>
              </Route>
        </Routes>
       </div>
        </Router> 
       </>
  );
}


export default App;


