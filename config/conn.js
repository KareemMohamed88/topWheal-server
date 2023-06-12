const mongoose = require("mongoose");

const DBconnection = () => {
  mongoose
    .connect(
      process.env.DB_URL
    )
    .then((conn) => {
      console.log("Database conected succsefully");
    })
    .catch((err) => {
      console.log(`Please solve ${err}`);
    });
};

module.exports = DBconnection;