import { Point } from "./Point";
import { Direction, Snake } from "./Snake";
import { WorldModel } from "./WorldModel";

/**
 * Class representing a Snake Controller.
 */
export class SnakeController {
  private snakeWorld: WorldModel;
  private slitherer: Snake;

  /**
   * @param worldModel - The world model for this controller.
   * @param snake - The snake of this controller.
   */
  constructor(worldModel: WorldModel, snake: Snake) {
    this.snakeWorld = worldModel;
    this.slitherer = snake;
  }

  /**
   * Turns the snake left.
   */
  public turnSnakeLeft(): void {
    this.slitherer.turnLeft();
  }

  /**
   * Turns the snake right.
   */
  public turnSnakeRight(): void {
    this.slitherer.turnRight();
  }

  /**
   * Returns the current position of the Snake.
   * @return position of the snake.
   */
  public get snakePosition(): Point {
    return this.slitherer.position;
  }

  /**
   * Returns the current direction of the Snake.
   * @return direction of the snake.
   */
  public get snakeDirection(): Direction {
    return this.slitherer.direction;
  }

  /**
   * Returns the width of the snake world.
   * @return the width of the world.
   */
  public get worldWidth(): number {
    return this.snakeWorld.width;
  }

  /**
   * Returns the height of the snake world.
   * @return the height of the world.
   */
  public get worldHeight(): number {
    return this.snakeWorld.height;
  }
}
