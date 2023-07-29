import { useState} from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import SignIn from './Components/loginPage'
import ResponsiveAppBar from './Components/LandingPage'
import GrowingZones from './Components/GrowingZones'
import MasonryImageList from './Components/userPost'


function App() {
  

  return (
    <>
      <Routes>
        <Route path = "/" element = {<ResponsiveAppBar />} />
        <Route path= '/login' element = {<SignIn/>} />
        <Route path = '/zones' element = {<GrowingZones/>} />
        <Route path = '/post' element = {<MasonryImageList />} />
      </Routes>
    </>
  )
}

export default App;
