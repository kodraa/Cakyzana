import React, { useState } from "react";
import styled from "styled-components";
import { CONSTANTS } from "../../../global";
import cake from "../../../designAssets/Homepage/TheStars/cake5.png";
import CardButton from "../../globalComponents/CardButton";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { FaFontAwesome } from "react-icons/fa";
import { redirect } from "react-router-dom";

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
        <CardImage src={cake} />
        <CardTitle classTitle={props.classTitle}>{props.classTitle}</CardTitle>
        
        <CardText>
          <BoldText>Class Section:</BoldText>
          <CardText>Decoration</CardText>
        </CardText>
        <CardText>
          <BoldText>Class Duration:</BoldText>
          <CardText classDur={props.classDur}>{props.classDur} mins</CardText>
        </CardText>
        <PriceText price={props.price}>Price: {props.price} $</PriceText>
            <CardButtonDiv>
        <CardButton cardBgColor={CONSTANTS.blue} btnText="Buy Now"></CardButton>
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
  transition: all 0.5s ease;
`;


const CardBody = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.8s ease;
`;

const CardImage = styled.img`
  width: "80%";
  margin: 0 auto;
  height: fit-content;
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

const CardIconDiv = styled.div`
  width: 100%;
  position: relative;
  top: 10;
  right: 10;
  margin-top: 2rem
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
  padding-bottom: 7px;
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