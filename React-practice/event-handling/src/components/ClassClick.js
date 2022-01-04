import React, { Component } from "react";

class ClassClick extends Component {
    clickHandler() {
        console.log("Clicked Class button");
    }

    render() {
        return (
            <div>
                <button onClick={()=>this.clickHandler()}>Class button</button>
            </div>
        )
    }
}

export default ClassClick;