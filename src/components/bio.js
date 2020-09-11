// Write your Character component here
import React from "react";
import styled from "styled-components";

const StyledBio = styled.div`
  color: ${(pr) => pr.theme.secondaryColor};
  display: flex;
  justify-content: center;
  background-color: gray;
  width: 60%;
  margin: 0 auto;
`;

const Bio = (props) => {
  console.log(props, "this is height");
  return (
    <StyledBio className="character">
      <h3>STATS</h3>
      <ul>
        <li>Height:{props.height}</li>
        <li>Weight: {props.mass}</li>
        <li>Hair Color: {props.hair}</li>
        <li>Eye Color: {props.eye}</li>
      </ul>
    </StyledBio>
  );
};

export default Bio;
