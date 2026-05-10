export default App
import { useState,useEffect} from 'react'

function App() {
  let age= 100
  useEffect(()=>{
    console.log('h1')
  })
  useEffect(()=>{
    console.log(100)

  },[])
  useEffect(()=>{
    console.log({age},{age})
  })
}


export default App