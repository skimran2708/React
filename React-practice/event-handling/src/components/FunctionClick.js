import React from "react";

function FunctionClick() {
    function clickHandler() {
        console.log("Clicked Function button");
    }
    return (
        <div>
            <button onClick={()=> clickHandler()} >Function button</button>
        </div>
    )
}

export default FunctionClick;