# Problem 4: MongoDB + Mongoose CRUD API

## Task

Create a backend using MongoDB and Mongoose.

---

## Schema: Product

```json
{
  "name": "String",
  "price": "Number",
  "inStock": "Boolean"
}
```

---

## APIs

* **POST /products** → Insert product
* **GET /products** → Fetch all products
* **GET /products/:id** → Fetch one product
* **PUT /products/:id** → Update product
* **DELETE /products/:id** → Delete product

---

## Requirements

* Use Mongoose schema & model
* Handle errors (invalid ID, not found)
* Use async/await
