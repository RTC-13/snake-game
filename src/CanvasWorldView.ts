import IWorldView from "./IWorldView";
import WorldModel from "./WorldModel";

/**
 * Class representing a Canvas World View
 */
class CanvasWorldView implements IWorldView {
  private scalingFactor: number;
  private worldCanvas: HTMLCanvasElement;
  private context: CanvasRenderingContext2D;

  /**
   * Create the Canvas World View.
   * @param scalingFactor scale of the world
   */

  constructor(scalingFactor: number) {
    this.scalingFactor = scalingFactor;
    this.worldCanvas = document.createElement("canvas");
    this.context = this.worldCanvas.getContext("2d")!;

    document.body.appendChild(this.worldCanvas);
  }
  /**
   * Display the canvas of the world.
   * @param worldModel world model of the snake game.
   */

  public display(worldModel: WorldModel) {
    const snake = worldModel.snake;
    this.worldCanvas.width = worldModel.width * this.scalingFactor;
    this.worldCanvas.height = worldModel.height * this.scalingFactor;

    this.context.fillStyle = snake.color;
    this.context.fillRect(
      snake.position.x,
      snake.position.y,
      this.scalingFactor,
      this.scalingFactor
    );
  }
}
export default CanvasWorldView;
