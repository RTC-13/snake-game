// import display from "./display";

// place your code on line 5 above the export statement below
import { Snake } from "./Snake";
const blueSnake = new Snake("blue");
/**
 * Class representing the world model..
 */
class WorldModel {
  private snake: Snake;
  private width: number;
  private height: number;

  /**
   * Create a World Model.
   * @param passedSnake - snake
   */
  constructor(passedSnake: Snake, passedWidth: number, passedHeight: number) {
    this.snake = passedSnake;
    this.width = passedWidth;
    this.height = passedHeight;
  }

  /**
   * Updates the position of the snake in the world model by moving it the # of specified steps.
   * @param
   */
  private update(steps: number) {
    this.snake.move(steps);
  }
  /**
   * Returns the corresponding snake.
   * @return the current snake.
   */
  public getSnake(): Snake {
    return this.snake;
  }
  /**
   * Returns the width of the World Model.
   * @return width of world.
   */
  public get getWidth() {
    return this.width;
  }
  /**
   * Returns the height of the World Model.
   * @return height of world.
   */
  public get getHeight() {
    return this.height;
  }
}

const world = new WorldModel(blueSnake, 100, 100);

export default WorldModel;
