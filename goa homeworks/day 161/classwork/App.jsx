import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  function handleclick(){
    setCount(count + 1)
    // setCount(count + 1)
    // setCount(count + 1)

    // setCount.map(prev =>{
    //   count + 1
    // })
    //  gansxvaveba ari ro roca setcount(count + 1) ramdenimejer iqneba count 0 iqneba da mere daemateba 1 da 3 tu iqneba mainc 1 iqneba da mapit gadavlisas ramdenjerac davwert imdenjer daemateba
  }
  return (
    <>
      <p>{count}</p>
      <button onclick={handleclick}>click me</button>
    </>
  )
}

export default App 
