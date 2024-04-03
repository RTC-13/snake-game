import { Point } from "./Point";

describe("Point Class", () => {
  it("should create a point with the correct coordinates", () => {
    const point = new Point(3, 4);
    expect(point.x).toBe(3);
    expect(point.y).toBe(4);
  });

  it("should return the correct string representation", () => {
    const point = new Point(-2, 7);
    expect(point.toString()).toBe("x: -2, y: 7");
  });
});
