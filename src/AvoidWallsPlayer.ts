import { Player } from "./Player";
import { Snake, Direction } from "./Snake";
import { SnakeController } from "./SnakeController";
import display from "./display";

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

    // If the snake is moving backward and in the first quadrant, turn the snake left to avoid left wall
    if (
      snakeDirection === Direction.Left &&
      snakePosition.x === 0 &&
      snakePosition.y < worldHeight / 2
    ) {
      display("");
      this.sc.turnSnakeLeft();
    }
    // If the snake is moving up and in the first quadrant, turn the snake right to avoid the top wall
    else if (
      snakeDirection === Direction.Up &&
      snakePosition.y === 0 &&
      snakePosition.x < worldWidth / 2
    ) {
      this.sc.turnSnakeRight();
    }
    // If the snake is moving forward and in the second quadrant, turn the snake right to avoid the right wall
    else if (
      snakeDirection === Direction.Right &&
      snakePosition.x === worldWidth &&
      snakePosition.y < worldHeight / 2
    ) {
      this.sc.turnSnakeRight();
    }
    // If the snake is moving up and in the second quadrant, turn the snake left to avoid the top wall
    else if (
      snakeDirection === Direction.Up &&
      snakePosition.y === 0 &&
      snakePosition.x > worldWidth / 2
    ) {
      this.sc.turnSnakeLeft();
    }
    // If the snake is moving backward and in the third quadrant, turn the snake right to avoid the left wall
    else if (
      snakeDirection === Direction.Left &&
      snakePosition.x === 0 &&
      snakePosition.y > worldHeight / 2
    ) {
      this.sc.turnSnakeRight();
    }
    // If the snake is moving down and in the third quadrant, turn the snake right to avoid the bottom wall
    else if (
      snakeDirection === Direction.Down &&
      snakePosition.y === worldHeight &&
      snakePosition.x < worldWidth / 2
    ) {
      this.sc.turnSnakeRight();
    }
    // If the snake is moving down and in the fourth quadrant, turn the snake left to avoid the bottom wall
    else if (
      snakeDirection === Direction.Down &&
      snakePosition.y === worldHeight &&
      snakePosition.x > worldWidth / 2
    ) {
      this.sc.turnSnakeLeft();
    }
    // If the snake is moving forward in the fourth quadrant, turn the snake left to avoid the right wall
    else if (
      snakeDirection === Direction.Right &&
      snakePosition.x === worldWidth &&
      snakePosition.y > worldHeight / 2
    ) {
      this.sc.turnSnakeLeft();
    }
  }
}
