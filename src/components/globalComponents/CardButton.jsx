import React from "react";
import styled from "styled-components";
import { CONSTANTS } from "../../global";

const CardButton = (props) => {
  return (
        <Cardbtn cardBgColor={props.cardBgColor}>{props.btnText}</Cardbtn>
     
  );
};

export default CardButton;



const Cardbtn = styled.button`
  width: 224px;
  text-align: center;
  padding: 10px;
  background-color: ${(props) => props.cardBgColor};
  color: white;
  border-radius: 32px;
  border: none;
  font-size: 18px;
  font-weight: bold;
  margin: 0 auto;
  margin-top: 1rem;
  cursor: pointer;
`;
