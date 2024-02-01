/**
 * Class representing a point in a graph.
 */
class Point {
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
  public get getX() {
    return this.xcoord;
  }
  /**
   * Returns the current Y value of the coordinate.
   * @return Y coordinate of the point.
   */
  public get getY() {
    return this.ycoord;
  }
}

export default Point;
