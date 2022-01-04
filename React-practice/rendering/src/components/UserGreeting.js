import React, {Component} from "react";

class UserGreeting extends Component {

    constructor(props) {
        super(props);

        this.state={
            isLoggedIn: false
        }
    }

    render() {

        //Method 1
        // if(this.state.isLoggedIn) {
        //     return(
        //         <div>Welcome Bob</div>
        //     )
        // }
        // else {
        //     return (
        //         <div>Welcome Guest</div>
        //     )
        // }  


        //Method 2
        // let message
        // if(this.state.isLoggedIn) {
        //     message=<div>Welcome Bob</div>
        // }
        // else {
        //     message=<div>Welcome Guest</div>
        // }
        // return(
        //     <div>{message}</div>
        // )


        //Method 3
        return this.state.isLoggedIn ? (<div><h2>Welcome Bob</h2></div>) : (<div><h2>Welcome Guest</h2></div>)
        
    }
}

export default UserGreeting;