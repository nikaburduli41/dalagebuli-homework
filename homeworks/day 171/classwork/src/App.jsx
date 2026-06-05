import { useState , useEffect, use } from 'react'


function App() {
  const [count,setCount] = useState(0)
  useEffect(()=>{
    const inteval = setInterval(() => {
      setCount(prev => prev + 1)
      console.log(`your number now is ${count}`)
    }, 1000);

    return (()=>{
      clearInterval(inteval)
    })

  })
  return(
    <>
      <p>you num is:{count}</p>
    </>
  )
}
export default App