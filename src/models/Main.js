import mongoose from "mongoose";

const { Schema } = mongoose;

const schema = new Schema(
  {
    key: String,
    createdAt: { type: Date, default: Date.now },
    count: Array,
    value: String,
  },
  { collection: "records" }
);

const Model = mongoose.model("records", schema);

export default Model;
