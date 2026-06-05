import { useState,useEffect } from 'react'
function Profile() {
  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(()=>{
      if (loggedIn) {
    const [name, setName] = useState('');
  }
  })

  return <h1>Profile {name}</h1>;

}
export default Profile