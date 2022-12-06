import React from "react";
import styled from "styled-components";

function EngArTitle(props) {
  return (
    <TitleContainer>
      <EngTitle
        arabic={props.arabic}
        arColor={props.arColor}
        enColor={props.enColor ? props.enColor : "black"}
        bottom={props.bottom}
        right={props.right}
      >
        {props.english}
      </EngTitle>
    </TitleContainer>
  );
}

export default EngArTitle;

const TitleContainer = styled.div`
  color: white;
  height: 12rem;
  width: 100%;
  display: flex;
  align-items: center;
`;

const EngTitle = styled.h2`
  font-size: 2rem;
  font-family: "Century Gothic", sans-serif;
  font-weight: normal;
  position: relative;
  font-size: 50px;
  color: ${(props) => props.enColor};

  &:after {
    content: "${(props) => props.arabic}";
    width: max-content;
    font-size: 2rem;
    font-family: "Dima";
    font-weight: normal;
    font-size: 60px;
    position: absolute;
    bottom: ${(props) => props.bottom};
    right: ${(props) => props.right};
    color: ${(props) => props.arColor};
  }
`;
