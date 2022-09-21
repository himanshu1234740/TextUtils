import React, { useState } from 'react'
import Navbar from './components/Navbar';
import Main from './components/textarea';
import About from './components/About';
import Alert from './components/alert';
import { Routes, Route } from "react-router-dom"

import './style.css';

function App() {
  const activeMode = () => {
    if (mode === 'light') {
      setMode('dark')

      document.body.style.backgroundColor = "rgb(2, 51, 74)"

      document.body.style.color = "white"
      document.title = 'TextUtils-Dark'
      showAlert("Dark Mode Is Enabled", "success")

    } else {
      setMode('light')

      document.body.style.backgroundColor = "white"
      document.title = 'TextUtils-Light'
      document.body.style.color = "black"
      showAlert("Light Mode Is Enabled", "success")

    }
  }
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)
  const showAlert = (massage, type) => {
    setAlert({
      msg: massage,
      type: type,

    })
    setTimeout(() => {
      setAlert()
    }, 1000)
  }

  return (
    <>
      <Navbar titleUtils="Titleutils" mode={activeMode} darkMode={mode} />
      <Alert alert={alert} />
      
      <Routes>
        <Route path="/" element={ <Main text="Add Some Text" darkMode={mode} /> } />
        <Route path="about" element={ <About/> } />
        
      </Routes>
    
    </>
  );
}

export default App;


