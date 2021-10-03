import * as yup from "yup";
import { parse, isDate } from "date-fns";

function checkDate(value, originalValue) {
  const parsedDate = isDate(originalValue)
    ? originalValue
    : parse(originalValue, "yyyy-MM-dd", new Date());

  return parsedDate;
}

const today = new Date();

export const PayloadSchema = yup.object({
  startDate: yup.date().transform(checkDate).max(today),
  endDate: yup.date().transform(checkDate).max(today),
  minCount: yup.number().positive().required(),
  maxCount: yup.number().positive().required(),
});
