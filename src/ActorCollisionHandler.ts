/**
 * Interface representing a CollisionHandler.
 */
interface ICollisionHandler {
  /**
   * Method to be called when two objects collide.
   */
  applyAction(): void;
}

export default ICollisionHandler;
