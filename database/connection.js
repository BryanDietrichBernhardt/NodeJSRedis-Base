const mongoose = require("mongoose");

async function main() {
  try {
    mongoose.set("strictQuery", true);
    await mongoose.connect(
      `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.o1ouj0k.mongodb.net/?retryWrites=true&w=majority`
    );
  } catch (error) {
    console.log(error);
  }
}

module.exports = main;
