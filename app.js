import express from "express";
import { getData } from "./service.js";

const app = express();

app.post("/data", getData);

app.listen(process.env.PORT || 3000);
