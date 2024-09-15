import { Point } from "./Point";
import ICollidable from "./IColliadable";

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
class Snake implements ICollidable {
  private currentParts: Point[];
  private currentDirection: Direction;
  private snakeColor: string;
  private isCurrentlyActive: boolean;

  /**
   * Create a snake
   * @param {string} color of the snake
   * @param {Point} startPosition - Initial position of the snake's head.
   * @param {number} size - Length of the snake.
   */
  constructor(color: string, startPosition: Point, size: number) {
    this.snakeColor = color;
    this.currentParts = [startPosition];
    for (let i = 1; i < size; i++) {
      const newX = startPosition.x + i;
      const newY = startPosition.y;
      this.currentParts.push(new Point(newX, newY));
    }
    this.currentDirection = Direction.Right;
    this.isCurrentlyActive = true;
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
    const head = this.currentParts[0];
    let newHead: Point | null = null;
    if (this.currentDirection === Direction.Left) {
      newHead = new Point(head.x - steps, head.y);
    } else if (this.currentDirection === Direction.Right) {
      newHead = new Point(head.x + steps, head.y);
    } else if (this.currentDirection === Direction.Up) {
      newHead = new Point(head.x, head.y - steps);
    } else if (this.currentDirection === Direction.Down) {
      newHead = new Point(head.x, head.y + steps);
    }
    if (newHead !== null) {
      this.currentParts.unshift(newHead);
      this.currentParts.pop();
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
   * Returns the current position of the Snake.
   * @returns {Point} coordinates
   */
  public get position(): Point {
    return this.currentParts[0];
  }

  /**
   * Returns true if the head of this snake collides with the head or body of the given snake.
   * @param {Snake} s - Snake to check collision with.
   * @returns {boolean} - True if collision occurs, false otherwise.
   */
  public didCollide(s: Snake): boolean {
    const head = this.position;
    const otherParts = s.parts().slice(1);
    return otherParts.some((part) => part.equals(head));
  }

  /**
   * Returns the direction of the snake.
   * @returns {Direction} - Current direction of the snake.
   */
  public get direction(): Direction {
    return this.currentDirection;
  }

  /**
   * Returns all parts of the snake.
   * @returns {Point[]} - Array of points representing all parts of the snake.
   */
  public parts(): Point[] {
    return this.currentParts;
  }

  /**
   * String representation of the Snake class.
   * @returns {string}
   */
  toString(): string {
    return this.snakeColor + " is at the position " + this.position;
  }

  /**
   * Updates the snake's position by calling the move method.
   */
  update(): void {
    this.move(1);
  }

  /**
   * Sets the isCurrentlyActive property to false, indicating the snake is dead.
   */
  die(): void {
    this.isCurrentlyActive = false;
  }

  /**
   * Returns whether the snake is currently active or not.
   * @returns {boolean} - True if the snake is active, false otherwise.
   */
  public get isActive(): boolean {
    return this.isCurrentlyActive;
  }

  /**
   * Returns the type of the snake.
   * @returns {string} - The type of the snake.
   */
  public get type(): string {
    return "snake";
  }

  /**
   * Adds one new Point to the snake's parts array, extending the snake.
   */
  public grow(): void {
    const tail = this.currentParts[this.currentParts.length - 1];
    let newPart: Point;
    if (this.currentDirection === Direction.Right) {
      newPart = new Point(tail.x + 1, tail.y);
    } else if (this.currentDirection === Direction.Left) {
      newPart = new Point(tail.x - 1, tail.y);
    } else if (this.currentDirection === Direction.Down) {
      newPart = new Point(tail.x, tail.y + 1);
    } else {
      newPart = new Point(tail.x, tail.y - 1);
    }
    this.currentParts.push(newPart);
  }
}

export { Snake, Direction };
