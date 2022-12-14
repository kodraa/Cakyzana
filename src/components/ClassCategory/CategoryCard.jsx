import React, { useState } from "react";
import styled from "styled-components";
import { CONSTANTS, BasicContentDiv } from "../../global";
import CardButton from "../globalComponents/CardButton";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { FaFontAwesome } from "react-icons/fa";
import { Link } from "react-router-dom";

const Card = (props) => {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <CardContainer isGrey={props.isGrey}>
      <CardBody>
        <CardIconDiv>
          {!isLiked ? (
            <FaRegHeart size={25} style={{ float: "right", marginRight: "25px" }}
              onClick={(prev) => setIsLiked(!isLiked)} />


          ) : (

            <FaHeart
              style={{ color: "red", border: "none", float: "right", marginRight: "25px" }}
              size={25}
              onClick={(prev) => setIsLiked(!isLiked)}
            />
          )}
        </CardIconDiv>
        <CardImage src={props.src} />
        <CardTitle classTitle={props.classTitle}>{props.classTitle}</CardTitle>
        <CardText>
          <BoldText>Class Section:</BoldText>
          <CardText classSection={props.classSection}>{props.classSection}</CardText>
        </CardText>
        <BoldText>Approximate Video Duration:</BoldText>
        <CardText Duration={props.Duration}>{props.Duration}</CardText>
        <CardText>
            <CardTextContent isPadded={props.isPadded}>
              <BoldText>Description:</BoldText> {props.Description}
            </CardTextContent>
        </CardText>
        <CardButtonDiv>
          <Link id={props.id} to={`/classes/${props.id}`}>
            <CardButton cardBgColor={CONSTANTS.pink} btnText="Buy Now"></CardButton>
          </Link>

        </CardButtonDiv>
      </CardBody>
    </CardContainer>
  );
};

export default Card;

const CardText = styled.span`
font-size: 16px;
  font-weight: 400;
  text-align: center;
  padding: 0 7px;
  transition: all 0.5s ease;

  `;
  
  const CardImage = styled.img`
    width: 70%;
    margin: 0 auto;
    height: 40%;
    object-fit: contain;
    transition: all 0.5s ease;

  `;
  
const CardContainer = styled.div`
  width: 350px;
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  background-color: ${props => props.isGrey ? 'white' : CONSTANTS.graywhite};
  color: ${CONSTANTS.grayblack};
  transition: all 0.8s ease;


  &:hover   {
    transform: scale(1.07);
    transition: all 0.7s ease;
    box-shadow: 0px 8px 5px 5px rgba(209,209,209,0.38);
  };

  &:hover ${CardText}{
    transform: scale(1);
    transition: all 0.8s ease;
  };

  
  &:hover ${CardImage}{
    transform: scale(1.07);
    transition: all 0.8s ease;
  };

  
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

const CardTitle = styled.h4`
  font-size: 24px;
  font-weight: 800;
  color: ${CONSTANTS.black};
  text-align: center;
  margin-bottom: 15px;
  margin-top: 15px;
`;

const CardTextContent = styled.p`
  text-align: center;
  max-width: 100%;
  padding: ${props => props.isPadded ? '0 12%' : '0'};
  margin: 0 0 1rem 0;
`;

const BoldText = styled.span`
  font-family: "Century Gothic Bold", sans-serif;
  text-align: center;
`;
const Description = styled.h6`
  font-size: 16px;
  font-weight: 700;
  padding-bottom: 2px;
  padding-top: 2rem;
  margin-right: 1.5rem;
  text-align: center;
  
`;

const CardButtonDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1.5rem;

`;