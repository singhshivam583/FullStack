import React, { useState } from 'react'
import './App.css'
import  { Footer, Header }  from './components'
import { Outlet } from 'react-router-dom'

function App() {
  const [isLogin, setIsLogin] = useState(false);

  const toggleState = () => {
    setIsLogin(!isLogin)
  }

  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/> 
    </>
  )
}

export default App
