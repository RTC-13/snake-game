import Car from "./Car";
import IApplicator from "./IApplicator";

/**
 * Class representing a car store.
 */
class CarStore {
  private allCars: Car[];
  /**
   * Class representing a car store.
   * @param cars List of cars for the new car store.
   */
  constructor(cars: Car[]) {
    this.allCars = cars;
  }
  /**
   * Run a function that applies for all cars.
   * @param f function
   */
  applyToAllCars(f: IApplicator<Car> | ((c: Car) => void)) {
    if (f instanceof Function) {
      this.allCars.forEach(f); // from first question
    } else {
      this.allCars.forEach(f.apply); // IApplicator
    }
  }

  /**
   * Test drive a car using the specific index and the number of miles for the test drive.
   * @param num The index of the car which is being test driven.
   * @param miles The amount of miles recorded during the test drive.
   */
  testDriveCar(num: number, miles: number) {
    this.allCars[num - 1].drive(miles); // 0th car is 1, 1st car is 2, etc.
  }
  /**
   * Sell the car with the specified index.
   * @param num The index of the car being sold.
   */
  sellCarNumber(num: number) {
    this.allCars.splice(num - 1, 1);
  }
  /**
   * Buy a car
   * @param c
   */
  buyCar(c: Car) {
    this.allCars.push(c);
  }
  /**
   * Get the list of cars in the car store.
   *
   */
  get cars(): Car[] {
    return this.allCars; // may want to use iterator instead to avoid exposing Array, which can be modified
    // return this.allCars.slice(); // Alternatively, return shallow copy of Array (if there should be order)
  }
}

export default CarStore;
