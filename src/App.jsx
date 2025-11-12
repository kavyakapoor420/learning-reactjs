import React, { createContext, useState } from 'react'
import './App.css'
import LoggerComponent from './useEffect/LoggerComponent'
import TimerComponent from './useEffect/TimerComponent'
import DataFetcher from './useEffect/DataFetcher'
import ResizeComponent from './useEffect/ResizeComponent'
import MultiEffectComponent from './useEffect/MutiEffectComponent'
// import ParentCompo from './useContext/ParentCompo'
import ChildC from './useContext/ChildC'
import ChildA from './useContext/ChildA'


 const UserContext=createContext()

function App() {

   const [user,setUser]=useState({name:"kavya kapoor"})

  return (
    <>
        {/* <LoggerComponent/> */}
        {/* <TimerComponent/>  it will run on very render only  */}
        {/* <DataFetcher/> it will run only on first render  */}
        {/* <ResizeComponent/> */}
        {/* <MultiEffectComponent/> */}
      
       <UserContext.Provider value={user}>
         <ChildA/>
        </UserContext.Provider>

  
    </>

  )
}

export default App

export {UserContext}