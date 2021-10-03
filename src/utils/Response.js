import { ValidationError } from "yup";

export const ResponseHandler = (response, records, error) => {
  if (error?.type === "entity.parse.failed") {
    return badRequest(response);
  }

  if (error instanceof ValidationError) {
    return missingFields(response, error);
  }

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

const badRequest = (response) => {
  response.status(400);
  response.send({
    code: 2,
    msg: "Malformed request payload data.",
  });
};

const missingFields = (response, error) => {
  response.status(400);
  response.send({
    code: 3,
    msg: error.errors.join(", "),
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
