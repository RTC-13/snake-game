import { Snake, Direction } from "./Snake";
import { Point } from "./Point";

describe("Snake Class", () => {
  let snake: Snake;

  beforeEach(() => {
    snake = new Snake("green");
  });

  it("should be created with correct initial properties", () => {
    expect(snake.color).toBe("green");
    expect(snake.position).toEqual(new Point(0, 0));
    expect(snake.direction).toBe(Direction.Right);
  });

  it("should move the snake correctly to the right", () => {
    snake.move(3);
    expect(snake.position).toEqual(new Point(3, 0));
  });

  it("should move the snake correctly to the left", () => {
    snake.turnLeft();
    snake.turnLeft();
    snake.move(2);
    expect(snake.position).toEqual(new Point(-2, 0)); // Snake should move to the left by 2 steps
  });

  it("should move the snake correctly upwards", () => {
    snake.turnLeft(); // Turn snake left (facing upwards)
    snake.move(3); // Move snake 3 steps upwards
    expect(snake.position).toEqual(new Point(0, -3));
  });

  it("should move the snake correctly downwards", () => {
    snake.turnRight();
    snake.move(4);
    expect(snake.position).toEqual(new Point(0, 4));
  });

  it("should chain multiple left and right turns correctly", () => {
    snake.turnLeft(); // ^
    snake.turnRight(); // >
    snake.turnRight(); // down
    snake.turnLeft(); // >
    snake.turnLeft(); // up
    snake.move(5);
    expect(snake.position).toEqual(new Point(0, -5));
  });

  it("should return correct string representation", () => {
    expect(snake.toString()).toBe("green is at the position x: 0, y: 0");
  });
});
