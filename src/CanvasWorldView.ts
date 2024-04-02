import { IWorldView } from "./IWorldView";
import { WorldModel } from "./WorldModel";

/**
 * Class representing a Canvas World View.
 */
export class CanvasWorldView implements IWorldView {
  private scalingFactor: number;
  private worldCanvas: HTMLCanvasElement;
  private context: CanvasRenderingContext2D;

  /**
   * Create the Canvas World View.
   * @param {number} scalingFactor scale of the world.
   */

  constructor(scalingFactor: number) {
    this.scalingFactor = scalingFactor;
    this.worldCanvas = document.createElement("canvas");
    this.context = this.worldCanvas.getContext("2d")!;

    document.body.appendChild(this.worldCanvas);
  }
  /**
   * Display the canvas of the world.
   * @param {WorldModel} passedWorldModel model of the snake game to be used in the canvas.
   */

  public display(passedWorldModel: WorldModel): void {
    const snake = passedWorldModel.snake;
    this.worldCanvas.width = passedWorldModel.width * this.scalingFactor;
    this.worldCanvas.height = passedWorldModel.height * this.scalingFactor;

    this.context.fillStyle = snake.color;
    this.context.fillRect(
      snake.position.x,
      snake.position.y,
      this.scalingFactor,
      this.scalingFactor
    );
  }
}
