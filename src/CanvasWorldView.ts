import { IWorldView } from "./IWorldView";
import WorldModel from "./WorldModel";
import { Snake } from "./Snake";
import { Point } from "./Point";

export class CanvasWorldView implements IWorldView {
  private scalingFactor: number;
  private worldCanvas: HTMLCanvasElement;
  private context: CanvasRenderingContext2D;

  constructor(scalingFactor: number) {
    this.scalingFactor = scalingFactor;
    this.worldCanvas = document.createElement("canvas");
    this.context = this.worldCanvas.getContext("2d")!;

    document.body.appendChild(this.worldCanvas);
  }

  public display(passedWorldModel: WorldModel): void {
    // Clear the canvas before drawing
    this.context.clearRect(
      0,
      0,
      this.worldCanvas.width,
      this.worldCanvas.height
    );

    passedWorldModel.allSnakes.forEach((snake: Snake) => {
      snake.parts().forEach((part: Point) => {
        const scaledPartX = part.x * this.scalingFactor;
        const scaledPartY = part.y * this.scalingFactor;

        // Draw a square at the scaled coordinates
        this.context.fillStyle = snake.color;
        this.context.fillRect(
          scaledPartX * this.scalingFactor,
          scaledPartY * this.scalingFactor,
          this.scalingFactor,
          this.scalingFactor
        );
      });
    });
  }
}
