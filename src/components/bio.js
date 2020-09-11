// Write your Character component here
import React from "react";
import styled from "styled-components";

const StyledBio = styled.div`
  color: ${(pr) => pr.theme.mainText};
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
