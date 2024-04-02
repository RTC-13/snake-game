import Player from "./Player";
import { Snake, Direction } from "./Snake";
import { SnakeController } from "./SnakeController";

/**
 * Class representing wall behavior according to player location. Stopping the user from leaving the confines of the world.
 */
export class AvoidWallsPlayer extends Player {
  /**
   * Create AvoidWallsPlayer
   * @param {SnakeController} passedSakeController
   */
  constructor(passedSakeController: SnakeController) {
    super(passedSakeController);
  }
  /**
   * Turn the snake to avoid the user from hitting the walls of the canvas.
   */
  makeTurn(): void {
    const snakeDirection = this.sc.snakeDirection;
    const snakePosition = this.sc.snakePosition;
    const worldWidth = this.sc.worldWidth;
    const worldHeight = this.sc.worldHeight;

    if (
      snakeDirection === Direction.Left &&
      snakePosition.x === 0 &&
      snakePosition.y < worldHeight
    ) {
      this.sc.turnSnakeLeft();
    } else if (
      snakeDirection === Direction.Right &&
      snakePosition.x === worldWidth &&
      snakePosition.y < worldHeight
    ) {
      this.sc.turnSnakeLeft();
    } else if (
      snakeDirection === Direction.Up &&
      snakePosition.y === 0 &&
      snakePosition.x < worldWidth
    ) {
      this.sc.turnSnakeLeft();
    } else if (
      snakeDirection === Direction.Down &&
      snakePosition.y === worldHeight &&
      snakePosition.x < worldHeight
    ) {
      this.sc.turnSnakeLeft();
    }
  }
}
