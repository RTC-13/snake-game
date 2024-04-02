import { WorldModel } from "./WorldModel";

export interface IWorldView {
  display: (worldModel: WorldModel) => void;
}
