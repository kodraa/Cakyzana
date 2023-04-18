import React, { useContext, useEffect, useState } from "react";
import Navbar from "../components/globalComponents/Navbar";
import styled from "styled-components/macro";
import ClassesLanding from "../designAssets/Classes/Landing/Classes Landing.png";
import { AuthContext } from "../AuthContext";
import { CONSTANTS, FullScreenSection } from "../global";
import YourClasses from "./YourClasses";
import RedeemCode from "./RedeemCode";
import Favourites from "./Favourites";
import EngArTitle from "../components/globalComponents/EngArTitle";
import { db, auth } from "../firebase";
import { useNavigate } from "react-router-dom";

let mappedElements;

function Profile() {
  const { userData } = useContext(AuthContext);
  const [code, setCode] = useState("");
  const navigate = useNavigate();

  const handleRedeemCode = async () => {
    if (code !== "") {
      const codeDoc = await db.collection("Codes").doc(code).get();
      if (codeDoc.exists && codeDoc.data().Redeemed === false) {
        const classId = codeDoc.data().Class;
        const userId = auth.currentUser.uid;
        const classData = await db.collection("Classes").doc(classId).get();
        const videos = classData.data().videos;
        let editedVideos = {};
        for (let i = 0; i < videos.length; i++) {
          // editedVideos = Object.assign(editedVideos, {
          // editedVideos = Object.assign(
          Object.assign(editedVideos, {
            [videos[i]]: { isFinished: false, timeStamps: "0" },
          });
        }

        console.log("editedVideos", ...Object.entries(editedVideos));

        const newEditedVideos = {};

        Object.entries(editedVideos).map((video) => {
          console.log("video", {
            [video[0]]: video[1],
          });

          newEditedVideos[video[0]] = video[1];

          return {
            [video[0]]: video[1],
          };
        });

        // console.log("newEditedVideos", { ...newEditedVideos }?.entries);
        console.log("newEditedVideos", ...Object.entries(newEditedVideos));

        // videos.map((video) => {
        // });
        db.collection("Users")
          .doc(userId)
          .update({
            classes: {
              [classId]: {
                // ...Object.entries(editedVideos),
                // ...newEditedVideos,
              },
            },
          })
          .then(() => {
            db.collection("Codes").doc(code).update({
              Redeemed: true,
              UserRedeemedEmail: auth.currentUser.email,
              DateOfRedeem: new Date(),
            });
          })
          .then(() => navigate(`/watching/${classId}`));
      } else {
        alert("Code does not exist");
      }
    } else {
      throw new Error("Code is empty");
    }
  };

  return (
    <>
      <LandingSection>
        <Navbar isLogoWhite isWhite isCartWhite />
        <LandingBackground src={ClassesLanding} alt="Classes Landing" />
        <ContentContainerWrapper>
          <h1>Hello {userData?.firstName}!</h1>

          <EngArTitle
            english="Redeem Code"
            arabic={"زيدو عندك"}
            enColor={"white"}
            arColor={CONSTANTS.blue}
          />

          <Input
            type="text"
            placeholder="Enter Code.."
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
          <Button onClick={handleRedeemCode}>Redeem</Button>
        </ContentContainerWrapper>
      </LandingSection>

      <YourClasses />
      <Favourites />
      {/* <RedeemCode /> */}
    </>
  );
}

export default Profile;

const LandingSection = styled(FullScreenSection)`
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LandingBackground = styled.img`
  position: absolute;
  height: 100%;
  width: 100%;
  object-fit: 100%;
  z-index: -1;
`;

const ContentContainerWrapper = styled.div`
  width: 50%;
  height: calc(100% - 90px);
  /* height: 100%; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  font-family: "Century Gothic Bold";

  h1 {
    font-size: clamp(2rem, 5vw, 3rem);
    color: ${CONSTANTS.fosfore};
  }
`;

const Input = styled.input`
  width: 100%;
  height: 50px;
  border: none;
  border-radius: 18px;
  padding: 12.5px;
`;

const Button = styled.button`
  width: 40%;
  min-width: fit-content;
  font-family: "Century Gothic Bold";
  color: white;
  font-size: 1.5rem;
  border: none;
  outline: transparent;
  border-radius: 18px;
  padding: 12.5px;
  background-color: ${CONSTANTS.blue};
`;
