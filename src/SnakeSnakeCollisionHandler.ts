import { Snake } from "./Snake";

/**
 * Class representing a SnakeSnakeCollisionHandler.
 */
class SnakeSnakeCollisionHandler {
  /**
   * Method to be called when two snakes collide.
   * @param {Snake} snake1 - The first snake object.
   * @param {Snake} snake2 - The second snake object.
   */
  public applyAction(snake1: Snake, snake2: Snake): void {
    snake1.die();
  }
}
