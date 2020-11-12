import React, { useReducer, useState } from 'react'

function reducer(state, action){
    switch(action.type){
        case "add-todos":
            return{
                todos:[...state.todos, {text: action.text, completed:false}],
                todoCount: state.todoCount +1
            }
        case "toggle-todo":
            return{
                todos: state.todos.map((t, idx) =>
                    idx === action.idx ? {...t, completed: !t.completed}: t
                ),
                todoCount: state.todoCount
            }
        default:
            return state;
    }

}

function Home() {
    const [{todos, todoCount}, dispatch] = useReducer(reducer,{
        todos:[],
        todoCount :0
    })
    const [text, setText] = useState();

    const handleClick = ((e) =>{
        e.preventDefault();
        dispatch({type: "add-todos", text});
        setText("");
    })

    return (
        <div>
            <h1>Home page</h1>
            <h4>Todo Counter: {todoCount}</h4>
            <form onSubmit={handleClick}>
                <input value={text} 
                    onChange={e => setText(e.target.value)}
                />
            </form>
            {todos.map( (t, idx) =>(
                <div 
                    key={t.text} 
                    onClick={()=> dispatch({type: "toggle-todo", idx})}
                    style={{textDecoration: t.completed ? "line-through" : ""}}
                >
                    {t.text} 
                    
                </div>
            ))}
            <pre>
                {JSON.stringify(todos, null,2)}
            </pre>
        </div>
    )
}

export default Home
