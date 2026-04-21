import React from "react";
import Child from "./App2";

function Parent(){
    return(
        <>
           <Child title="btn" desc="btn1">
                <button>Click me</button>
            </Child>

            <Child title="btn2" desc="btn22">
                <button>click me tooooooooooooooo</button>
            </Child>
        </>
    )
}

export default Parent;