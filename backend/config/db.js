const mongoose = require("mongoose");

const connectDB = async () => {
  mongoose
  .connect(process.env.DATABASE_HOST + process.env.DATABASE_NAME, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(`${process.env.DATABASE_NAME} db connected successfully`);
  })
  .catch((err) => {
    console.log(err);
    console.log('db error');
    process.exit(1);
  });
};

module.exports = connectDB;

