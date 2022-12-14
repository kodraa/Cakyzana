import React, { useState } from "react";
import styled from "styled-components";
import { CONSTANTS } from "../../../global";
import CardButton from "../../globalComponents/CardButton";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { FaFontAwesome } from "react-icons/fa";

const Card = (props) => {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <CardContainer isGrey={props.isGrey}>
      <CardBody>
        <CardIconDiv>
          {!isLiked ? (
            <FaRegHeart
              size={25}
              style={{ float: "right", }}
              onClick={(prev) => setIsLiked(!isLiked)}
            />
          ) : (
            <FaHeart
              style={{
                color: "red",
                border: "none",
                float: "right",
              }}
              size={25}
              onClick={(prev) => setIsLiked(!isLiked)}
            />
          )}
        </CardIconDiv>

        <CardImage src={props.imagesrc} />
        <CardBodyText>
          <CardTitle classTitle={props.classTitle}>
            {props.classTitle}
          </CardTitle>
          <CardText>
            <p>
              <BoldText>Class Number:</BoldText> 10
            </p>
            <p>
              <BoldText>Approximate Video Duration:</BoldText>
              {props.classDur} mins
            </p>
          </CardText>
          <CardText2 descr={props.descr}><BoldText>Description:</BoldText> {props.descr} </CardText2>
        </CardBodyText>
        <CardButtonDiv>
          <CardButton
            cardBgColor={CONSTANTS.pink}
            btnText="Buy Now"
          ></CardButton>
        </CardButtonDiv>
      </CardBody>
    </CardContainer>
  );
};

export default Card;

const CardContainer = styled.div`
  width: 380px;
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  background-color: ${props => props.isGrey ? CONSTANTS.graywhite : 'white'};
  color: ${CONSTANTS.grayblack};
  margin-bottom: 5rem;
`;

const CardContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CardIconDiv = styled.div`
  width: 100%;
  position: relative;
  top: 30;
  right: 20;
  margin-top: 3rem;
`;

const CardImage = styled.img`
  width: 60%;
  height: fit-content;
  object-fit: contain;
`;

const CardBody = styled.div`
  height: 90%;
  width: 83.5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  transform: translateY(-7%);
`;

const CardBodyText = styled.div`
  width: 100%;
  flex-grow: 0.4;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
`;

const CardTitle = styled.h4`
  font-size: 24px;
  font-weight: 800;
  color: ${CONSTANTS.black};
  text-align: center;
  padding-top: 1.5rem;
`;
const CardText = styled.span`
  font-size: 16px;
  font-weight: 400;
  text-align: center;
  padding-top: 1.5rem;
`;
const BoldText = styled.span`
  font-weight: bold !important;
  text-align: center;
`;
const CardText2 = styled.h6`
  font-size: 16px;
  font-weight: 400;
  text-align: center;
  padding-top: 1.5rem;
`;

const CardButtonDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1.5rem;
`;
