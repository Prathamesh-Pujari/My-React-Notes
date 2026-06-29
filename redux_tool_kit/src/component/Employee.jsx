import React, { useReducer } from "react";

const initialState = {
  fullName: "",
  email: "",
  phone: "",
  position: "",
  coverLetter: "",
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

const Employee = () => {
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
          name="fullName"
          value={state.fullName}
          onChange={handleChange}
          placeholder="Full Name"
        />
      </div>
      <div>
        <input
          type="email"
          name="email"
          value={state.email}
          onChange={handleChange}
          placeholder="Email"
        />
      </div>
      <div>
        <input
          type="number"
          name="phone"
          value={state.phone}
          onChange={handleChange}
          placeholder="Phone Number"
        />
      </div>
      <div>
        <input
          type="text"
          name="position"
          value={state.position}
          onChange={handleChange}
          placeholder="Position"
        />
      </div>
      <div>
        <textarea
          name="coverLetter"
          value={state.coverLetter}
          onChange={handleChange}
          placeholder="Cover Letter"
        />
      </div>
      <div>
        <ul>
          <li>Full Name : {state.fullName}</li>
          <li>Email :{state.email}</li>
          <li>Phone :{state.phone}</li>
          <li>Position :{state.position}</li>
          <li>Cover Letter :{state.coverLetter}</li>
        </ul>
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
    </div>
  );
};

export default Employee;
