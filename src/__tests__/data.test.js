import mongoose from "mongoose";
import { dbURI } from "../config/DB.js";
import request from "supertest";
import app from "../app.js";
import Model from "../models/Main.js";
import { GetData } from "../queeries/GetData.js";

describe("Test the app.js", () => {
  const payload = {
    startDate: "2015-01-04",
    endDate: "2015-12-14",
    minCount: 2700,
    maxCount: 3000,
  };
  beforeEach((done) => {
    mongoose.connect(
      dbURI,
      { keepAlive: true, keepAliveInitialDelay: 300000 },
      () => done()
    );
  });

  test("It should response the POST method - 200 with records matching", async () => {
    const query = GetData(payload);
    const records = await Model.aggregate(query);
    await request(app)
      .post("/data")
      .send(payload)
      .then((response) => {
        expect(response.statusCode).toBe(200);
        expect(response.body.code).toBe(0);
        expect(response.body).toHaveProperty("msg");
        expect(response.body.records).toHaveLength(records.length);
      });
  }, 10000);

  test("It should response the POST method - 200 with different records not matching", async () => {
    const anotherPayload = {
      startDate: "2016-01-04",
      endDate: "2016-12-14",
      minCount: 1700,
      maxCount: 2700,
    };
    const query = GetData(anotherPayload);
    const records = await Model.aggregate(query);
    await request(app)
      .post("/data")
      .send(payload)
      .then((response) => {
        expect(response.statusCode).toBe(200);
        expect(response.body.records).not.toHaveLength(records.length);
      });
  }, 10000);

  test("It should response the POST method - 400 Bad Request without records", (done) => {
    request(app)
      .post("/data")
      .then((response) => {
        expect(response.statusCode).toBe(400);
        expect(response.body.code).toBe(3);
        done();
      });
  });

  afterEach((done) => {
    mongoose.connection.close(() => done());
  });
});
