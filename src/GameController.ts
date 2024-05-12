import { WorldModel } from "./WorldModel";
import { Player } from "./Player";

export class GameController {
  private world: WorldModel;
  private player1: Player | null = null;
  private player2: Player | null = null;

  constructor(world: WorldModel) {
    this.world = world;
    this.player1 = null;
    this.player2 = null;
  }

  public set playerOne(player: Player) {
    this.player1 = player;
  }

  public set playerTwo(player: Player) {
    this.player2 = player;
  }

  run(): void {
    let lastTime = 0;
    const updateFrame = (timestamp: number) => {
      this.player1?.makeTurn();
      this.player2?.makeTurn();
      if (!lastTime) lastTime = timestamp;

      const elapsedTime = timestamp - lastTime;

      if (elapsedTime > 250) {
        this.world.update(1);
        lastTime += 100;
      }

      requestAnimationFrame(updateFrame);
    };

    requestAnimationFrame(updateFrame);
  }
}
