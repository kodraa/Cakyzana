import React from "react";
import styled from "styled-components";

function EngArTitle(props) {
  return (
    <TitleContainer >
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
  /* height: 12rem; */
  height: 18vh;
  width: 100%;
  display: flex;
  align-items: center;
  transform: ${(props) => props.isTransformed && "translateY(40px)"};
`;

const EngTitle = styled.h2`
  font-size: 3.125rem;
  font-family: "Century Gothic Bold", sans-serif;
  font-weight: normal;
  position: relative;
  /* border: 1px solid black; */
  /* font-size: 50px; */
  color: ${(props) => props.enColor};

  &:after {
    /* display: none; */
    content: "${(props) => props.arabic}";
    width: max-content;
    font-size: 2.75rem;
    font-family: "Dima";
    font-weight: normal;
    /* font-size: 2.2rem; */
    position: absolute;
    bottom: ${(props) => props.bottom};
    right: ${(props) => props.right};
    color: ${(props) => props.arColor};
  }
`;
