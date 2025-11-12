

import React, { createContext, useState } from 'react'
import ChildA from './ChildA'

const ThemeContext=createContext()

const Theme = () => {

    const [theme,setTheme]=useState('light')

  return (
    <div>
          <ThemeContext.Provider value={{theme,setTheme}}>
                <div id='container' style={{backgroundColor:theme==='light' ? 'beige': "black"}}>
                    <ChildA/>
                </div>    
          </ThemeContext.Provider>
    </div>
  )
}

export default Theme

export {ThemeContext}