import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Character from "./components/Character";
import Bio from "./components/bio";
import styled from "styled-components";

const initialData = [];
const StyledApp = styled.div`
  background-color: darkgray;
  width: 80%;
  margin: 0 auto;
`;
function App() {
  const [people, setPeople] = useState(initialData);
  console.log(people.results.name);
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
    <StyledApp className="App">
      <header className="appheader">
      {people.results.map((character) => {
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
      
      
      </header>
    </StyledApp>
  );
}

export default App;
