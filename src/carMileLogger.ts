import Car from "./Car";
import IApplicator from "./IApplicator";
import display from "./display";

/**
 * Car Mile Logger implemented with an Applicator interface.
 *
 */
export default class CarMileLogger implements IApplicator<Car> {
  /**
   *
   * @param c car.
   */
  apply(c: Car) {
    display(c.miles);
  }
}
