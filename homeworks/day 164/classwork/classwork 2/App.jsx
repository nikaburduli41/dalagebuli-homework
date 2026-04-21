import { useState } from "react";

function App(){
    const[str,setStr] = useState(['a','b'])
    function removeLast(){
        setStr(prev =>{
            return [...prev,str.pop]
        })
    }
    function addbtn(){
        setStr(prev =>{
            return [...prev ,str.push('0')]
        })
    }
    const str 
    return(
        <>  
            <p>{str}</p>
            <button onClick={removeLast}>remove last</button>
            <button onClick={addbtn}>add</button>

        </>
    )
}