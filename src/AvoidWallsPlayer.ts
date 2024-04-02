import Player from "./Player";
import { Snake, Direction } from "./Snake";

/**
 * Class representing wall behavior according to player location.
 */
class AvoidWallsPlayer extends Player {
  makeTurn(): void {
    const snakeDirection = this.sc.snakeDirection;
    const snakePosition = this.sc.snakePosition;
    const worldWidth = this.sc.worldWidth;
    const worldHeight = this.sc.worldHeight;

    if (
      (snakeDirection === Direction.Left && snakePosition.x === 0) ||
      (snakeDirection === Direction.Right &&
        snakePosition.x === worldWidth - 1) ||
      (snakeDirection === Direction.Up && snakePosition.y === 0) ||
      (snakeDirection === Direction.Down && snakePosition.y === worldHeight - 1)
    ) {
    }
  }
}

export default AvoidWallsPlayer;
