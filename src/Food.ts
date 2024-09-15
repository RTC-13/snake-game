import { Point } from "./Point";
import IActor from "./IActor";

/**
 * Class representing a Food.
 */
class Food implements IActor {
  private currentPosition: Point;
  private isCurrentlyActive: boolean;

  /**
   * Create a new Food object.
   * @param {number} x - The x-coordinate of the food.
   * @param {number} y - The y-coordinate of the food.
   */
  constructor(x: number, y: number) {
    this.currentPosition = new Point(x, y);
    this.isCurrentlyActive = true;
  }

  /**
   * Method to "eat" the food, making it inactive.
   */
  public eat(): void {
    this.isCurrentlyActive = false;
  }

  /**
   * Getter for the position of the food.
   * @returns {Point} - The position of the food.
   */
  public get position(): Point {
    return this.currentPosition;
  }

  /**
   * Getter for the active state of the food.
   * @returns {boolean} - True if the food is currently active, false otherwise.
   */
  public get isActive(): boolean {
    return this.isCurrentlyActive;
  }

  /**
   * Getter for the type of the actor.
   * @returns {string} - The type of the actor.
   */
  public get type(): string {
    return "food";
  }

  /**
   * Update method for the food
   */
  public update(): void {
    // Directed to be blank
  }
}

export { Food };
