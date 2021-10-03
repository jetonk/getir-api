export const ResponseHandler = (response, records) => {
  if (records.length > 0) {
    return success(response, records);
  }
  if (records.length === 0) {
    return noRecordsFound(response, records);
  }
};

const success = (response, records) => {
  response.status(200);
  response.send({
    code: 0,
    msg: "Retrieved the records successfully.",
    records,
  });
};

const badRequest = (response, records) => {
  response.status(400);
  response.send({
    success: false,
    msg: msg,
    records,
  });
};

const noRecordsFound = (response, records) => {
  response.status(200);
  response.send({
    code: 1,
    msg: "We couldn't find any results with your search.",
    records,
  });
};
