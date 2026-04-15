const express = require("express");
const router = require("express").Router();

// http://localhost:3000/api/product
router.get("/product", (req, res) => {
  res.send("Hello Product Endpoint");
});

router.get("/product/:id", (req, res) => {
  res.send("Hello 1 Product Endpoint");
});

router.post("/product", (req, res) => {
  res.send("Hello Post Endpoint");
});
// update
router.put("/product/:id", (req, res) => {
  res.send("Hello put Endpoint");
});

router.delete("/product/:id", (req, res) => {
  res.json({ name: "peet", id: 555 });
});

module.exports = router;
