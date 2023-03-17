import React, { useState } from "react";
import styled from "styled-components";
import { BoldText, CONSTANTS } from "../../global";
import cake from "../../designAssets/Homepage/TheStars/cake5.png";
// import CardButton from "../../globalComponents/CardButton";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { FaFontAwesome } from "react-icons/fa";
import { Link, redirect } from "react-router-dom";

const Card = (props) => {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <CardContainer>
      <CardBody>
        <CardIconDiv>
          {!isLiked ? (
            <FaRegHeart
              size={25}
              style={{ marginRight: "25px" }}
              onClick={() => setIsLiked((prev) => !prev)}
            />
          ) : (
            <FaHeart
              style={{
                color: "red",
                border: "none",
                marginRight: "25px",
              }}
              size={25}
              onClick={() => setIsLiked((prev) => !prev)}
            />
          )}
        </CardIconDiv>

        <CardImage src={cake}></CardImage>

        <CardTitle>
          <BoldText>{props.classTitle}</BoldText>
        </CardTitle>

        <CardText>
          <BoldText>Class Section: </BoldText>
          <CardText>Decoration</CardText>
        </CardText>
        <CardText>
          <BoldText>Class Duration: </BoldText>
          <CardText>{props.classDur} mins</CardText>
        </CardText>
        <PriceText>Price: ${props.price}</PriceText>
        <CardButtonDiv>
          <Link 
          style={{width: "48%"}}
          to="/star">
            <CardButton cardBgColor={CONSTANTS.blue}>View More</CardButton>
          </Link>
        </CardButtonDiv>
      </CardBody>
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
  /* justify-content: space-around; */
  transition: all 0.8s ease;
`;

// const CardImage = styled.img`
//   margin: 0 auto;
//   height: fit-content;
//   object-fit: contain;
// `;

const CardImage = styled.div`
  width: 60%;
  aspect-ratio: 0.74 / 1;
  /* object-fit: contain; */
  background-size: contain;
  background-image: url(${(props) => props.src});
  /* background-color: red; */
  background-repeat: no-repeat;
  background-position: center;
`;

const CardContainer = styled.div`
  /* width: 400px;
  height: 550px; */
  flex-basis: 280px;
  height: 85.02%;
  width: 29.16%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  background-color: ${CONSTANTS.graywhite};
  color: ${CONSTANTS.grayblack};
  transition: all 0.8s ease;

  &:hover {
    transform: scale(1.1);
    transition: all 0.8s ease;
  }
`;

const CardIconDiv = styled.div`
  width: 100%;
  height: 8%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const CardTitle = styled.h4`
  font-size: 1.5rem;
  font-weight: 800;
  color: ${CONSTANTS.black};
  text-align: center;
  margin-bottom: 15px;
  margin-top: 15px;
`;
const CardText = styled.span`
  font-size: 1rem;
  font-weight: 400;
  text-align: center;
  padding-bottom: 7px;
`;

const PriceText = styled.h6`
  font-size: 1rem;
  font-weight: 700;
  /* padding-bottom: 2px; */
  padding-top: 1.5rem;
  text-align: center;
`;

const CardButtonDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1.5rem;
  margin-bottom: 1rem;
`;

const CardButton = styled.button`
  width: 100%;
  /* width: 65%; */
  text-align: center;
  padding: 3%;
  background-color: ${(props) => props.cardBgColor};
  color: white;
  border-radius: 32px;
  border: none;
  font-size: 18px;
  cursor: pointer;
  font-weight: bold;
`;

// const CardButton = styled.button`
//   width: 224px;
//   text-align: center;
//   padding: 10px;
//   background-color: ${(props) => props.cardBgColor};
//   color: white;
//   border-radius: 32px;
//   border: none;
//   font-size: 18px;
//   font-weight: bold;
//   margin: 0 auto;
//   margin-top: 1rem;
//   cursor: pointer;
// `;
