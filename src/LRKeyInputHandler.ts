import { IInputHandler } from "./IInputHandler";

export class LRKeyInputHandler implements IInputHandler {
  private wasLeftArrowPushed: boolean;
  private wasRightArrowPushed: boolean;

  constructor() {
    this.wasLeftArrowPushed = false;
    this.wasRightArrowPushed = false;
    window.addEventListener("keydown", this.handleKeyDown.bind(this));
  }

  private handleKeyDown(event: KeyboardEvent): void {
    if (event.key === "ArrowLeft") {
      this.wasLeftArrowPushed = true;
    } else if (event.key === "ArrowRight") {
      this.wasRightArrowPushed = true;
    }
  }

  madeLeftMove(): boolean {
    return this.wasLeftArrowPushed;
  }

  resetLeftMove(): void {
    this.wasLeftArrowPushed = false;
  }

  madeRightMove(): boolean {
    return this.wasRightArrowPushed;
  }

  resetRightMove(): void {
    this.wasRightArrowPushed = false;
  }
}
