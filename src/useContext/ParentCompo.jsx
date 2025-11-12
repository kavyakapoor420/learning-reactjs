//create context =createContext  , then wrap all the child inside a provider 
//  <UserContext.Provider value={}><ChildA/></UserContext.Provider>
// pass value , then consumer k andr jakr consume krlo 

// ParenCompon ( data provider)-> ChildA -> ChildB -> ChildC 

{/* <UserContext.Provider value={user}>
         <ChildA/>
</UserContext.Provider>

 const UserContext=createContext()

const [user,setUser]=useState({name:"kavya kapoor"}) */}

import React, { createContext, useState } from 'react'
import ChildA from './ChildA'

export const UserContext=createContext()

const ParentCompo = () => {

   const [user,setUser]=useState({name:"user"})

  return (
    <div>
        <UserContext.Provider value={user}>
            <ChildA/>
        </UserContext.Provider>
  
    </div>
  )
}

export default ParentCompo
