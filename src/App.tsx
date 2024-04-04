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

export default function App() {
  useEffect(() => {
    // Include your display statements to test below
    document.getElementById("output")!.innerText = "OUTPUT:\n";
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

    const snake = new Snake("Red");
    const world = new WorldModel(snake, 10, 10);
    const snakeController = new SnakeController(world, snake);
    const humanPlayer = new HumanPlayer(
      snakeController,
      new LRKeyInputHandler()
    );
    const avoidWallsPlayer = new AvoidWallsPlayer(snakeController);

    // Create a GameController instance and pass the WorldModel
    const gameController = new GameController(world);

    // Set players in the GameController
    gameController.setPlayer1(humanPlayer);
    gameController.setPlayer2(avoidWallsPlayer); // Adjust this based on your game's logic

    // Run the GameController
    gameController.run();
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
