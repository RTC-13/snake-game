import WorldModel from "./WorldModel";

export default interface IWorldView {
  display: (worldModel: WorldModel) => void;
}
