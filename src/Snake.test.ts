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

  it("should move the snake correctly", () => {
    snake.move(3); // Move snake 3 steps
    expect(snake.position).toEqual(new Point(3, 0)); // Snake should move to the right by 3 steps

    snake.turnLeft(); // Turn snake left
    snake.move(2); // Move snake 2 steps after turning left
    expect(snake.position).toEqual(new Point(3, 2)); // Snake should move up by 2 steps after turning left

    snake.turnRight(); // Turn snake right
    snake.move(4); // Move snake 4 steps after turning right
    expect(snake.position).toEqual(new Point(-1, 2)); // Snake should move left by 4 steps after turning right
  });

  it("should turn the snake correctly", () => {
    expect(snake.direction).toBe(Direction.Right);

    snake.turnLeft(); // Turn snake left
    expect(snake.direction).toBe(Direction.Up); // Snake should face up after turning left

    snake.turnRight(); // Turn snake right
    expect(snake.direction).toBe(Direction.Right); // Snake should face right after turning right

    // Test turning when facing other directions
    snake.turnRight(); // Turn snake right
    snake.turnRight(); // Turn snake right again
    expect(snake.direction).toBe(Direction.Left); // Snake should face left after turning right twice
  });

  it("should return correct string representation", () => {
    expect(snake.toString()).toBe("greenis at the position{ x: 0, y: 0 }");
  });
});
