import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components/macro";
import { CONSTANTS } from "../../global";
// import CardButton from "../../globalComponents/CardButton";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { FaFontAwesome } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthContext";
// import { db } from "../../firebase";
import firebase from "firebase/compat/app";

const DescriptionCard = (props) => {
  const [isLiked, setIsLiked] = useState(false);

  const { currentUser, userData, setUserData, userRef } =
    useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (userData?.favClasses) {
      setIsLiked(userData.favClasses.includes(props.id));
    }
  }, [userData]);

  // const [test, setTest] = useState([
  //   {}
  // ]);

  // setTest(prev => [
  //   ...prev,
  //   {}
  // ])

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
          // console.log("favClasses", favClasses);
          if (Array.isArray(favClasses) && favClasses.includes(props.id)) {
            userRef
              .update({
                favClasses: favClasses.filter((id) => id !== props.id),
              })
              .then(() => {
                console.log(`Class ${props.id} removed from favorites`);
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
                  `Error removing class ${props.id} from favorites:`,
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

  // const handleFavorite = () => {
  //   userRef
  //     .update({
  //       favClasses: firebase.firestore.FieldValue.arrayUnion(props.id),
  //     })
  //     .then(() => {
  //       console.log(
  //         `Class ${props.id} added to favorites for user ${userData.id}`
  //       );
  //     })
  //     .then(() => {
  //       setIsLiked(true);
  //     })
  //     .catch((error) => {
  //       console.error(
  //         `Error adding class ${props.id} to favorites for user ${userData.id}:`,
  //         error
  //       );
  //     });
  // };

  // console.log("favClasses", favClasses)

  return (
    <CardContainer isGrey={props.isGrey} isInCarousel={props.isInCarousel}>
      <CardContent>
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
        <CardBody>
          <CardImage src={props.imagesrc} />
          <CardBodyText>
            <CardTitle classTitle={props.classTitle}>
              {props.classTitle}
            </CardTitle>
            <CardText>
              {/* <p>
                <BoldText>Class Number:</BoldText> 10
              </p> */}
              <p>
                <BoldText>Approximate Video Duration: </BoldText>
                {props.classDur}
              </p>
            </CardText>
            <CardText2 descr={props.descr}>
              Description: {props.descr}{" "}
            </CardText2>
          </CardBodyText>
          <CardButtonDiv>
            {/* <CardButton buttonbgcolor={props.buttonbgcolor}>Buy Now</CardButton> */}
            <CardButton buttonbgcolor={props.buttonbgcolor} to={props.to}>
              View More
            </CardButton>
          </CardButtonDiv>
        </CardBody>
      </CardContent>
    </CardContainer>
  );
};

export default DescriptionCard;

// function CardContainer() {

// }

const CardContainer = styled.div`
  /* width: 380px; */
  /* height: 620px; */
  /* height: max(77.02%, 600px); */
  /* height: 77.02%; */

  /* if isInCarousel, height = 85.02% and width = 29.16%, otherwise, height and width = 100% */
  /* height: ${(props) => (!props.isInCarousel ? "85.02%" : "100%")}; */

  height: ${(props) => (!props.isInCarousel ? "85.02%" : "90%")};
  width: ${(props) => (!props.isInCarousel ? "29.16%" : "100%")};

  /* height: 85.02%;
  width: 29.16%; */
  /* width: 100%;  
  height: 100%; */
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  padding-bottom: 10px;
  color: ${CONSTANTS.grayblack};
  background-color: ${(props) =>
    props.isGrey ? CONSTANTS.graywhite : "white"};

  @media (max-width: 768px) {
  }
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
  /* height: 8%; */
  height: 10%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  /* background-color: red; */
`;

const CardImage = styled.div`
  width: 60%;
  aspect-ratio: 0.74 / 1;
  /* object-fit: contain; */
  background: url("${(props) => props.src}") center/contain no-repeat;
`;
// background-size: contain;
// background-image: url(${(props) => props.src});
// /* background-color: red; */
// background-repeat: no-repeat;
// background-position: center;

// background-image: url(${(props) => props.imagesrc});
// const CardImage = styled.img`
//   width: 50%;
//   height: auto;
//   object-fit: contain;
// `;

const CardBody = styled.div`
  height: 90%;
  width: 83.5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  gap: 5%;
  /* transform: translateY(-7%); */
`;

const CardBodyText = styled.div`
  width: 100%;
  flex-grow: 0.4;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.5rem;
`;

const CardTitle = styled.h4`
  font-size: 24px;
  font-weight: 800;
  color: ${CONSTANTS.black};
  text-align: left;
`;
const CardText = styled.span`
  font-size: 1rem;
  font-weight: 400;
  text-align: left;
`;
const BoldText = styled.span`
  font-weight: bold !important;
`;
const CardText2 = styled.h6`
  font-size: 1rem;
  font-weight: 700;
  text-align: left;
`;

const CardButtonDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// const CardButton = styled.button`
//   width: 65%;
//   text-align: center;
//   padding: 2.5%;
//   background-color: ${(props) =>
//     props.buttonbgcolor ? props.buttonbgcolor : CONSTANTS.pink};
//   color: white;
//   border-radius: 32px;
//   border: none;
//   font-size: 18px;
//   cursor: pointer;
//   font-weight: bold;
// `;

const CardButton = styled(Link)`
  text-decoration: none;
  width: 65%;
  text-align: center;
  padding: 2.5%;
  background-color: ${(props) =>
    props.buttonbgcolor ? props.buttonbgcolor : CONSTANTS.pink};
  color: white;
  border-radius: 32px;
  border: none;
  font-size: 18px;
  cursor: pointer;
  font-weight: bold;
  font-family: "Century Gothic Bold";
`;
