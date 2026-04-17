import react from "react"
import { useState } from "react"
 
function example(){
    const[num,setNum] = useState(0)
    function oldway(){
        setNum(num + 1)
        setNum(num + 1)
    }
    
    function newway(){
        setNum(prev =>{
            prev + 1
            return prev + 1
        })
    }
    
    return(

        <>
            <button onClick={oldway}>old way adding</button>
            <button onClick={newway}>new way adding</button>
        </>

    )
}
export default example
//newway 2 damatebs xolme ramdenjerac ar unda davamatot da old 1 imitom or roca zveli gzit vaketebt setnum(num + 1) setnum(num + 1)setnum(num + 1)
//           mag  num tu aris 0 yvelasi 0 iqneba da bolos erti daemateaba da axali gzit rom ari mnisvneloba icvleba da 0 tu iyo da orjer vqenit +1 +1                  
