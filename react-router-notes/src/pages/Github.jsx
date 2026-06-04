import React, { useEffect, useState } from "react";
import { data, useLoaderData } from "react-router";

const Github = () => {
  const data = useLoaderData();
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   fetch("https://api.github.com/users/hiteshchoudhary")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data)
  //       setData(data)
  //     })
  // }, []);

  return (
    <div>
      <h1 className="text-3xl bg-gray-600 text-black text-center p-5">
        its Github :{data.followers}
      </h1>
    </div>
  );
};

export default Github;

export const gitLoader = async () => {
  const data = await fetch("https://api.github.com/users/hiteshchoudhary");
  return data.json();
};
