import React, { useEffect, useState } from 'react'

export default function Cursor() {
    const [position, setPosition] = useState({x: 0, y: 0})
    const [hidden, setHidden] = useState(false)
    const [clicked, setClicked] = useState(false);

    useEffect(() => {
        addEventListeners()
        return () => removeEventListeners()
    }, [])

        const addEventListeners = () => {
            document.addEventListener("mousemove", (e)=>setPosition({x: e.clientX, y: e.clientY}))
            document.addEventListener("mouseenter", ()=>setHidden(false))
            document.addEventListener("mouseleave" , ()=>setHidden(true))
            document.addEventListener("mouseup", ()=>setClicked(false))
            document.addEventListener("mousedown", ()=>setClicked(true))
        }
    
        const removeEventListeners = () => {
            document.removeEventListener("mousemove", (e)=>setPosition({x: e.clientX, y: e.clientY}))
            document.removeEventListener("mouseenter", ()=>setHidden(false))
            document.removeEventListener("mouseleave" , ()=>setHidden(true))
            document.removeEventListener("mouseup", ()=>setClicked(false))
            document.removeEventListener("mousedown", ()=>setClicked(true))
        }
    
    return (
        <>
            <div className={`${hidden 
            ? "opacity-0" 
            :"cursor w-10 h-10 border-2 border-gray-100 fixed transform -translate-x-1/2 -translate-y-1/2  pointer-events-none z-50 rounded-full transition-all ease-linear active:bg-white scale-90"}`}
            style={{
                left:`${position.x}px`,
                top:`${position.y}px`,
                backgroundColor:`${clicked?"#fefefe":""}`
            }}/>
        </>
    )
}
