import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, {useState} from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");

    const toggleMode = () => {
      if(mode === "light"){
        setMode("dark");
        document.body.style.backgroundColor = '#042742';
      }
      else{
        setMode("light");
        document.body.style.backgroundColor = 'white';
      }
    }
      return (
      <>
        <Router>
          <Navbar Title="UText App" about="About" mode={mode} toggleMode={toggleMode}/>
          <div className="container my-3">
              <Routes>
                <Route exact path="/about" element={<About mode={mode} />}/>
                <Route exact path="/" element={ <TextForm Heading="Enter the text to analyze" mode={mode}/>}/>
              </Routes>
          </div>
        </Router>
      </>
  );
}

export default App;
