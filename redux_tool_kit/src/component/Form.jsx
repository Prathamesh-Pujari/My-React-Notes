import React, { useReducer } from "react";

const FormData = {
  name: "",
  email: "",
  password: "",
  address: "",
  city: "",
};

const reducer = (data, action) => {
  switch (action.type) {
    case "SET_FIELD":
      return { ...data, [action.field]: action.value };
    case "RESET":
      return FormData;
    default:
      throw new Error(`Unhandled Action ${action.type}`);
  }
};

const Form = () => {
  const [state, dispatch] = useReducer(reducer, FormData);

  const handleChange = (e) => {
    dispatch({
      type: "SET_FIELD",
      field: e.target.name,
      value: e.target.value,
    });
  };

  return (
    <div>
      <h1>My UseReducer Form</h1>
      <div>
        <label>Name </label>
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Email </label>
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Password </label>
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Address </label>
        <input
          type="text"
          name="address"
          placeholder="Address"
          onChange={handleChange}
        />
      </div>
      <div>
        <label>City </label>
        <input
          type="text"
          name="city"
          placeholder="City"
          onChange={handleChange}
        />
      </div>
      <div>
        <ul>
          <li>Name : {state.name}</li>
          <li>Email : {state.email}</li>
          <li>Password : {state.password}</li>
          <li>Address : {state.address}</li>
          <li>City : {state.city}</li>
        </ul>
      </div>
      <button
        onClick={() => {
          console.log(state);
        }}
      >
        Submit
      </button>
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
    </div>
  );
};

export default Form;
