import React, { useContext, useEffect, useState } from "react";
import Navbar from "../components/globalComponents/Navbar";
import styled from "styled-components/macro";
import ClassesLanding from "../designAssets/Classes/Landing/Classes Landing.png";
import { AuthContext } from "../AuthContext";
import { db } from "../firebase";
import { CONSTANTS, FullScreenSection } from "../global";
import YourClasses from "./YourClasses";


let mappedElements;

function Profile() {
  const { userData } = useContext(AuthContext);

  console.log(userData?.classes);

  // useEffect(() => {
  //   const classes = userData?.classes;
  //   if (classes) {
  //     const classIds = Object.keys(classes);
  //     console.log(classIds);

  //     const userClasses = [];

  //     classIds.forEach((classId) => {
  //       db.collection("Classes")
  //         .doc(classId)
  //         .get()
  //         .then((classDoc) => {
  //           if (classDoc.exists) {
  //             // Push the class data to the userClasses variable
  //             userClasses.push({ id: classId, ...classDoc.data()});
  //           } else {
  //             console.log("Class document does not exist");
  //           }
  //         })
  //         .then(() => {
  //           // Set the mappedElements variable to the userClasses variable
  //           mappedElements = mappedElements = userClasses.map((item) => {
  //             console.log("item", item.id);
  //             return (
  //               <React.Fragment key={item.id}>
  //                 <SwiperSlide>
  //                   <DescriptionCard
  //                     isInCarousel
  //                     classTitle={item.title}
  //                     // imagesrc={item.image}
  //                     // imagesrc={cake1}
  //                     // imagesrc={item.imagesrc}
  //                     number={2}
  //                     classDur={item.duration}
  //                     descr={item.description}
  //                     to={`/singleClass/${item.id}`}
  //                   />
  //                 </SwiperSlide>
  //               </React.Fragment>
  //             );
  //           });;
  //           console.log("mappedElements", mappedElements);
  //         })
  //         .catch((error) => {
  //           console.log(error);
  //         });
  //     });
  //   }
  // }, [userData?.classes]);

  return (
    <>
      <LandingSection>
        <Navbar isLogoWhite isWhite isCartWhite />
        <LandingBackground src={ClassesLanding} alt="Classes Landing" />
        <ContentContainerWrapper>
          <h1>Hello {userData?.firstName}!</h1>
        </ContentContainerWrapper>
      </LandingSection>
      <YourClasses />
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
  width: 87%;
  height: calc(100% - 90px);
  /* height: 100%; */
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${CONSTANTS.fosfore};
  font-family: "Century Gothic Bold";

  h1 {
    font-size: clamp(2rem, 5vw, 3rem);
  }
`;
