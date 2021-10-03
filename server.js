import app from "./src/app.js";
import mongoose from "mongoose";
import { dbURI } from "./src/config/DB.js";

mongoose
  .connect(dbURI, { keepAlive: true, keepAliveInitialDelay: 300000 })
  .then(app.listen(process.env.PORT || 3000))
  .catch((err) => console.log(err.reason));

mongoose.connection.on("connected", function () {
  console.log("Mongoose default connection open to " + dbURI);
});

mongoose.connection.on("error", function (err) {
  console.log("Mongoose default connection error: " + err);
});

mongoose.connection.on("disconnected", function () {
  console.log("Mongoose default connection disconnected");
});

process.on("SIGINT", function () {
  mongoose.connection.close(function () {
    console.log(
      "Mongoose default connection disconnected through app termination"
    );
    process.exit(0);
  });
});
