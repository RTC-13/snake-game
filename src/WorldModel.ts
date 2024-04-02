// import display from "./display";

// place your code on line 5 above the export statement below
import IWorldView from "./IWorldView";
import { Snake } from "./Snake";
import display from "./display";
/**
 * Class representing the world model.
 */
class WorldModel {
  private passedSnake: Snake;
  private worldWidth: number;
  private worldHeight: number;
  private worldView: IWorldView | null;

  /**
   * Create a World Model.
   * @param passedSnake
   */
  constructor(passedSnake: Snake, passedWidth: number, passedHeight: number) {
    this.passedSnake = passedSnake;
    this.worldWidth = passedWidth;
    this.worldHeight = passedHeight;
    this.worldView = null;
  }

  /**
   * Updates the position of the snake in the world model by moving it the # of specified steps.
   * @param {number} steps
   */
  public update(steps: number): void {
    this.snake.move(steps);
    if (this.worldView !== null) {
      this.worldView.display(this);
    }
  }
  /**
   * Returns the corresponding snake.
   * @return the current snake.
   */
  public get snake(): Snake {
    return this.passedSnake;
  }
  /**
   * Returns the width of the World Model.
   * @return {number}
   */
  public get width(): number {
    return this.worldWidth;
  }
  /**
   * Returns the height of the World Model.
   * @return {number}
   */
  public get height(): number {
    return this.worldHeight;
  }

  /**
   * Sets the World View.
   *
   */
  public set view(worldView: IWorldView) {
    this.worldView = worldView;
  }
}

// const blueSnake = new Snake("blue");
// const world = new WorldModel(blueSnake, 100, 100);

export default WorldModel;
