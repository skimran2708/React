import React, { Component } from "react";

class EventBind extends Component {

    constructor(props) {
        super(props);

        this.state={
            message: "Hello"
        }

        this.clickHandler = this.clickHandler.bind(this);      //EventBind3
    }

    clickHandler() {
        this.setState({
            message: "Goodbye!"
        })
    }

    render() {
        return(
            <div>
                <div>{this.state.message}</div>
                <button onClick={()=> this.clickHandler()}>EventBind1</button>
                <button onClick={this.clickHandler.bind(this)}>EventBind2</button>
                <button onClick={this.clickHandler}>EventBind3</button>
            </div>
        )
    }
}

export default EventBind;