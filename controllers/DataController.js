import Model from "../models/Main.js";
import Response from "../utils/Response.js";

export default async (request, response) => {
  // const results = await Model.find(
  //   {},
  //   { _id: 0, key: 1, createdAt: 1, totalCounts: { $sum: count } }
  // );
  const results = Model.aggregate([
    // Limit to relevant documents and potentially take advantage of an index
    // {
    //   $match: {
    //     user_id: "foo",
    //   },
    // },
    {
      $group: {
        key: 1,
        createdAt: 1,
        count: { $sum: 1 },
      },
    },
  ]);
  Response.success(response, results);
};
