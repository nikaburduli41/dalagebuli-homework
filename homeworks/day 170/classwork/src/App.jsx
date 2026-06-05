import { useState,useEffect } from 'react'


function App() {
  useEffect(() => {
      document.addEventListener('click', alerter);
    return () => {
      document.removeEventListener('click', alerter);
    };
  });
  const alerter = () =>{
    alert('heloooo')
  }
  return(
    <>
    </>
  )
}

export default App
