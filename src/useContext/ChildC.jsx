import React, { useContext } from 'react'
import { UserContext } from '../App'
import Theme, { ThemeContext } from './Theme'


const ChildC = () => {

    const user=useContext(UserContext)

    

    const {theme,setTheme}=useContext(ThemeContext)

    function toggleTheme(){
        if(theme==='light'){
            setTheme('dark')
        }else{
            setTheme('light')
        }
    }

  return (
    <div>
        Hello consumer {user.name}

        <h1>current them is {theme}</h1>
        <button onClick={toggleTheme}>
             change theme 
        </button>
    </div>
  )
}

export default ChildC