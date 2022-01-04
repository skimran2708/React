import React, { useState } from 'react'

const UseStateHookObject = () => {

    const [name,setName] = useState({firstName: '',lastName:''});

    return (
        <form>
            <input type="text" placeholder='Enter your first name'
                value={name.firstName}
                onChange={e => setName({...name,firstName:e.target.value})}
            />
            <input type="text" placeholder='Enter your last name'
                value={name.lastName}
                onChange={e => setName({...name,lastName:e.target.value})}
            />
            <h2>Your First Name : {name.firstName}</h2>
            <h2>Your Last Name : {name.lastName}</h2>
        </form>
    )
}

export default UseStateHookObject