import { useEffect ,useState} from "react"
import React from 'react'

const UseEffectHook = () => {

    const [effectCount,setEffectCount] = useState(0);
    const [comment, setComment] = useState('')
    useEffect(() => {
        setEffectCount(prevEffectCount => prevEffectCount+1);
    },[comment]);

    return (

        <div>
        Enter your comment :
            <input 
                type="text"
                onChange={e =>{
                    setComment(e.target.value)  
                } }
             />
             <h1>{comment}</h1>
             <h2>Number of times rendered : {effectCount}</h2>

        </div>
    )
}

export default UseEffectHook