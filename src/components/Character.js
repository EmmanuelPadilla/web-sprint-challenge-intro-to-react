// Write your Character component here
import React from "react";
import styled from "styled-components";

const StyledCharacter = styled.div`
  color: ${(pr) => pr.theme.primaryColor};
  background-color: gray;
  width: 80%;
  margin: 0 auto;
`;

const Character = (props) => {
  console.log(props, "this is name");
  return (
    <div>
      <StyledCharacter className="character">
        <h2>{props.characterName}</h2>
      </StyledCharacter>
    </div>
  );
};

export default Character;
