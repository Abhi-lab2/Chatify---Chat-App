const mongoose = require("mongoose");
const colors = require("colors");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://abhijeet:abhijeet@cluster0.ytmaozc.mongodb.net/chatApp?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );

    console.log(`MongoDB Connected: ${conn.connection.host}`.blue.underline);
  } catch (error) {
    console.log(`Error: ${error.message}`.green.bold);
    process.exit();
  }
};

module.exports = connectDB;
