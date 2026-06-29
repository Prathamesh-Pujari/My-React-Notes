import React, { useReducer, useState } from "react";

const initialState = [
  { id: 1, text: "Daily Steps", completed: false },
  { id: 2, text: "Daily Reading", completed: false },
];

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      const newTodo = {
        id: Date.now(),
        text: action.text,
        completed: false,
      };
      return [...state, newTodo];
    case "TOGGLE_TODO":
      return state.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      });
    case "DELETE_TODO":
      return state.filter((todo) => {
        return todo.id !== action.id;
      });

    default:
      throw new Error(`Unhandled Action ${action.type}`);
  }
};

const Todo = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [todoInput, setTodoInput] = useState("");

  const handleChange = (e) => {
    setTodoInput(e.target.value);
  };

  const handleAdd = () => {
    dispatch({ type: "ADD_TODO", text: todoInput });
    setTodoInput("");
  };

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Add Your Todo"
          value={todoInput}
          onChange={handleChange}
        />
      </div>
      <div>
        <button onClick={handleAdd}>Add</button>
      </div>
      <div>
        <ul>
          {state.map((todo) => {
            return (
              <li
                key={todo.id}
                style={{
                  textDecoration: todo.completed ? "line-through" : "none",
                }}
              >
                {todo.text}
                <div>
                  <button type="button" onClick={()=>dispatch({type:"TOGGLE_TODO",id:todo.id})}>Toggle</button>
                </div>
                <div>
                  <button type="button" onClick={()=>dispatch({type:"DELETE_TODO",id:todo.id})}>Delete</button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Todo;
