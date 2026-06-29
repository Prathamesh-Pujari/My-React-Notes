import React, { useReducer } from "react";

const initialState = {
  userName: "",
  age: "",
  country: "",
  bio: "",
};

const reducer = (data, action) => {
  switch (action.type) {
    case "SET_FIELD":
      return { ...data, [action.field]: action.value };
    case "RESET":
      return initialState;
    default:
      throw new Error(`Unhandled Action${action.type}`);
  }
};

const User = () => {
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
          name="userName"
          placeholder="UserName"
          onChange={handleChange}
          value={state.username}
        />
      </div>
      <div>
        <input
          type="number"
          name="age"
          placeholder="Age"
          onChange={handleChange}
          value={state.age}
        />
      </div>
      <div>
        <input
          type="text"
          name="country"
          placeholder="Country"
          onChange={handleChange}
          value={state.country}
        />
      </div>
      <div>
        <textarea
          value={state.bio}
          name="bio"
          placeholder="bio"
          onChange={handleChange}
        />
      </div>
      <div>
        <button
          onClick={() => {
            console.log(state);
          }}
        >
          SUBMIT
        </button>
      </div>
      <div>
        <button onClick={() => dispatch({ type: "RESET" })}>RESET</button>
      </div>
      <div>
        <ul>
          <li>Username : {state.userName}</li>
          <li>Age : {state.age}</li>
          <li>Country : {state.country}</li>
          <li>Bio : {state.bio}</li>
        </ul>
      </div>
    </div>
  );
};

export default User;
