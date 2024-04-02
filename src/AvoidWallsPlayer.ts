import Player from "./Player";
import { Snake, Direction } from "./Snake";
import SnakeController from "./SnakeController";

/**
 * Class representing wall behavior according to player location.
 */
class AvoidWallsPlayer extends Player {
  /**
   *
   * @param snakeController Snake controller
   */
  constructor(snakeController: SnakeController) {
    super(snakeController);
  }
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

export default AvoidWallsPlayer;
