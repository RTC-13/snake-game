import display from "./display";

class Quacker {
  private duckType: string;

  constructor(typeOfDuck: string) {
    this.duckType = typeOfDuck;
  }

  public makeNoise(numberOfQuacks: number) {
    if (this.duckType === "Mallard") {
      display("plfffffff!");
    } else if (this.duckType === "Wood") {
      display("Jeeeeee");
    } else {
      display("Quack!!!");
    }
  }
}

export default Quacker;
