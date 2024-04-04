import { IInputHandler } from "./IInputHandler";
import { Player } from "./Player";
import { SnakeController } from "./SnakeController";

export class HumanPlayer extends Player {
  private snakeController: SnakeController;
  private inputHandler: IInputHandler;

  constructor(
    passedSnakeController: SnakeController,
    inputHandler: IInputHandler
  ) {
    super(passedSnakeController);
    this.snakeController = passedSnakeController;
    this.inputHandler = inputHandler;
  }

  makeTurn(): void {
    if (this.inputHandler.madeLeftMove()) {
      this.snakeController.turnSnakeLeft();
      this.inputHandler.resetLeftMove();
    } else if (this.inputHandler.madeRightMove()) {
      this.snakeController.turnSnakeRight();
      this.inputHandler.resetRightMove();
    }
  }
}
