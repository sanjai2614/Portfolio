import React, { useEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'


const App = () => {

  const [darkMode,setDarkMode]=useState(true)

  useEffect(()=>{
    AOS.init({
      duration:1000,
      once:true,
      offset:100
    })
    document.documentElement.classList.add('dark')
  },[])

  useEffect(()=>{
    AOS.refresh()
  },[darkMode])

  const toggleDarkMode=()=>{
    const newMode = !darkMode
    setDarkMode(newMode)
    document.documentElement.classList.toggle('dark')
  }

  return (
    <div className={
      darkMode
      ? "bg-linear-to-br from-gray-900 via-[#0d182e] to-gray-900 min-h-screen"
      : "bg-linear-to-br from-gray-50 to-blue-50 m-h-screen"
    } 
    ><ToastContainer position="top-right" autoClose={3000} theme="colored"/>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
      <Hero darkMode={darkMode}/>
      <About darkMode={darkMode}/>
      <Skills darkMode={darkMode}/>
      <Projects darkMode={darkMode}/>
      <Contact darkMode={darkMode}/>
      <Footer darkMode={darkMode}/>
    </div>
  )
}

export default App
