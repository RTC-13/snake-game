import display from "./display";
// import IDrivable from "./IDrivable";

// place your code on line 5 above the export statement below

/** Class representing a car. */
class Car {
  private totalMiles: number;
  private color: string;
  /**
   * Create a car.
   * @param carColor - The color of the Car.
   */
  constructor(carColor: string) {
    this.totalMiles = 0;
    this.color = carColor;
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
   * total number of miles driven by Car
   */
  public get miles() {
    return this.totalMiles;
  }
  set miles(newTotalMiles: number) {
    if (newTotalMiles >= 0) {
      this.totalMiles = newTotalMiles;
    } else {
      display("Disregarding attempt to set miles to negative number");
    }
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
