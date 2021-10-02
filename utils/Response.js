const Response = {
  success: (res, records) => {
    res.status(200);
    res.send({
      code: 0,
      msg: "Retrieved the records successfully.",
      records,
    });
  },
  badRequest: (res, msg = null, data = null) => {
    res.status(400);
    res.send({
      success: false,
      msg: msg,
      body: data,
    });
  },
  noData: (res, msg = null, data = null) => {
    res.status(200);
    res.send({
      success: false,
      msg: msg,
      body: data,
    });
  },
};
export default Response;
