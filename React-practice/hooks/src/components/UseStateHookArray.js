import React, { useState } from 'react'

const UseStateHookArray = () => {

    const [items,setItems] = useState([]);

    const addItem = () =>{
        setItems([...items,{
            id:items.length,
            value: Math.floor(Math.random()*10) +1
        }])
    }

    return (
        <div>
            <button className='btn btn-primary btn-sm m-2' onClick={addItem}>Add a number</button>
            <ul className='list-group'>
                {
                    items.map(item => <li className='list-group-item' key={item.id}>{item.value}</li>)
                }
            </ul>
        </div>
    )
}

export default UseStateHookArray