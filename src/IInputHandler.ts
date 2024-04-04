export interface IInputHandler {
  madeLeftMove(): boolean;
  madeRightMove(): boolean;
  madeLeftMove(): void;
  resetRightMove(): void;
  resetLeftMove(): void;
}
