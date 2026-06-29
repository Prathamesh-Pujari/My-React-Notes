import { useEffect, useState } from "react";
import useDataFetch from "../hooks/useDataFetch";
import Card from "./Card";

const Animals = () => {
  const [search, setSearch] = useState("");
  const [debouncedAnimalSearch, setDebouncedAnimalSearch] = useState("");
  const [animals, animalError, loadAnimals] = useDataFetch(
    `/api/animals?search=${debouncedAnimalSearch}`,
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedAnimalSearch(search);
    }, 500);

    return () => clearTimeout(timer);
  }, [search]);

  return (
    <div>
      <div className="flex justify-center">
        <input
          className="w-full max-w-md  border-2 mb-5"
          placeholder="Animal Search "
          type="search"
          name="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="text-center text-3xl font-bold">
        {animalError && (
          <h2 className="text-red-700 font-bold">
            Something Went Wrong With Animals
          </h2>
        )}
        {loadAnimals && (
          <h2 className="text-green-700 font-bold">
            Wait Animals Are Coming...
          </h2>
        )}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {animals.map((animal) => (
            <div
              key={animal.id}
              className="text-center justify-center text-2xl font-semibold"
            >
              <Card
                name={animal.name}
                details={[
                  `life span : ${animal.lifespan} Years`,
                  `Type : ${animal.type}`,
                ]}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Animals;
