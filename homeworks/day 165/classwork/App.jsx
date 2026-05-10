import React, { useState } from 'react'

const App = () => {
  const [task, setTask] = useState("")
  const [tasks, setTasks] = useState([])

  const addTask = () => {
    setTasks(prev => [...prev, task])
    setTask("")
  }

  const removeTask = (index) => {
    setTasks(prev => prev.filter((a, indx) => index !== indx))
  }

  return (
    <div>

      <input type="text" value={task} onChange={(e) => setTask(e.target.value)} />

      <button onClick={addTask}>Add</button>

      <ul>
        {tasks.map((value, index) => (
          <li key={index}>{value} <button onClick={() => removeTask(index)}>asdasd</button></li>
        ))}
      </ul>
    </div>
  )
}

export default App