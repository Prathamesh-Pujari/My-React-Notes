import React, { useEffect, useState } from "react";
import useDataFetch from "../hooks/useDataFetch";
import Card from "./Card";

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
    return () => {
      clearTimeout(timer);
    };
  }, [search]);

  return (
    <div>
      <div className="flex justify-center">
        <input
          className="w-full max-w-md  border-2 mb-5"
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
          Products Loading Pls Wait...
        </h1>
      )}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {products.map((product) => (
          <div className="text-center justify-center text-2xl font-semibold">
            {/* <h2>{product.name}</h2> */}
            <Card
              name={product.name}
              price={product.price}
              stock={product.stock}
              details={[
                `Price : ${product.price} Rs`,
                `Avilable : ${product.stock}`,
              ]}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
