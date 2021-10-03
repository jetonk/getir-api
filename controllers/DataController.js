import Model from "../models/Main.js";
import { ResponseHandler } from "../utils/Response.js";

export const DataController = async (request, response) => {
  const { startDate, endDate, minCount, maxCount } = request.body;
  const records = await Model.aggregate([
    {
      $project: {
        _id: 0,
        key: 1,
        createdAt: 1,
        totalCount: { $sum: "$counts" },
      },
    },
    {
      $match: {
        createdAt: {
          $gte: new Date(startDate),
          $lte: new Date(endDate),
        },
        totalCount: { $gt: minCount, $lte: maxCount },
      },
    },
  ]);
  ResponseHandler(response, records);
};
