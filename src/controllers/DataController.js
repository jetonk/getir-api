import Model from "../models/Main.js";
import { ResponseHandler } from "../utils/Response.js";
import { GetData } from "../queeries/GetData.js";

export const DataController = async (request, response) => {
  const query = GetData(request.body);
  const records = await Model.aggregate(query);
  ResponseHandler(response, records);
};
