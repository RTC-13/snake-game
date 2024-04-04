// import { SnakeController } from "./SnakeController";
// import { AvoidWallsPlayer } from "./AvoidWallsPlayer";
// import { Point } from "./Point";
// import { Direction } from "./Snake";

// // Mock SnakeController for testing
// class MockSnakeController implements SnakeController {
//   // Implement necessary methods or properties used by AvoidWallsPlayer
//   snakeDirection: Direction;
//   snakePosition: Point;
//   worldWidth: number;
//   worldHeight: number;

//   constructor(
//     direction: Direction,
//     position: Point,
//     width: number,
//     height: number
//   ) {
//     this.snakeDirection = direction;
//     this.snakePosition = position;
//     this.worldWidth = width;
//     this.worldHeight = height;
//   }

//   // Implement the methods from SnakeController interface if needed
// }

// describe("Player Class", () => {
//   it("should throw an error when calling abstract method makeTurn() in concrete subclass", () => {
//     // Arrange
//     const mockSnakeController = new MockSnakeController(
//       Direction.Right,
//       new Point(0, 0),
//       10,
//       10
//     );
//     const player = new AvoidWallsPlayer(mockSnakeController);

//     // Act & Assert
//     expect(() => player.makeTurn()).not.toThrowError();
//   });
// });

export {};
