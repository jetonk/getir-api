import { PayloadSchema } from "../schemas/Payload.js";
import { ResponseHandler } from "../utils/Response.js";
export const PayloadValidator = () => async (request, response, next) => {
  const payload = request.body;
  try {
    await PayloadSchema.validate(payload);
    next();
  } catch (error) {
    console.error(error);
    ResponseHandler(response, [], error);
  }
};
