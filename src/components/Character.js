// Write your Character component here
import React from "react";
import styled from "styled-components";

const StyledCharacter = styled.div`
  color: ${(pr) => pr.theme.primaryColor};
`;

const Character = (props) => {
  console.log(props, "this is name");
  return (
    <StyledCharacter className="character">
      <h2>{props.characterName}</h2>
    </StyledCharacter>
  );
};

export default Character;
