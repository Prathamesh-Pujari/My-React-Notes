import { useEffect, useState } from "react";
import useDataFetch from "../hooks/useDataFetch";

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
          className="border-4 w-full max-w-md"
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
        Animals : {animals.length}
      </div>
    </div>
  );
};

export default Animals;
