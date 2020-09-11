import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Character from "./components/Character";
import Bio from "./components/bio";
import styled from "styled-components";

const initialData = [];

const StyledApp = styled.div`
  /* background-color: darkgray; */
  width: 80%;
  margin: 0 auto;
`;
function App() {
  const [people, setPeople] = useState(initialData);
  console.log(people, "<------------log this");
  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/people/`)
      .then((res) => {
        console.log(res.data.results);
        setPeople(res.data.results);
      })
      .catch((err) => {
        return console.log("error", err);
      });
  }, []);

  // const country = {};

  return (
    <StyledApp className="App">
      <header className="appheader"></header>
      <div className="body">
        <h1>StarWars Reaction</h1>
        {people.map((character) => {
          return (
            <div>
              <Character characterName={character.name} />
              <div>
                <Bio
                  height={character.height}
                  mass={character.mass}
                  hair={character.hair_color}
                  eye={character.eye_color}
                />
              </div>
            </div>
          );
        })}
      </div>
      <footer>
        <h3>May the force be with you!</h3>
      </footer>
    </StyledApp>
  );
}

export default App;
