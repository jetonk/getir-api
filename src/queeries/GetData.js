export const GetData = (payload) => {
  const { startDate, endDate, minCount, maxCount } = payload;
  return [
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
  ];
};
