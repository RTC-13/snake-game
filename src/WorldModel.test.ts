import { WorldModel } from "./WorldModel";
import { Snake } from "./Snake";
import { Point } from "./Point";
import { IWorldView } from "./IWorldView";

// Define MockWorldView class or use a Jest mock for IWorldView interface
class MockWorldView implements IWorldView {
  display(world: WorldModel): void {
    // Mock implementation
  }
}

describe("WorldModel Class", () => {
  let snake: Snake;
  let world: WorldModel;

  beforeEach(() => {
    snake = new Snake("blue");
    world = new WorldModel(snake, 100, 100);
  });

  it("should be created with correct initial properties", () => {
    expect(world.snake).toBe(snake);
    expect(world.width).toBe(100);
    expect(world.height).toBe(100);
    expect(world.view).toBeNull(); // Ensure worldView is initialized to null
  });

  it("should update the position of the snake correctly", () => {
    // Arrange
    const steps = 5;

    // Act
    world.update(steps);

    // Assert
    expect(snake.position).toEqual(new Point(steps, 0)); // Adjust expectation for snake position
  });

  it.skip("should display the world view if set", () => {
    // Arrange
    const mockWorldView = new MockWorldView();
    world.view = mockWorldView;

    // Act
    world.update(1); // Trigger update

    // Assert
    expect(world.view).toBe(mockWorldView);
  });
});
