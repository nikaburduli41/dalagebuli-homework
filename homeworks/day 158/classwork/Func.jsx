import React from "react"
function Helo(props){
    function Helloworld(){
        console.log('hello world')
    }
    return(
        <>
            <button onClick={Helloworld}>click</button>
        </>
    )
}
export default Helo