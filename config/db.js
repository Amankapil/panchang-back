const mongoose = require("mongoose");

// Replace `myDatabaseName` with the name of the database you want to use
const uri = "mongodb+srv://infoajaysharmatech:PJagFBG9ZcMnrKo1@cluster0.l9t0e.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
// const uri =
//   "mongodb+srv://amankapil004:tM6mIC3CPrrlEBrR@cluster0.tu4xd.mongodb.net/banner?retryWrites=true&w=majority&appName=Cluster0";

const connectDB = async () => {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected");
  } catch (err) {
    console.error("MongoDB connection failed:", err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
