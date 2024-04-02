import Engine from "./Engine";
import display from "./display";

class StandardEngine extends Engine {
  constructor() {
    super();
  }
  makeNoise(): void {
    display("The engine goes VROOOOOOOMMMMMM....");
  }
}

export default StandardEngine;
