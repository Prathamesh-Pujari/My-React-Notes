import React, { useReducer, useState } from "react";

const initialState = [
  {
    id: 1,
    text: "Drink Water",
    completed: false,
  },
  {
    id: 2,
    text: "Do Yoga",
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

const Todo2 = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [todo, setTodo] = useState("");

  const handleChange = (e) => {
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
          value={todo}
          placeholder="Todo"
          onChange={handleChange}
        />
      </div>
      <div>
        <button onClick={handleAdd}>ADD</button>
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
                  <button
                    type="button"
                    onClick={() =>
                      dispatch({ type: "TOGGLE_TODO", id: todo.id })
                    }
                  >
                    Completed
                  </button>
                </div>
                <div>
                  <button
                    type="button"
                    onClick={() =>
                      dispatch({ type: "DELETE_TODO", id: todo.id })
                    }
                  >
                    DELETE
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Todo2;
