const Product = require("../Models/Products");

exports.read = async (req, res) => {
  try {
    res.send("hello controller Read");
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error");
  }
};

exports.list = async (req, res) => {
  try {
    res.send("hello List");
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error");
  }
};

exports.create = async (req, res) => {
  try {
    
    res.send("hello create");
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error");
  }
};

exports.update = async (req, res) => {
  try {
    res.send("hello update");
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error");
  }
};

exports.remove = async (req, res) => {
  try {
    res.send("hello delete");
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error");
  }
};
