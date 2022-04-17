import "./App.css";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  // if (counter % 2 === 0 ? "even" : "odd") {
  // }
  // const check = (counter) => {
  //   return counter % 2 == 0 ? "even" : "odd";
  // };
  // console.log(check());
  return (
    <div className="App">
      <div className={`${counter % 2 === 0 ? "green" : "red"}`}>
        counter {counter}
      </div>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Asc
      </button>
      <button
        onClick={() => {
          setCounter(counter - 1);
        }}
      >
        Desc
      </button>
      <button
        onClick={() => {
          setCounter(counter * 2);
        }}
      >
        Double
      </button>
    </div>
  );
}

export default App;