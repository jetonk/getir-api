import request from "supertest";
import app from "../app.js";

describe("Test the app.js", () => {
  test("It should response the GET method - 404", (done) => {
    request(app)
      .get("/")
      .then((response) => {
        expect(response.statusCode).toBe(404);
        done();
      });
  });
});
