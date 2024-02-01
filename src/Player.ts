import SnakeController from "./SnakeController";

abstract class Player {
  public sc: SnakeController;

  constructor(passedSnakeController: SnakeController) {
    this.sc = passedSnakeController;
  }

  abstract makeTurn(): void;
}

export default Player;
