import display from "./display";

export default class Engine {
  constructor() {
    // nothing to do now: type is not needed
  }
  public makeNoise(): void {
    display("The engine makes some unspecified sound.");
  }
}
