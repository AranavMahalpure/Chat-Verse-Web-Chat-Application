const mongoose = require("mongoose");
const colors = require("colors");

const dbConnect = async () => {
  try {
    console.log(process.env.MONGODB_URI)
    const connectionString = await mongoose.connect(process.env.MONGODB_URI,{family:4});
    console.log(
      colors.brightMagenta(
        `\nDB connected: ${connectionString.connection.host}\n`
      )
    );
  } catch (error) {
    console.log(colors.brightRed("\nConnection to link DB failed\n"));
    console.log(colors.brightRed(error));
  }
};

module.exports = dbConnect;
