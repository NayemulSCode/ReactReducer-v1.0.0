import React, { useReducer, useState } from 'react'
import  './App.css'
import { login } from './utils';

function loginReducer(state, action){
    switch (action.type) {
        case 'field':{
            return {
                ...state,
                [action.fieldName]:action.payload,
            }
        }
        case 'login':{
            return{
                ...state,
                isLoading:true,
                error:'',
            }
        }
        case 'success':{
           return{
               ...state,
               isLoggedIn:true,
               isLoading:false,
           }

        }

        case 'logOut':{
            return{
                ...state,
                isLoggedIn:false,
                username:'',
                password:'',
            }
        }
        case 'error':{
            return{
                ...state,
                error:'Incorrect username or password',
                isLoggedIn:false,
                isLoading:false,
                username:'',
                password:'',
            }
        }
        default:
           break;
    }
    return state;
}

const initialState ={
    username: '',
    password:'',
    isLoading: false,
    error:'',
    isLoggedIn: false
};

function LoginUi() {
    const [state, dispatch] = useReducer(loginReducer, initialState);

    const{username,password,isLoading,error,isLoggedIn} = state;
    const onSubmit = async (e)=>{
        e.preventDefault();
        // alert('todo');
       dispatch({type:'login'});
        try {
            console.log(username,password);
            await login({username, password});
           dispatch({type:'success'});
            
        } catch (error) {
            dispatch({type:'error'});
        }
    }
    return (
        <div className="App">
            <div className="login-container" onSubmit={onSubmit}>
                {isLoggedIn ? (
                <>
                <h1>welcome {username}!</h1>
                <button onClick={() =>dispatch({type:'logOut'})} >LogOut</button>
                </>):(
                    <form className="form" >
                    {error && <p className="error">{error}</p>}
                    <p>Please Login!</p>
                    <input 
                        type="text"
                        placeholder="username"
                        value={username}
                        onChange={(e) => dispatch({
                            type:'field',
                            fieldName:'username',
                            payload:e.currentTarget.value,
                        })}
                    />
                    <input 
                        type="password"
                        placeholder="password"
                        autoComplete="new-password"
                        value={password}
                        onChange={(e) => dispatch({
                            type:'field',
                            fieldName:'password',
                            payload: e.currentTarget.value,
                        })}
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
