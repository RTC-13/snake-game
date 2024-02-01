import "./App.css";
import { useEffect } from "react";
import Display from "./display";
import Displays from "./Displays";
import Car from "./Car";
import Duck from "./Duck";

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
    const duck_one = new Duck("blue", "Wood");
    duck_one.quack(5);
    const duck_two = new Duck("Green", "Mallard");
    duck_two.quack(7);
    const duck_three = new Duck("Yellow", "Another type of whatever duck");
    duck_three.quack(2);
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
