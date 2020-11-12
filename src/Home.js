import React, { useReducer } from 'react'

function reducer(state, action){
    switch(action.type){
        case "increment":
            return state + 1;
        case "dicrement":
            return state - 1;
        default:
            return state;
    }
}

function Home() {
    const [count, dispatch] = useReducer(reducer, 0)

    return (
        <div>
            <h1>Home page</h1>
            <div>Count:{count} </div>
            <button onClick={() => dispatch({ type: "increment"})} >increment</button>
            <button onClick={() => dispatch({type: "dicrement"})}>decrement</button>
        </div>
    )
}

export default Home
