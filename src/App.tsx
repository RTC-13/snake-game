import "./App.css";
import { useEffect } from "react";
import Display from "./display";
import Displays from "./Displays";
import Car from "./Car";
import Duck from "./Duck";
import CatEngine from "./CatEngine";
import CarStore from "./CarStore";
import CarMileLogger from "./carMileLogger";
import { CanvasWorldView } from "./CanvasWorldView";
import { Snake } from "./Snake";
import { WorldModel } from "./WorldModel";
import { SnakeController } from "./SnakeController";
import { HumanPlayer } from "./HumanPlayer";
import { LRKeyInputHandler } from "./LRKeyInputHandler";
import { AvoidWallsPlayer } from "./AvoidWallsPlayer";
import { GameController } from "./GameController";
import display from "./display";

export default function App() {
  useEffect(() => {
    // Include your display statements to test below
    document.getElementById("output")!.innerText = "OUTPUT:\n";
    const snake1 = new Snake("Red");
    const WorldModel1 = new WorldModel(snake1, 10, 10);
    const snakeController = new SnakeController(WorldModel1, snake1);
    const avoidWallsPlayer = new AvoidWallsPlayer(snakeController);
    const canvasWorldView = new CanvasWorldView(25);

    WorldModel1.view = canvasWorldView;
    WorldModel1.update(0);

    const LRKeyInpuHandler = new LRKeyInputHandler();
    const humanPlayer = new HumanPlayer(snakeController, LRKeyInpuHandler);
    const gameController = new GameController(WorldModel1);
    gameController.playerOne = humanPlayer;
    gameController.playerTwo = avoidWallsPlayer;
    gameController.run();
    display(
      "The initial position of the snake:",
      WorldModel1.snake.position.x,
      ",",
      WorldModel1.snake.position.y
    );
    display(WorldModel1.width, WorldModel1.height);
    // display("hey");
    // const redCar = new Car("red");
    // const blueCar = new Car("blue");
    // redCar.drive(40);
    // blueCar.drive(36);
    // redCar.drive(2);
    // display("Red car drove a total of:", redCar.miles, "miles");
    // display("Blue car drove a total of:", blueCar.miles, "miles");
    // redCar.miles = 80;
    // redCar.drive(20);
    // display("MILES", redCar.miles);
    // redCar.miles = -50;
    // const duck_one = new Duck("blue", "Wood");
    // duck_one.quack(5);
    // const duck_two = new Duck("Green", "Mallard");
    // duck_two.quack(7);
    // const duck_three = new Duck("Yellow", "Another type of whatever duck");
    // duck_three.quack(2);
    // const redCar = new Car("red", new CatEngine());
    // const blueCar = new Car("blue", new CatEngine());
    // const greenCar = new Car("green", new CatEngine());
    // const cs = new CarStore([redCar, blueCar, greenCar]);
    // redCar.drive(10);
    // blueCar.drive(20);
    // greenCar.drive(30);
    // cs.applyToAllCars(new CarMileLogger()); // should display 10, then 20, then 30

    // const snake = new Snake("red");
    // const world = new WorldModel(snake, 10, 10);

    // const canvasWorldView = new CanvasWorldView(10);
    // world.view = canvasWorldView;

    // world.update(10);
    // world.snake.turnRight();
    // world.update(10);
    // world.snake.turnRight();
    // world.update(18);
  }, []);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <p>Type the following commands in the terminal:</p>
      <pre>
        ➜ /workspace git:(master) ✗ npm install -g typedoc
        <br />➜ /workspace git:(master) ✗ typedoc --out public/docs src/**.
        {"{ts, tsx}"}
      </pre>
      <p>
        Then visit the <a href="docs/">documentation</a>. Every time you update
        the doc comments, run the second command in the terminal.
      </p>
      <Displays />
    </div>
  );
}
