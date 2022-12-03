import React from "react";
import styled from "styled-components";

function EngArTitle(props) {
  const EngTitle = styled.h2`
    font-size: 2rem;
    font-family: "Century Gothic", sans-serif;
    font-weight: normal;
    position: relative;
    font-size: 50px;
    color: ${props.enColor ? props.enColor : "black"};

    &:after {
      content: "${props.arabic}";
      width: max-content;
      font-size: 2rem;
      font-family: "Dima";
      font-weight: normal;
      font-size: 60px;
      position: absolute;
      bottom: ${props.bottom};
      right: ${props.right};
      color: ${props.arColor};
    }
  `;

  return (
    <TitleContainer>
      <EngTitle>{props.english}</EngTitle>
    </TitleContainer>
  );
}

export default EngArTitle;

const TitleContainer = styled.div`
  color: white;
  height: 15rem;
  width: 100%;
  display: flex;
  align-items: center;
`;
