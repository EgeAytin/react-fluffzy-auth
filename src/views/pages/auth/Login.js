import React, {useState}  from "react"

import AuthContext from "../../../utility/context/Auth"

const Login = () => {
    const { signIn } = React.useContext(AuthContext);

    const [userName, setUserName] = useState('dummy username...');
    const [password, setPassword] = useState('dummy password...');

    async function handleSubmit(event)  {
        event.preventDefault();

        // Do API sign-in call here

        //Pass access token to our context
        await signIn('dummy_access_token');
        window.location = '/'
    }

    return (
        <>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div style={{marginBottom:10}}>
                    User Name
                    <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} />
                </div>
                <div style={{marginBottom:10}}>
                    Password
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <input type="submit" value="Submit" />
            </form>
        </>
    )
}

export default Login
