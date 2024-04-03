// import display from "./display";

// place your code on line 5 above the export statement below
import { Point } from "./Point";

/**
 * Enum representing the direction directions
 * @enum {number}
 */
enum Direction {
  Up = 1,
  Down,
  Left,
  Right,
}

/**
 * Class representing a Snake.
 */
class Snake {
  private currentPosition: Point;
  private currentDirection: number;
  private snakeColor: string;

  /**
   * Create a snake
   * @param {string} color of the snake
   */
  constructor(color: string) {
    this.snakeColor = color;
    this.currentPosition = new Point(0, 0);
    this.currentDirection = Direction.Right;
  }

  /**
   * Access the color of the snake
   * @returns {string} color
   */
  public get color(): string {
    return this.snakeColor;
  }

  /**
   * Moves the snake forward the number of steps given.
   * @param {number} steps - The number of steps to move the snake.
   */
  public move(steps: number) {
    if (this.currentDirection === Direction.Left) {
      this.currentPosition = new Point(
        this.currentPosition.x - steps,
        this.currentPosition.y
      );
    } else if (this.currentDirection === Direction.Right) {
      this.currentPosition = new Point(
        this.currentPosition.x + steps,
        this.currentPosition.y
      );
    } else if (this.currentDirection === Direction.Up) {
      this.currentPosition = new Point(
        this.currentPosition.x,
        this.currentPosition.y - steps
      );
    } else if (this.currentDirection === Direction.Down) {
      this.currentPosition = new Point(
        this.currentPosition.x,
        this.currentPosition.y + steps
      );
    }
  }

  /**
   * @deprecated Use {@link turnLeft} or {@link turnRight}
   * Turns the snake, if facing forward it will turn it backwards and viceversa.
   *
   */
  public turn(): void {
    // is the snake turning clockwise or anticlockwise?
    // if snake is facing forward, turn it backwards. Else turn it forward.
    if (this.currentDirection === 1) {
      this.currentDirection = -1;
    } else {
      this.currentDirection = 1;
    }
  }

  /**
   * Turns the snake to the left
   */
  public turnLeft(): void {
    if (this.currentDirection === Direction.Left) {
      this.currentDirection = Direction.Down;
    } else if (this.currentDirection === Direction.Up) {
      this.currentDirection = Direction.Left;
    } else if (this.currentDirection === Direction.Right) {
      this.currentDirection = Direction.Up;
    } else if (this.currentDirection === Direction.Down) {
      this.currentDirection = Direction.Right;
    }
  }
  /**
   * Turns the snake to the right
   */
  public turnRight(): void {
    if (this.currentDirection === Direction.Left) {
      this.currentDirection = Direction.Up;
    } else if (this.currentDirection === Direction.Up) {
      this.currentDirection = Direction.Right;
    } else if (this.currentDirection === Direction.Right) {
      this.currentDirection = Direction.Down;
    } else if (this.currentDirection === Direction.Down) {
      this.currentDirection = Direction.Left;
    }
  }

  /**
   *Returns the current position of the Snake.
   @returns {Point} coordinates
   */
  public get position(): Point {
    return this.currentPosition;
  }
  /**
   * Returns the current direction of the snake.
   * @return {Direction} of the snake.
   */
  public get direction(): Direction {
    return this.currentDirection;
  }
  /**
   * String representation of the Snake class.
   * @returns {string}
   */

  toString(): string {
    return this.snakeColor + " is at the position " + this.position;
  }
}

export { Snake, Direction };
