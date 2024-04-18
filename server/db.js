const mongoose = require("mongoose");
const connectdb = async () => {
  try {
    console.log(`${process.env.MONGO_URI}`);
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(` Connected to ${conn.connection.host} `);
  } catch (error) {
    console.log(`Error connecting ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectdb;
