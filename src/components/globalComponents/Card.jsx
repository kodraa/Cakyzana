import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components/macro";
import firebase from "firebase/compat/app";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { FaFontAwesome } from "react-icons/fa";
import { Link, redirect, useNavigate } from "react-router-dom";
import { BoldText, CONSTANTS } from "../../global";
import cake from "../../designAssets/Homepage/TheStars/cake5.png";
// import CardButton from "../../globalComponents/CardButton";
import { AuthContext } from "../../AuthContext";

const Card = (props) => {
  const [isLiked, setIsLiked] = useState(false);

  const { currentUser, userData, setUserData, userRef } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (userData?.favClasses) {
      setIsLiked(userData.favClasses.includes(props.id));
    }
  }, [userData]);

  const handleFavorite = () => {
    if (!currentUser) {
      navigate("/login");
      return;
    }

    userRef
      .get()
      .then((doc) => {
        if (doc.exists) {
          const favClasses = doc.data().favClasses;
          console.log("favClasses", favClasses);
          if (Array.isArray(favClasses) && favClasses.includes(props.id)) {
            userRef
              .update({
                favClasses: favClasses.filter((id) => id !== props.id),
              })
              .then(() => {
                console.log(
                  `Class ${props.id} removed from favorites for user ${userData.id}`
                );
                setUserData({
                  ...userData,
                  favClasses: userData.favClasses.filter(
                    (id) => id !== props.id
                  ),
                });
              })
              .then(() => {
                setIsLiked(false);
              })
              .catch((error) => {
                console.error(
                  `Error removing class ${props.id} from favorites for user ${userData.id}:`,
                  error
                );
              });
          } else {
            userRef
              .update({
                favClasses: firebase.firestore.FieldValue.arrayUnion(props.id),
              })
              .then(() => {
                console.log(
                  `Class ${props.id} added to favorites for user ${userData.id}`
                );
                setUserData({
                  ...userData,
                  favClasses: [...userData.favClasses, props.id],
                });
              })
              .then(() => {
                setIsLiked(true);
              })
              .catch((error) => {
                console.error(
                  `Error adding class ${props.id} to favorites for user ${userData.id}:`,
                  error
                );
              });
          }
        } else {
          console.log("No such document!");
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  };

  // console.log("item.imagesrc", props.imagesrc);

  return (
    <CardContainer isGrey={props.isGrey} isInCarousel={props.isInCarousel}>
      <CardBody>
        <CardIconDiv>
          {!isLiked ? (
            <FaRegHeart
              size={25}
              style={{ marginRight: "25px" }}
              onClick={() => handleFavorite()}
            />
          ) : (
            <FaHeart
              style={{
                color: "red",
                border: "none",
                marginRight: "25px",
              }}
              size={25}
              onClick={() => handleFavorite()}
            />
          )}
        </CardIconDiv>

        {/* <CardImage src={cake}></CardImage> */}
        <CardImage src={props.imagesrc}></CardImage>

        <CardTitle>
          <BoldText>{props.classTitle}</BoldText>
        </CardTitle>

        <CardText>
          <BoldText>Class Section: </BoldText>
          <CardText>Decoration</CardText>
        </CardText>
        <CardText>
          <BoldText>Class Duration: </BoldText>
          <CardText>{props.classDur}</CardText>
        </CardText>
        <PriceText>Price: ${props.price}</PriceText>
        <CardButtonDiv>
          <Link style={{ width: "48%" }} to={props.to}>
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
  background-image: url("${(props) => props.src}");
  /* background-color: red; */
  background-repeat: no-repeat;
  background-position: center;
`;

const CardContainer = styled.div`
  /* width: 400px;
  height: 550px; */
  /* flex-basis: 280px; */

  /* height: 85.02%;
  width: 29.16%; */

  height: ${(props) => (!props.isInCarousel ? "85.02%" : "100%")};
  width: ${(props) => (!props.isInCarousel ? "29.16%" : "100%")};

  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  background-color: ${(props) =>
    props.isGrey ? CONSTANTS.graywhite : "white"};
  color: ${CONSTANTS.grayblack};
  transition: all 0.8s ease;

  /* &:hover {
    transform: scale(1.1);
    transition: all 0.8s ease;
  } */
`;

const CardIconDiv = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  /* background-color: red; */
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
