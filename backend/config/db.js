const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("DB Connected host-> " + conn.connection.host);
  } catch (error) {
    console.log("DB Error : " + error.message);
    process.exit();
  }
};
module.exports = connectDB;
