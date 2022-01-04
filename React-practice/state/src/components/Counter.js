import React, { Component } from "react";

class Counter extends Component {

    constructor() {
        super();
        this.state={
            count: 0
        }
    }

    increement() {
        this.setState({
            count: this.state.count+1
        })
    }

    increementF() {
        this.setState((prevState)=> (
            {
                count: prevState.count+1
            }
        ))
    }

    increementFive() {
        this.increementF();
        this.increementF();
        this.increementF();
        this.increementF();
        this.increementF();
    }

    render() {
        return (
            <div>
                <h1>Count : {this.state.count} </h1>
                <button onClick={() => this.increement()}>
                    IncreementOne
                </button>
                <button onClick={() => this.increementFive()}>
                    IncreementFive
                </button>
            </div>
        )
    }
}

export default Counter;