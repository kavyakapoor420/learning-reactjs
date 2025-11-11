import React, { useEffect, useState } from "react"


function UseEffect(){
    const [cnt,setCnt]=useState(0)
    const [decremen,setDecremen]=useState(0)

    // variation 1 ; runs on every render no dependency array 
    useEffect(()=>{
        alert(" i will xecute on every render ")
    })

    const handleClick=()=>{
        setCnt(cnt+1)
    }

    const handleDecre=()=>[
        setDecremen(decremen-1)
    ]
    // variation 2 : runs  only on first render -> emoty dependecy array passed
     useEffect(()=>{
       alert("i will run on first render")
     },[])
     // variation3 : that runs after value of one state var passed in depenedency array 
     useEffect(()=>{
        alert('i will update only if cnt values updated')
     },[cnt])
     // vairation 4: multiple dependecy passed [cnt,total]
     useEffect(()=>{
        alert(' i will run evyertime when cnt/decrmen value  gets updated')
     },[cnt,decremen])

     // variation 5: cleanup function -> state -unmounted from ui 
     useEffect(()=>{
        alert("count is updated")

        return()=>{
            alert('count is unmounted from ui ')
        }
     },[cnt])

    return (
        <>
        <h1>cnt value is {cnt}</h1>
        <button onClick={handleClick}>
            Click me 
        </button>
        <button onClick={handleDecrement}>
            Decrement me  
        </button>
        </>
    )
}

export default UseEffect

