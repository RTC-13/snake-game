import IActor from "./IActor";

/**
 * Interface representing a Collidable.
 */
interface ICollidable extends IActor {
  /**
   * Method to check if the collidable object collided with another actor.
   * @param {Actor} other - The other actor to check collision with.
   * @returns {boolean} - True if collisions.
   */
  didCollide(other: IActor): boolean;
}
export default ICollidable;
