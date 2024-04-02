/**
 * Class representing a point in a graph.
 */
export class Point {
  private xcoord: number;
  private ycoord: number;

  /**
   * Create point coordinates.
   * @param x - x value of the coordinate.
   * @param y - y value of the coordinate.
   */
  constructor(x: number, y: number) {
    this.xcoord = x;
    this.ycoord = y;
  }
  /**
   * Returns the current X value of the coordinate.
   * @return X coordinate of the point.
   */
  public get x() {
    return this.xcoord;
  }
  /**
   * Returns the current Y value of the coordinate.
   * @return Y coordinate of the point.
   */
  public get y() {
    return this.ycoord;
  }

  /**
   * returns string representation of the point class.
   * @example
   * // Returns x: 0, y: 0
   * Point.toString()
   * @returns {string}
   */
  toString(): string {
    return `x: ${this.xcoord}, y: ${this.ycoord}`;
  }
}
