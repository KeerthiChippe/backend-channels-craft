const mongoose = require("mongoose");

const configureDB = async () => {
  try {
    await mongoose.connect(
      // "mongodb+srv://KeerthiChippe:spUIrUdWDHq7iBR0@cluster0.x14cc0q.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
      "mongodb+srv://KeerthiC:jMu06UPKjhdqX7zy@cluster0.x14cc0q.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("successfully connected to db");
  } catch (e) {
    console.log("error connecting to db", e.message);
  }
};

module.exports = configureDB;
