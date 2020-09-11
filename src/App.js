import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Character from "./components/Character";
import Bio from "./components/bio";

const initialData = [];

function App() {
  const [people, setPeople] = useState(initialData);
  console.log(people.name);
  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/people/1`)
      .then((res) => {
        setPeople(res.data);
      })
      .catch((err) => {
        return console.log("error", err);
      });
  }, []);

  // const country = {};

  return (
    <div className="App">
      <header className="appheader">
        <div>
          <Character characterName={people.name} />
          <Bio
            height={people.height}
            mass={people.mass}
            hair={people.hair_color}
            eye={people.eye_color}
          />
        </div>

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

// const App = () => {
//   // Try to think through what state you'll need for this app before starting. Then build out
//   // the state properties here.

//   // Fetch characters from the API in an effect hook. Remember, anytime you have a
//   // side effect in a component, you want to think about which state and/or props it should
//   // sync up with, if any.

//   return (
//     <div className="App">
//       <h1 className="Header">Characters</h1>
//     </div>
//   );
// }

export default App;
