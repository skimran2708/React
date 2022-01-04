import React, { useState } from 'react'

const UseStateHook = () => {

    const initialCount = 0;
    const [count,setCount] = useState(initialCount);

    return (
        <div>
            count: {count}
            <button className='btn btn-warning btn-sm m-2' onClick={() => setCount(initialCount)}>reset</button>
            <button className='btn btn-primary btn-sm m-2' onClick={() => setCount(count+1)}>+</button>
            <button className='btn btn-secondary btn-sm m-2' onClick={() => setCount(count-1)}>-</button>
        </div>
    )
}

export default UseStateHook