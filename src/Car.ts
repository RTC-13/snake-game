import Engine from "./Engine";
import display from "./display";
// import IDrivable from "./IDrivable";

// place your code on line 5 above the export statement below

/** Class representing a cars. */
class Car {
  private totalMiles: number;
  private color: string;
  private eng: Engine;
  /**
   * Create a car.
   * @param carColor - The color of the Car.
   * @param e - The engine of the Car.
   */
  constructor(carColor: string, e: Engine) {
    this.totalMiles = 0;
    this.color = carColor;
    this.eng = e;
  }
  /**
   * Drives the car for the given number of miles.
   * @param miles - The number of miles to drive the Car.
   */
  public drive(miles: number) {
    display("The", this.color, "car goes VROOOOOOOMMMMMM....");
    this.totalMiles = this.totalMiles + miles;
  }

  /**
   * get the total number of miles driven by Car.
   */
  public get miles() {
    return this.totalMiles;
  }
  /**
   * Set the miles driven by the car.
   */
  set miles(newTotalMiles: number) {
    if (newTotalMiles >= 0) {
      this.totalMiles = newTotalMiles;
    } else {
      display("Disregarding attempt to set miles to negative number");
    }
  }
  set engine(e: Engine) {
    this.eng = e;
  }

  /**
   * Produces string representation of Car
   * @return string representation of Car
   */
  toString() {
    return this.color + "Car that drove" + this.totalMiles;
  }
}

export default Car;
