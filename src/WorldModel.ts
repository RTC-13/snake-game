import { Snake } from "./Snake";
import { IWorldView } from "./IWorldView";

class WorldModel {
  private _width: number;
  private _height: number;
  private _allSnakes: Snake[];
  private _allViews: IWorldView[];

  constructor(worldWidth: number, worldHeight: number) {
    // keept old parameters due to tests breaking/other problems
    this._width = worldWidth;
    this._height = worldHeight;
    this._allSnakes = [];
    this._allViews = [];
  }

  public update(steps: number): void {
    const collidedSnakes: Snake[] = [];
    this._allSnakes.forEach((snake) => snake.move(steps));
    if (this._allViews) {
      this._allViews.forEach((view) => view.display(this));
    }
    this._allSnakes.forEach((snake) => {
      if (this._allSnakes.some((otherSnake) => snake.didCollide(otherSnake))) {
        collidedSnakes.push(snake);
      }
    });

    // Remove collided snakes from allSnakes array
    collidedSnakes.forEach((snake) => {
      const index = this._allSnakes.indexOf(snake);
      if (index !== -1) {
        this._allSnakes.splice(index, 1);
      }
    });
  }

  public addSnake(s: Snake) {
    this._allSnakes.push(s);
  }

  public addView(v: IWorldView) {
    this._allViews.push(v);
  }

  public get allSnakes(): Snake[] {
    return this._allSnakes;
  }

  public get width(): number {
    return this._width;
  }

  public get height(): number {
    return this._height;
  }
}

export default WorldModel;
