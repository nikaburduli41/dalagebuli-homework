import { useState } from 'react'
 

function App() {
  const [data,setData] = useState([])
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleClick = (e) => {
    setData(prev => {
        (...prev, value)})
  }
  return (
  <>

    <input type='text' value={value} onChange={handleChange} />;
    <button onClick={handleClick}>click me</button>
  </>
  )
}


export default App