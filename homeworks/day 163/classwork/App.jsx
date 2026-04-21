import React from "react";
import { useState } from "react";

function App() {
  const [list, setList] = useState(['A', 'B', 'C', 'D', "E"])
  let randomNumber1 = Math.random(1 * 10)
  const removeLast = () => {
    setList(list.slice(0, -1))
  }
  const addElement = () =>{
    setList(prev => [
      ...list , "hello"
    ])
  }
  const randomNumber = ()=>{
    setList(prev => [
      ...list , randomNumber1
    ])
  }

  return (
    <>
    <ol>
      {list.map((char, index) => <li key={index}>{char}</li>)}
    </ol>

    <button onClick={removeLast}>Remove Last Element</button>
    <button onClick={addElement}>add element</button>
    <button onClick={randomNumber}>add random number</button>
    </>
  )
}

export default App