import { WorldModel } from "./WorldModel";
import { Player } from "./Player";

export class GameController {
  private world: WorldModel;
  private player1: Player | null = null;
  private player2: Player | null = null;
  private lastTime: number = 0;

  constructor(world: WorldModel) {
    this.world = world;
  }

  setPlayer1(player: Player): void {
    this.player1 = player;
  }

  setPlayer2(player: Player): void {
    this.player2 = player;
  }

  run(): void {
    const updateFrame = (timestamp: number) => {
      if (!this.lastTime) this.lastTime = timestamp;

      this.player1?.makeTurn();
      this.player2?.makeTurn();

      const elapsedTime = timestamp - this.lastTime;

      if (elapsedTime > 250) {
        this.world.update(1);
        this.lastTime = timestamp;
      }

      requestAnimationFrame(updateFrame);
    };

    requestAnimationFrame(updateFrame);
  }
}
