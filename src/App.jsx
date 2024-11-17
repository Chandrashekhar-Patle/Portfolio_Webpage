import Navbar from './Components/Navbar'
import Home from "./Components/Home.jsx"
import AboutMe from "./Components/AboutMe.jsx"
import Service from "./Components/Service.jsx"
import Contact from "./Components/Contact.jsx"
import Project from "./Components/Project.jsx"
import ProjectApi from './Components/ProjectApi.js'
import './App.css'
// import Card from './Card'

import {BrowserRouter, Routes, Route} from "react-router-dom"
import { useState } from 'react'


function App() {
  const [projectApi, setProjectApi]= useState(ProjectApi)

  return (
    <>

    <BrowserRouter>
      < Navbar />
      <Routes>
          <Route path="/" element={ <Home/>}/>
          <Route path="/about" element={ <AboutMe/>}/>
          <Route path="/project" element={ <Project ProjectApi={projectApi}/>}/>
          <Route path="/service" element={ <Service/>}/>
          <Route path="/contact" element={ <Contact/>}/>
      </Routes>
    </BrowserRouter>

    {/* <Navbar></Navbar>
    <AboutMe></AboutMe> */}
    </>
  )
}

export default App
