import { useEffect,useState } from "react";
function App() {
  const [theme, setTheme] = useState('');
  useEffect(()=>{
      if (theme !== '') {
  
      localStorage.setItem('theme', theme);
  }
  })


  return <div>App</div>;
}