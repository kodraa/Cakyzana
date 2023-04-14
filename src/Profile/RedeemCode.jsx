import React, { useState } from "react";
import styled from "styled-components/macro";

// todo add an input to enter the code
// todo check if the code exists in the database
// todo check if the id exists in the classes' collection
// todo check to which class the code points to
// todo check if user has class
// todo add class to user's classes

// todo if user goes to watch video's url, check if he has the class, show the video if he does, else redirect to home pag
import { db, auth } from "../firebase";
import { Navigate } from "react-router-dom";

function RedeemCode() {
  const [code, setCode] = useState("");
  const [showAlert, setShowAlert] = useState(false);

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
          editedVideos = Object.assign(editedVideos, {
            [videos[i]]: { lastWatched: 0, timeStamps: "00:00:00" },
          });
        }

        // const editedVideos = videos.map((video) => {
        //   return [video.]:{
        //     lastWatched: 0,
        //     timeStamps: "00:00:00",

        //   }

        //   ;
        // });

        videos.map((video) => {
          db.collection("Users")
            .doc(userId)
            .update({
              classes: {
                [classId]: {
                  lastWatched: 0,
                  editedVideos,
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
            .then(() => <Navigate to="/watching/`${classId}`" />);
        });
      } else {
        alert("Code does not exist");
      }
    } else {
      throw new Error("Code is empty");
    }
  };

  return (
    <>
      <h1>Redeem Code</h1>
      <InputBox>
        <Details>Enter Code</Details>
        <Input
          type="text"
          name="Code"
          required
          onChange={(e) => setCode(e.target.value)}
        ></Input>
      </InputBox>
      <Button onClick={handleRedeemCode} type="button">
        Redeem
      </Button>
      {showAlert && <Details2>Please Enter Code</Details2>}
    </>
  );
}

export default RedeemCode;

const InputBox = styled.div`
  width: calc(100% / 2 - 20px);
  margin-bottom: 25px;
`;
const Input = styled.input`
  margin-top: 5px;
  height: 45px;
  width: 100%;
  outline: none;
  border-radius: 10px;
  border: 1px solid #fa2d8a;
  padding-left: 15px;
  font-size: 16px;
`;
const Details = styled.span`
  display: block;
  font-size: 20px;
`;
const Button = styled.button`
  position: absolute;
  right: 0%;
  background-color: #fa2d8a;
  border: none;
  border-radius: 18px;
  font-weight: bold;
  width: 22.5%;
  padding: 12.5px;
  color: #fff;
  font-size: 16px;

  &:hover {
    cursor: pointer;
  }
`;
const Details2 = styled.span`
  display: block;
  font-size: 15px;
  color: red;
`;
