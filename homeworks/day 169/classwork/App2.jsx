import { useState } from 'react'

function App() {
  const [user, setUser] = useState({
      id: 1,
      notifications: 'true',
      color:'blue'

    })
    function addone(){
      setUser(prev =>{
        return {...prev,id :user.id + 1} 
      })
    }
    function changet(){
      setUser(prev => {
        return {...prev,notifications :user.notifications === 'true' ? 'false' : 'true' } 
      })
    }
    function changec(){
      setUser(prev => {
         return {...prev,color:user.color === 'blue' ? 'red' :'blue'} 
      })
    }
  return(
      <>
        <h1>{user.id}</h1>
        <h1>{user.notifications}</h1>
        <h1>{user.color}</h1>
        <button onClick={addone}>add one to id</button>
        <button onClick={changet}>change notifications</button>
        <button onClick={changec}>change color</button>

      </>
  )
}

export default App