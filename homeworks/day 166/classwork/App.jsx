import { useState } from 'react'

function App() {
  const [age, setAge] = useState({
    age1: 5
  })

  function handleClick() {
    console.log(age.age1)
    setAge(age.age1 + 1)
  }

  return (
    <>
      <p>{age.age1}</p>
      <button onClick={handleClick}>click me</button>
    </>
  )
}

export default App