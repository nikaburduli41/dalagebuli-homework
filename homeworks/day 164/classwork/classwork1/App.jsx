import { useState } from "react"

function Num(){
     const categories = ["Electronics", "Books", "Home", "Garden"];
     const [list,setList] = useState('')

     function handlerandom(){
          let random = Math.floor(Math.random() * 4)
          setList(prev =>{
               return [...prev, categories[random]]

          })
     }


     return (
          <div>
               <p>{list}</p>
               <button onClick={handlerandom}>add random</button>
          </div>
     )
}

export default Num