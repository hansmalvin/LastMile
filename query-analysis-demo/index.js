const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/query_analysis_demo")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log("Connection Error:", err));

const productSchema = new mongoose.Schema({
  name: String,
  category: String,
  price: Number,
  stock: Number
});

const Product = mongoose.model("Product", productSchema);

function getScanStage(explainResult) {
  const stages = explainResult.executionStats.executionStages;
  if (stages.stage === "FETCH" && stages.inputStage) {
    return stages.inputStage.stage;
  }
  return stages.stage; 
}

async function runLab() {
  try {
    await Product.deleteMany({});
    try {
      await Product.collection.dropIndexes(); 
    } catch (e) {
    }

    console.log("Generating sample data...");
    const sampleProducts = [];

    for (let i = 1; i <= 30; i++) {
      sampleProducts.push({
        name: "Product " + i,
        category: i % 2 === 0 ? "Laptops" : "Furniture",
        price: Math.floor(Math.random() * 100),
        stock: Math.floor(Math.random() * 20)
      });
    }

    await Product.insertMany(sampleProducts);
    console.log("30 Sample products inserted.\n");

    console.log("--- 1. Query WITHOUT index ---");
    let result1 = await Product.find({ category: "Laptops" }).explain("executionStats");
    console.log({
      stage: getScanStage(result1),
      totalDocsExamined: result1.executionStats.totalDocsExamined, 
      executionTimeMillis: result1.executionStats.executionTimeMillis
    });

    console.log("\nCreating Single Index on 'category'...");
    await Product.collection.createIndex({ category: 1 });

    console.log("\n--- 2. Query WITH single index ---");
    let result2 = await Product.find({ category: "Laptops" }).explain("executionStats");
    console.log({
      stage: getScanStage(result2), 
      totalDocsExamined: result2.executionStats.totalDocsExamined, 
      executionTimeMillis: result2.executionStats.executionTimeMillis
    });

    console.log("\n--- 3. SORT Query with ONLY single index ---");
    let result3 = await Product.find({ category: "Laptops" })
      .sort({ price: 1 })
      .explain("executionStats");
    console.log({
      stage: getScanStage(result3),
      totalDocsExamined: result3.executionStats.totalDocsExamined,
      executionTimeMillis: result3.executionStats.executionTimeMillis
    });

    console.log("\nCreating Compound Index on 'category' and 'price'...");
    await Product.collection.createIndex({ category: 1, price: 1 });

    console.log("\n--- 4. SORT Query WITH compound index ---");
    let result4 = await Product.find({ category: "Laptops" })
      .sort({ price: 1 })
      .explain("executionStats");
    console.log({
      stage: getScanStage(result4),
      totalDocsExamined: result4.executionStats.totalDocsExamined,
      executionTimeMillis: result4.executionStats.executionTimeMillis
    });

  } catch (error) {
    console.error("Error during lab:", error);
  } finally {
    await mongoose.connection.close();
    console.log("\nDatabase connection closed.");
  }
}

runLab();