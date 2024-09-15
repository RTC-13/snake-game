// import { SnakeController } from "./SnakeController";
// import { Snake, Direction } from "./Snake";
// import WorldModel from "./WorldModel";

// describe("SnakeController Class", () => {
//   let snake: Snake;
//   let world: WorldModel;
//   let snakeController: SnakeController;
//   let initialDirection: Direction;

//   beforeEach(() => {
//     snake = new Snake("Blue");
//     world = new WorldModel(snake, 100, 100);
//     snakeController = new SnakeController(world, snake);
//     initialDirection = snakeController.snakeDirection;
//   });

//   it("should turn the snake left correctly", () => {
//     // Arrange
//     const initialDirection = snakeController.snakeDirection;

//     // Act
//     snakeController.turnSnakeLeft();

//     // Assert
//     expect(snakeController.snakeDirection).toBe(Direction.Up);
//   });

//   it("should turn the snake right correctly", () => {
//     // Arrange
//     const initialDirection = snakeController.snakeDirection;

//     // Act
//     snakeController.turnSnakeRight();

//     // Assert
//     expect(snakeController.snakeDirection).toBe(Direction.Down);
//   });
// });
export {};
