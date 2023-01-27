import express from "express";
import cors from "cors";
import productsServer from "./data/productsServer.js";

import { models, connectDb } from "./models/index.js";

const PORT = 8000;
const app = express();
connectDb(); // connection to the MondoDb

app.use(express.json());
app.use(cors());


app.get("/api/products/all-products", async (req, res) => {
  models.Products.find((err, obj) => {
    if (err) console.log(err._message);
    res.send(obj);
    console.log("obj", obj);
  });
});

// run script only once with postman api for database initilization
app.post("/api/products/create-all-products", async (req, res) => {
  const getAllProducts = [...req.body];
  getAllProducts.forEach(async (product) => {
    const addProductDb = new models.Products({
      title: product.title,
      price: product.price,
      description: product.description,
      category: product.category,
      image: product.image,
      rating: product.rating,
    });
    try {
        // await addProductDb.save();
        console.log(addProductDb);
    }
    catch(err) {
        console.log(err._message);
    }
  });
  res.send(getAllProducts);
});

// basic API
app.get("/about", async (req, res) => {
  res.send({ message: "Hello world" });
});

app.get("/", async (req, res) => {
  res.send({ data: productsServer });
});

app.get("/product/:id", async (req, res) => {
  console.log("id", req.params.id);
  try {
    const getProductDetail = productsServer.filter(
      (product) => product.id === Number(req.params.id)
    );
    res.send({ data: getProductDetail });
  } catch (err) {
    console.log("err", err);
  }
});

app.listen(PORT, () => {
  console.log(`Server lisiting on port ${PORT}`);
});
