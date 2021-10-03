import { ResponseHandler } from "../utils/Response.js";

export const RequestValidator = (error, request, response, next) => {
  if (error) {
    return ResponseHandler(response, [], error);
  }
  next();
};
