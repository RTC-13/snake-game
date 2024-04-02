// CatEngine.ts
import { IEngine } from "./IEngine";
import display from "./display";

class CatEngine implements IEngine {
  makeNoise(): void {
    console.log("The engine goes PUUUURRRR....");
  }
}

export default CatEngine;
