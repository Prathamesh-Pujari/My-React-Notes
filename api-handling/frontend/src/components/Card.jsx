import React from "react";

const Card = ({ name, details = [] }) => {
  return (
    <div className="p-5 border-2 rounded-xl overflow-hidden shadow-lg bg-white shadow-gray-800 transition duration-300 h-40 flex items-center justify-center">
      <h2 className="text-xl font-bold text-gray-800">
        {name}
        {details.map((detail, i) =>(
          <div key={i}>
            {detail}
          </div>
        ))}
      </h2>
    </div>
  );
};

export default Card;
