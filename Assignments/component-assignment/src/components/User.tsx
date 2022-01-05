import React,{useState} from 'react';

type UserProps = {
    name: string
    email: string
}

function User(props: UserProps) {

    const [user, setUser] = useState<UserProps | null>(null)

    const handleLogin = () => {
        setUser({
            name: props.name,
            email: props.email
        })
    }
    const handleLogout = () => {
        setUser(null)
    }

    return(
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
                <h2>Username : {user?.name} </h2>
                <h2>User email : {user?.email} </h2>
        </div>
    )
}

export default User;