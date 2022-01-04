import { useEffect} from "react"
import React from 'react'

const UseEffectGreeting = ({name}) => {

    const message = `Hello, ${name}`;
    useEffect(() =>{
        document.title = `Welcome to ${name}`;
        console.log(message);
    },[name])
    return (
        <div>
            {message}
        </div>
    )
}

export default UseEffectGreeting