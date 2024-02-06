import React from 'react'
import { useState,useEffect } from 'react'
import './App.css'

export default function Render() {
    useEffect(() => {
      // Perform setup or data fetching here
  console.log('fatima')
      return () => {
        console.log('hello')
        // Cleanup code (similar to componentWillUnmount)
      };
    }, []);
    return (
      <div>
        Hello
      </div>
    )
    // Render UI
  }
  
  