import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components/macro";
import { CONSTANTS } from "../../global";
import CardButton from "../globalComponents/CardButton";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { FaFontAwesome } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthContext";
import firebase from "firebase/compat/app";

const UtensilCard = (props) => {
  const [isLiked, setIsLiked] = useState(false);

  const { userData, userRef } = useContext(AuthContext);

  useEffect(() => {
    if (userData?.favUtensils) {
      setIsLiked(userData.favUtensils.includes(props.id));
    }
  }, []);

  const handleFavorite = () => {
    userRef
      .get()
      .then((doc) => {
        if (doc.exists) {
          const favUtensils = doc.data().favUtensils;
          console.log("favUtensils", favUtensils);
          if (Array.isArray(favUtensils) && favUtensils.includes(props.id)) {
            userRef
              .update({
                favUtensils: favUtensils.filter((id) => id !== props.id),
              })
              .then(() => {
                console.log(
                  `Utensil ${props.id} removed from favorites for user ${userData.id}`
                );
              })
              .then(() => {
                setIsLiked(false);
              })
              .catch((error) => {
                console.error(
                  `Error removing utensil ${props.id} from favorites for user ${userData.id}:`,
                  error
                );
              });
          } else {
            userRef
              .update({
                favUtensils: firebase.firestore.FieldValue.arrayUnion(props.id),
              })
              .then(() => {
                console.log(
                  `Utensil ${props.id} added to favorites for user ${userData.id}`
                );
              })
              .then(() => {
                setIsLiked(true);
              })
              .catch((error) => {
                console.error(
                  `Error adding utensil ${props.id} to favorites for user ${userData.id}:`,
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

  return (
    <CardContainer isGrey={props.isGrey} isInCarousel={props.isInCarousel}>
      <CardBody>
        <CardIconDiv>
          {!isLiked ? (
            <FaRegHeart
              size={25}
              style={{ marginRight: "25px" }}
              onClick={() => {
                handleFavorite();
              }}
            />
          ) : (
            <FaHeart
              style={{
                color: "red",
                border: "none",
                marginRight: "25px",
              }}
              size={25}
              onClick={() => {
                handleFavorite();
              }}
            />
          )}
        </CardIconDiv>
        <CardImage src={props.src} />
        <CardTitle classTitle={props.classTitle}>{props.classTitle}</CardTitle>
        <CardText>
          <CardTextContent isPadded={props.isPadded}>
            <BoldText>Description:</BoldText> {props.Description}
          </CardTextContent>
          {/* <BoldText>Description:</BoldText> */}
          {/* <CardText Description={props.Description}>{props.Description} </CardText> */}
        </CardText>
        <CardText>
          <BoldText>Set:</BoldText>
          <CardText Set={props.Set}>{props.Set} pcs</CardText>
        </CardText>
        <PriceText price={props.price}>Price: {props.price} $</PriceText>
        <CardButtonDiv>
          <Link id={props.id} to={`/utensil/${props.id}`}>
            <CardButton
              cardBgColor={props.cardBgColor}
              btnText="View More"
            ></CardButton>
          </Link>
        </CardButtonDiv>
      </CardBody>
    </CardContainer>
  );
};

export default UtensilCard;

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
  /* width: 365px;
  height: 600px; */
  /* height: ${(props) => (!props.isInCarousel ? "85.02%" : "100%")}; */
  /* width: ${(props) => (!props.isInCarousel ? "29.16%" : "100%")}; */
  width: ${(props) => (!props.isInCarousel ? "29.16%" : "95%")};
  height: ${(props) => (!props.isInCarousel ? "85.02%" : "90%")};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  background-color: ${(props) =>
    !props.isGrey ? "white" : CONSTANTS.graywhite};
  color: ${CONSTANTS.grayblack};
  transition: all 0.8s ease;

  /* &:hover {
    transform: scale(1.06);
    transition: all 0.7s ease;
    -webkit-box-shadow: 1px 12px 12px 1px rgba(0, 0, 0, 0.16);
    -moz-box-shadow: 1px 12px 12px 1px rgba(0, 0, 0, 0.16);
    box-shadow: 1px 12px 12px 1px rgba(0, 0, 0, 0.16);
  }

  &:hover ${CardText} {
    transform: scale(1);
    transition: all 0.8s ease;
  }

  &:hover ${CardImage} {
    transform: scale(1.07);
    transition: all 0.8s ease;
  } */
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
  /* height: 8%; */
  height: 10%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  /* background-color: red; */
`;

// const CardIconDiv = styled.div`
//   width: 100%;
//   position: relative;
//   top: 10;
//   right: 10;
//   margin-top: 2rem;
// `;

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
  padding: ${(props) => (props.isPadded ? "0 12%" : "0")};
  margin: 0 0 1rem 0;
`;

const BoldText = styled.span`
  font-family: "Century Gothic Bold", sans-serif;
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
