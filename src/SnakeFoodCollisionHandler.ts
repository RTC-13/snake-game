import { Snake } from "./Snake";
import { Food } from "./Food";

/**
 * Class representing a SnakeFoodCollisionHandler.
 */
class SnakeFoodCollisionHandler {
  /**
   * Method to be called when a snake collides with food.
   * @param {Snake} snake - The snake object.
   * @param {Food} food - The food object.
   */
  public applyAction(snake: Snake, food: Food): void {
    food.eat();
    snake.grow();
  }
}
export default SnakeFoodCollisionHandler;
