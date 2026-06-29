import React, { useEffect, useState } from "react";
import useDataFetch from "../hooks/useDataFetch";
import Card from "./Card";

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
          className="w-full max-w-md  border-2 mb-5"
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
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {fruits.map((fruit) => (
          <div
            key={fruit.id}
            className="text-center justify-center text-2xl font-semibold"
          >
            <Card
              name={fruit.name}
              details={[
                `Price : ${fruit.price}`,
                `Total Quantity : ${fruit.quantity}`,
              ]}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Fruits;
