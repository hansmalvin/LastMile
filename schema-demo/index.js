const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/schemaDemoDB")
  .then(() => console.log("Database Connected"))
  .catch((err) => console.log(err));

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

const User = mongoose.model("User", userSchema);

const insertData = async () => {
  try {
    const user = new User({
      name: "Hans",
      email: "hansss@mail.com",
      age: 23,
    });

    await user.save();
    console.log("Data inserted successfully");

  } catch (error) {
    console.log(error);
  }
};


const getData = async () => {
  try {
    const users = await User.find();
    console.log("Data from database:");
    console.log(users);
  } catch (error) {
    console.log(error);
  }
};

const runApp = async () => {
  await insertData();
  await getData();
};

runApp();