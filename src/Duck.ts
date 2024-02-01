import display from "./display";
import Quacker from "./Quacker";
// import IQuacker from "./IQuacker";

// place your code on line 5 above the export statement below

/** Class representing a duck. */
class Duck {
  private quacks: number;
  private quackSound: Quacker;
  private duckColor: string;
  /**
   * Create a duck.
   * @param color - the color of the duck.
   * @param duckType - The type of duck.
   */
  constructor(color: string, duckType: string) {
    this.quacks = 0;
    this.quackSound = new Quacker(duckType);
    this.duckColor = color;
  }
  /**
   * Drives the car for the given number of miles.
   * @param numOfQuacks - The number of quacks the duck will quack.
   */
  public quack(numOfQuacks: number) {
    let i = 0;
    while (i < numOfQuacks) {
      this.quackSound.makeNoise(numOfQuacks);
      i++;
    }

    this.quacks = this.quacks + numOfQuacks;
  }
  /**
   * Sets the number of quacks the duck has quacked.
   * @param quackAmount - the number of times the duck will quack.
   */
  public set setQuacks(quackAmount: number) {
    this.setQuacks = quackAmount;
  }

  /**
   * Gets the color of the duck.
   *
   */
  public get color() {
    return this.duckColor;
  }
  /**
   * Gets the number of quacks the duck has quacked.
   * @return number of quacks
   */
  public get getQuacks() {
    return this.quacks;
  }
  /**
   * Produces string representation of Duck.
   * @return string representation of Car
   */
  toString() {
    return this.duckColor + " Duck has quacked " + this.quacks;
  }
}

export default Duck;
