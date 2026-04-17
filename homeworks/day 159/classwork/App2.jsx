import React from "react";
function Child(props){
    return(
        <>
            <h2>{props.title}</h2>
            <p>{props.desc}</p>
        </>



    )
}

export default Child;