import express from "express";
import { DataController } from "./controllers/DataController.js";
import { InitMongoose } from "./utils/MongooseConn.js";

InitMongoose();

const app = express();
app.use(express.json());
app.post("/data", DataController);

app.listen(process.env.PORT || 3000);
