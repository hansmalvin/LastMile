const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/aggregation_demo")
.then(() => console.log("Database connected successfully"))
.catch(err => console.log(err));

const salesSchema = new mongoose.Schema({
  productName: String,
  category: String,
  price: Number,
  quantity: Number
});

const Sale = mongoose.model("Sale", salesSchema);

async function insertData() {
  await Sale.insertMany([
      { productName: "Shirt", category: "Clothing", price: 50, quantity: 10 },
      { productName: "Phone", category: "Electronics", price: 500, quantity: 5 },
      { productName: "Laptop", category: "Electronics", price: 1000, quantity: 2 },
    { productName: "Shoes", category: "Clothing", price: 100, quantity: 4 },
    { productName: "Jeans", category: "Clothing", price: 70, quantity: 6 },
    { productName: "TV", category: "Electronics", price: 800, quantity: 1 }
  ]);
  console.log("Sample data inserted");
}

async function matchStage() {
  const result = await Sale.aggregate([
    { $match: { category: "Electronics" } }
  ]);
  console.log("Match Result:", result);
}

async function groupStage() {
  const result = await Sale.aggregate([
    {
      $group: {
        _id: "$category",
        totalRevenue: { $sum: { $multiply: ["$price", "$quantity"] } },
        totalProducts: { $sum: 1 }
      }
    }
  ]);
  console.log("Group Result:", result);
}

async function projectStage() {
  const result = await Sale.aggregate([
    {
      $project: {
        productName: 1,
        totalAmount: { $multiply: ["$price", "$quantity"] }
      }
    }
  ]);
  console.log("Project Result:", result);
}

async function sortStage() {
  const result = await Sale.aggregate([
    {
      $project: {
        productName: 1,
        totalAmount: { $multiply: ["$price", "$quantity"] }
      }
    },
    { $sort: { totalAmount: -1 } }
  ]);
  console.log("Sorted Result:", result);
}

async function fullPipeline() {
  const result = await Sale.aggregate([
    { $match: { category: "Electronics" } },
    {
      $group: {
        _id: "$category",
        totalRevenue: { $sum: { $multiply: ["$price", "$quantity"] } }
      }
    },
    {
      $project: {
        category: "$_id",
        totalRevenue: 1,
        _id: 0
      }
    },
    { $sort: { totalRevenue: -1 } }
  ]);

  console.log("Full Pipeline Result:", result);
}

async function run() {
  await insertData();
  await matchStage();
  await groupStage();
  await projectStage();
  await sortStage();
  await fullPipeline();
}

run();