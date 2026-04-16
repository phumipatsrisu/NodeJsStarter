const mongoose = require("mongoose");
const productSchema = mongoose.Schema({
  name: String,
  detail: {
    type: String,
  },
  price: {
    type: Number,
  },
});

module.exports = mongoose.model("product", productSchema);
