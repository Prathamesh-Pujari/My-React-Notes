import React, { useEffect, useState } from "react";
import useDataFetch from "../hooks/useDataFetch";

const Products = () => {
  const [debouncedProductSearch, setDebouncedProductSearch] = useState("");
  const [search, setSearch] = useState("");
  const [products, error, loading] = useDataFetch(
    `/api/products?search=${debouncedProductSearch}`,
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedProductSearch(search);
    }, 500);
  }, [search]);

  return (
    <div>
      <div className="flex justify-center">
        <input
          className="w-full max-w-md  border-5"
          type="search"
          placeholder="Search Products"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {error && (
        <h1 className="text-center justify-center text-red-700 text-3xl">
          Something Went Wrong...
        </h1>
      )}
      {loading && (
        <h1 className="text-center justify-center text-green-700 text-3xl">
          Loading Pls Wait...
        </h1>
      )}
      {
        <h2 className="text-center font-bold text-2xl">
          Total Products : {products.length}
        </h2>
      }
      {/* {products.map((product) => (
        <div className="text-center justify-center text-2xl font-semibold">
          <h2>{product.name}</h2>
        </div>
      ))} */}
    </div>
  );
};

export default Products;
