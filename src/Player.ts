import { SnakeController } from "./SnakeController";

/**
 * Class representing a player
 */
export abstract class Player {
  public sc: SnakeController;

  /**
   * Create a player
   * @param {SnakeController} snakeController snake controller for the player class.
   */
  constructor(snakeController: SnakeController) {
    this.sc = snakeController;
  }
  /**
   * Abastract make turn snake class
   */
  abstract makeTurn(): void;
}
