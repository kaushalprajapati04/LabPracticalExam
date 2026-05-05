const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const Product = require("./models/Product");

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("Connected"))
  .catch(err => console.log(err));

app.post("/products",async (req, res) => {
    try {
    const product = new Product(req.body);
    const saved = await product.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.get("/products", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

app.get("/products/:id", async (req, res) => {
    try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ msg: "Not found" });
    res.json(product);
  } catch {
    res.status(400).json({ msg: "Invalid ID" });
  }
});

app.put("/products/:id", async (req, res) => {
  try {
    const updated = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updated) return res.status(404).json({ msg: "Not found" });
    res.json(updated);
  } catch {
    res.status(400).json({ msg: "Invalid ID" });
  }
});

app.delete("/products/:id", async (req, res) => {
  try {
    const deleted = await Product.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ msg: "Not found" });
    res.json({ msg: "Deleted successfully" });
  } catch {
    res.status(400).json({ msg: "Invalid ID" });
  }
});

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});