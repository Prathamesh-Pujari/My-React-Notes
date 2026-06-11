import express from "express";

const app = express();

app.get("", (req, res) => {
  res.send("Server is working...");
});

app.get("/api/products", (req, res) => {
  const products = [
    {
      id: 1,
      name: "Laptop",
      price: 55000,
      category: "Electronics",
      stock: 15,
    },
    {
      id: 2,
      name: "Smartphone",
      price: 25000,
      category: "Electronics",
      stock: 30,
    },
    {
      id: 3,
      name: "Headphones",
      price: 2000,
      category: "Accessories",
      stock: 50,
    },
    {
      id: 4,
      name: "Keyboard",
      price: 1200,
      category: "Accessories",
      stock: 25,
    },
    {
      id: 5,
      name: "Mouse",
      price: 800,
      category: "Accessories",
      stock: 40,
    },
    {
      id: 6,
      name: "Monitor",
      price: 12000,
      category: "Electronics",
      stock: 12,
    },
    {
      id: 7,
      name: "Smart Watch",
      price: 5000,
      category: "Wearables",
      stock: 18,
    },
    {
      id: 8,
      name: "Bluetooth Speaker",
      price: 3000,
      category: "Audio",
      stock: 22,
    },
    {
      id: 9,
      name: "Power Bank",
      price: 1500,
      category: "Accessories",
      stock: 35,
    },
    {
      id: 10,
      name: "Gaming Chair",
      price: 10000,
      category: "Furniture",
      stock: 8,
    },
  ];

  if (req.query.search) {
    const filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(req.query.search.toLowerCase()),
    );
    res.send(filteredProducts);
    return;
  }
  setTimeout(() => {
    res.send(products);
  }, 2000);
});

app.get("/api/fruits", (req, res) => {
  console.log("Fruits API Called...");
  const fruits = [
    {
      id: 1,
      name: "Apple",
      color: "Red",
      price: 120,
      quantity: 50,
    },
    {
      id: 2,
      name: "Banana",
      color: "Yellow",
      price: 60,
      quantity: 100,
    },
    {
      id: 3,
      name: "Orange",
      color: "Orange",
      price: 80,
      quantity: 70,
    },
    {
      id: 4,
      name: "Mango",
      color: "Yellow",
      price: 150,
      quantity: 40,
    },
    {
      id: 5,
      name: "Grapes",
      color: "Green",
      price: 90,
      quantity: 60,
    },
    {
      id: 6,
      name: "Pineapple",
      color: "Brown",
      price: 100,
      quantity: 25,
    },
    {
      id: 7,
      name: "Watermelon",
      color: "Green",
      price: 70,
      quantity: 20,
    },
    {
      id: 8,
      name: "Strawberry",
      color: "Red",
      price: 200,
      quantity: 30,
    },
    {
      id: 9,
      name: "Kiwi",
      color: "Brown",
      price: 180,
      quantity: 15,
    },
    {
      id: 10,
      name: "Papaya",
      color: "Orange",
      price: 50,
      quantity: 35,
    },
  ];

  if (req.query.search) {
    const filteredFruits = fruits.filter((fruit) =>
      fruit.name.toLowerCase().includes(req.query.search.toLowerCase()),
    );
    res.send(filteredFruits);
    return;
  }

  setTimeout(() => {
    res.send(fruits);
    console.log(fruits);
  }, 4000);
});

app.get("/api/animals", (req, res) => {
  console.log("Animals are called ....");
  const animals = [
    {
      id: 1,
      name: "Lion",
      type: "Mammal",
      habitat: "Savanna",
      lifespan: 14,
    },
    {
      id: 2,
      name: "Tiger",
      type: "Mammal",
      habitat: "Forest",
      lifespan: 15,
    },
    {
      id: 3,
      name: "Elephant",
      type: "Mammal",
      habitat: "Grassland",
      lifespan: 70,
    },
    {
      id: 4,
      name: "Giraffe",
      type: "Mammal",
      habitat: "Savanna",
      lifespan: 25,
    },
    {
      id: 5,
      name: "Zebra",
      type: "Mammal",
      habitat: "Grassland",
      lifespan: 20,
    },
    {
      id: 6,
      name: "Penguin",
      type: "Bird",
      habitat: "Antarctica",
      lifespan: 20,
    },
    {
      id: 7,
      name: "Kangaroo",
      type: "Mammal",
      habitat: "Outback",
      lifespan: 23,
    },
    {
      id: 8,
      name: "Panda",
      type: "Mammal",
      habitat: "Bamboo Forest",
      lifespan: 20,
    },
    {
      id: 9,
      name: "Crocodile",
      type: "Reptile",
      habitat: "Rivers",
      lifespan: 70,
    },
    {
      id: 10,
      name: "Dolphin",
      type: "Mammal",
      habitat: "Ocean",
      lifespan: 40,
    },
  ];

  if (req.query.search) {
    const filteredAnimals = animals.filter((animal) =>
      animal.name.toLowerCase().includes(req.query.search.toLowerCase()),
    );
    res.send(filteredAnimals);
    return;
  }

  setTimeout(() => {
    res.send(animals);
  }, 6000);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port${port}`);
});
