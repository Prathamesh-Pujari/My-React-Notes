import { useEffect, useState } from "react";
import "./App.css";
import useDataFetch from "./hooks/useDataFetch";
import Products from "./components/Products";
import Fruits from "./components/Fruits";
import axios from "axios";
import Animals from "./components/Animals";

function App() {
  return (
    <>
      <h1 className="text-center justify-center text-4xl font-extrabold">
        Handle API Like Pro
      </h1>
      <Products />
      <Fruits />
      <Animals />
    </>
  );
}

export default App;
