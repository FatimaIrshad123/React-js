import React from 'react';
import {useState,useEffect} from 'react'

function useDimensions(){
    const [height,setHeight] = useState(window.innerHeight)
    const [width,setWidth] = useState(window.innerWidth)
    const handleheight = () => {
        setHeight(window.innerHeight)
    }
    const handlewidth = () => {
        setWidth(window.innerWidth)
    }
    useEffect(() => {
        // setHeight(window.innerHeight)
        // setWidth(window.innerWidth)
        // console.log(window.innerHeight)
        window.addEventListener('onChange',handleheight)
        window.addEventListener('mousemove',handlewidth)
    
    },[height,width])
    
    return {height,width}
}
export default function Dimension(){
    const {height,width} = useDimensions()
    return(
        <div>
            {height},{width}
        </div>
    )
}