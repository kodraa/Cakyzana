import React, { useState } from "react";
import styled from "styled-components";
import { CONSTANTS } from "../../global";
import CardButton from "../globalComponents/CardButton";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { FaFontAwesome } from "react-icons/fa";

const Card = (props) => {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <CardContainer>
      <CardBody>
        <CardIconDiv>
          {!isLiked ? (
            <FaRegHeart size={25} style={{float: "right",marginRight:"25px"}}
            onClick={(prev)=>setIsLiked(!isLiked)} />

           
          ) : (
            
            <FaHeart
            style={{ color: "red", border: "none", float: "right",marginRight:"25px"}}
            size={25}
            onClick={(prev) => setIsLiked(!isLiked)}
          />
          )}
        </CardIconDiv>
        <CardImage src={props.src} />
        <CardTitle classTitle={props.classTitle}>{props.classTitle}</CardTitle>
        <CardText>
          <BoldText>Description:</BoldText>
          <CardText Description={props.Description}>{props.Description} </CardText>
        </CardText>
        <CardText>
          <BoldText>Set:</BoldText>
          <CardText Set={props.Set}>{props.Set} pcs</CardText>
        </CardText>
        <PriceText price={props.price}>Price: {props.price} $</PriceText>
            <CardButtonDiv>
        <CardButton cardBgColor={CONSTANTS.pink} btnText="Buy Now"></CardButton>
        </CardButtonDiv>
      </CardBody>
      <HoverDiv>
        <CardButton cardBgColor={CONSTANTS.blue} btnText="View More"></CardButton>
        </HoverDiv>
    </CardContainer>
  );
};

export default Card;

const HoverDiv = styled.div`
  opacity: 0;
  position: absolute;
  height: 20%;
  z-index: 10;
  transition: all 1s ease;

`;
const CardBody = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CardIconDiv = styled.div`
  width: 100%;
  position: relative;
  top: 10;
  right: 10;
  margin-top: 2rem
`;

const CardImage = styled.img`
  width: "70%";
  margin: 0 auto;
  height: 40%;
  object-fit: contain;
`;
const CardContainer = styled.div`
  width: 400px;
  height: 550px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  background-color: ${CONSTANTS.graywhite};
  color: ${CONSTANTS.grayblack};
  transition: all 0.5s ease;

  &:hover   {
    transform: scale(1.1);
    transition: all 0.5s ease;
  };
  &:hover ${CardBody}{
    opacity: 0.5;
    transition: all 0.8s ease;
  };
  &:hover ${HoverDiv}{
    opacity: 1;
    transition: all 0.8s ease;
  };
`;


const CardTitle = styled.h4`
  font-size: 24px;
  font-weight: 800;
  color: ${CONSTANTS.black};
  text-align: center;
  margin-bottom: 15px;
  margin-top: 15px;
`;
const CardText = styled.span`
  font-size: 16px;
  font-weight: 400;
  text-align: center;
  padding: 0 7px;
`;
const BoldText = styled.span`
  font-weight: bold !important;
  text-align: center;
`;
const PriceText = styled.h6`
  font-size: 16px;
  font-weight: 700;
  padding-bottom: 2px;
  padding-top: 1.5rem;
  text-align: center;
`;

const CardButtonDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1.5rem;
`;