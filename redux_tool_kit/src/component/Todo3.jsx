import React, { useReducer, useState } from "react";

const initialState = [
  {
    id: 1,
    text: "drink Water",
    completed: false,
  },
  {
    id: 2,
    text: "Exercise",
    completed: false,
  },
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
        if (action.id === todo.id) {
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
      throw new Error(`Unhandled Action : ${action.type}`);
  }
};

const Todo3 = () => {
  const [todo, setTodo] = useState("");
  const [state, dispatch] = useReducer(reducer, initialState);

  const handlechange = (e) => {
    setTodo(e.target.value);
  };

  const handleAdd = () => {
    if (!todo.trim()) return;
    dispatch({ type: "ADD_TODO", text: todo });
    setTodo("");
  };

  return (
    <div>
      <div>
        <input
          type="text"
          onChange={handlechange}
          placeholder="Todo"
          value={todo}
        />
      </div>
      <div>
        <button onClick={handleAdd}>ADD</button>
      </div>
      <div>
        <ul>
          {state.map((todo) => (
            <li
              key={todo.id}
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            >
              <div>{todo.text}</div>
              <div>
                <button
                  onClick={() => dispatch({ type: "TOGGLE_TODO", id: todo.id })}
                >
                  Toggle
                </button>
              </div>
              <div>
                <button
                  onClick={() => dispatch({ type: "DELETE_TODO", id: todo.id })}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Todo3;
