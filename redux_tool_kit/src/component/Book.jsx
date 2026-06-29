import React, { useReducer } from "react";

const initialState = {
  tittle: "",
  author: "",
  rating: "",
  review: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_FIELD":
      return { ...state, [action.field]: action.value };
    case "RESET":
      return initialState;
    default:
      throw new Error(`Unhandled Action ${action.type}`);
  }
};

const Book = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e) => {
    dispatch({
      type: "SET_FIELD",
      field: e.target.name,
      value: e.target.value,
    });
  };

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Tittle"
          name="tittle"
          value={state.tittle}
          onChange={handleChange}
        />
      </div>
      <div>
        <input
          type="number"
          placeholder="Rating"
          name="rating"
          value={state.rating}
          onChange={handleChange}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Author"
          name="author"
          value={state.author}
          onChange={handleChange}
        />
      </div>
      <div>
        <textarea
          name="review"
          placeholder="Review"
          value={state.review}
          onChange={handleChange}
        />
      </div>
      <div>
        <button
          onClick={() => {
            console.log(state);
          }}
        >
          Submit
        </button>
      </div>
      <div>
        <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
      </div>
    </div>
  );
};

export default Book;
