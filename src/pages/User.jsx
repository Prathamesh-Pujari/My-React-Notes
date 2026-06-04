import React from "react";
import { useParams } from "react-router";

const User = () => {
  const { name } = useParams();
  return (
    <div>
      <h1 className="bg-gray-600 text-black text-center text-4xl p-5">
        User :{name}{" "}
      </h1>
    </div>
  );
};

export default User;
