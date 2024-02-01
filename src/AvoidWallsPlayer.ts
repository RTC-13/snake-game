import Player from "./Player";
import { Snake, Direction } from "./Snake";

/**
 * Class representing player wall behavior.
 */
class AvoidWallsPlayer extends Player {
  makeTurn(): void {
    const snakeDirection = this.sc.snakeDirection;
    const snakePosition = this.sc.snakePosition;
    const worldWidth = this.sc.worldWidth;
    const worldHeight = this.sc.worldHeight;

    if (
      (snakeDirection === Direction.Left && snakePosition.getX === 0) ||
      (snakeDirection === Direction.Right &&
        snakePosition.getX === worldWidth - 1) ||
      (snakeDirection === Direction.Up && snakePosition.getY === 0) ||
      (snakeDirection === Direction.Down &&
        snakePosition.getY === worldHeight - 1)
    ) {
    }
  }
}

export default AvoidWallsPlayer;
