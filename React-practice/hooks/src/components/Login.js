import React from 'react'

const Login = () => {
    return (
        <div className='container'>
            <form action="">
                <div style={{
                    margin:"5px"
                }}>
                    Enter email : <input type="text" placeholder='Enter user name' /></div>
                <div>Enter Password : <input type="password" placeholder='Enter password'/></div>
            </form>
        </div>
    )
}

export default Login