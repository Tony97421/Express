const request = require("supertest");
const app = require("../app");

describe("GET/api/movies", () => {
  it("should return all movies", async () => {
    const response = await request(app).get("/api/movies");

    expect(response.header["content-type"]).toMatch(/json/);
    expect(response.status).toEqual(200);
  });
});

describe("GET/api/movies/:id", () => {
    it("should return id 1", async () => {
        const response = await request(app).get("/api/movies/1");

        expect(response.status).toEqual(200);
        expect(response.header["content-type"]).toMatch(/json/);
    });
});

describe("GET/api/movies/:id", () => {
    it("should return id 0", async () => {
        const response = await request(app).get("/api/movies/0");

        expect(response.status).toEqual(404);
    });
});