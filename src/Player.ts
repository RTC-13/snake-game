import SnakeController from "./SnakeController";

/**
 * Class representing a player
 */
abstract class Player {
  public sc: SnakeController;

  /**
   * Create a player
   * @param passedSnakeController snake controller for the player class.
   */
  constructor(passedSnakeController: SnakeController) {
    this.sc = passedSnakeController;
  }
  /**
   * Abastract make turn snake class
   */
  abstract makeTurn(): void;
}

export default Player;
