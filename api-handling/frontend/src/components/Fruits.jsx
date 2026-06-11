import React, { useEffect, useState } from "react";
import useDataFetch from "../hooks/useDataFetch";

const Fruits = () => {
  const [fruitSearch, setFruitsSearch] = useState("");
  const [debouncedFruitSearch, setDebouncedFruitSearch] = useState("");
  const [fruits, fruitsError, fruitsLoading] = useDataFetch(
    `/api/fruits?search=${debouncedFruitSearch}`,
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedFruitSearch(fruitSearch);
    }, 500);

    return () => clearTimeout(timer);
  }, [fruitSearch]);

  return (
    <div>
      <h1 className="text-center font-bold text-2xl">Fruits Are Here</h1>
      <div className="flex justify-center">
        <input
          className="w-full max-w-md  border-5"
          type="search"
          placeholder="Search Fruits"
          value={fruitSearch}
          onChange={(e) => setFruitsSearch(e.target.value)}
        />
      </div>
      {fruitsError && (
        <h1 className="text-center justify-center text-red-700 text-3xl">
          Something Went Wrong In Fruits....
        </h1>
      )}
      {fruitsLoading && (
        <h1 className="text-center justify-center text-green-700 text-3xl">
          Pls Wait Fruits Are Loading
        </h1>
      )}
      <h2 className="text-center font-bold text-2xl">
        Total Fruits : {fruits.length}
      </h2>
    </div>
  );
};

export default Fruits;
