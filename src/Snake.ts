// import display from "./display";

// place your code on line 5 above the export statement below
import Point from "./Point";
/**
 * Class representing a Snake.
 */
enum Direction {
  Up = 1,
  Down,
  Left,
  Right,
}

class Snake {
  private currentPosition: Point;
  private currentDirection: number;
  private snakeColor: string;

  /**
   * Create a snake
   * @param color - the color of the snake.
   */
  constructor(color: string) {
    this.snakeColor = color;
    this.currentPosition = new Point(0, 0);
    //  added enum support
    this.currentDirection = Direction.Right;
  }
  /**
   * Moves the snake forward the number of steps given.
   * @param steps - The number of steps to move the snake.
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
  public turn() {
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
  public turnLeft() {
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
  public turnRight() {
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
   @return position of the snake.
   */
  public get position() {
    return this.currentPosition;
  }
  /**
   * Returns the current direction of the snake.
   * @return direction of the snake.
   */
  public get direction() {
    return this.currentDirection;
  }
  toString() {
    return this.snakeColor + "is at the position" + this.position;
  }
}

export { Snake, Direction };
