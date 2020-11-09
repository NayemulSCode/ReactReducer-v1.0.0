import React, { useState } from 'react'
import  './App.css'
import { login } from './utils';
function LoginUi() {
    const [username, setUsername] = useState(''); 
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const onSubmit = async e=>{
        e.preventDefault();
        // alert('todo');
        setIsLoading(true);
        setError('');
        try {
            console.log(username,password);
            await login({username, password});
            setIsLoggedIn(true);
            
        } catch (error) {
            setError('Incorrect username or password!');
        }
        setIsLoading(false)
    }
    return (
        <div className="App">
            <div className="login-container" onSubmit={onSubmit}>
                {isLoggedIn ? (
                <>
                <h1>{username}!</h1>
                <button onClick={() =>setIsLoggedIn(false)} >LogOut</button>
                </>):(
                    <form className="form" >
                    {error && <p className="error">{error}</p>}
                    <p>Please Login!</p>
                    <input 
                        type="text"
                        placeholder="username"
                        value={username}
                        onChange={e => setUsername(e.currentTarget.value)}
                    />
                    <input 
                        type="password"
                        placeholder="password"
                        autoComplete="new-password"
                        value={password}
                        onChange={e=> setPassword(e.currentTarget.value)}
                    />
                    <button className="submit" type="submit" disabled={isLoading}>
                        { isLoading? 'Loggin in...': 'Log In'}
                    </button>
                </form>
                )}
                
            </div>
        </div>
    )
}

export default LoginUi
