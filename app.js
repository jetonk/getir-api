import express from "express";
import compression from "compression";
import helmet from "helmet";
import { DataController } from "./controllers/DataController.js";
import { InitMongoose } from "./utils/MongooseConn.js";
import { RequestValidator, PayloadValidator } from "./middlewares/index.js";

InitMongoose();

const app = express();

app.use(compression());
app.use(helmet());
app.use(express.json());
app.use(RequestValidator);
app.post("/data", PayloadValidator(), DataController);

app.listen(process.env.PORT || 3000);
