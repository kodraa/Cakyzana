import React from "react";
import { CONSTANTS, BasicContentDiv } from "../../../global";
import EngArTitle from "../../globalComponents/EngArTitle";
import Section from "../../globalComponents/Section";
import styled from "styled-components/macro";
import Card from "../../globalComponents/Card";
import { db } from "../../../firebase";
import { SwiperSlide } from "swiper/react";
import CarouselComponent from "../../globalComponents/CarouselComponent";

let mappedElements;
// import Card from "./CardTheStars";
function EducateSection(props) {
  let topClasses = [];

  db.collection("Classes")
    .orderBy("numberSold", "desc")
    .limit(3)
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        topClasses.push({ id: doc.id, ...doc.data() });
      });
      console.log("topClasses", topClasses);
    })
    .then(() => {
      mappedElements = topClasses.map((item) => {
        console.log("item", item);
        return (
          <SwiperSlide>
            {/* <Card
              isGrey
              isInCarousel
              classTitle={item.title}
              classDur={item.duration}
              price={item.price}
            /> */}
            <div
              style={{
                height: "100px",
                width: "100px",
                backgroundColor: "red",
              }}
            ></div>
          </SwiperSlide>
        );
      });
    })
    .catch((error) => {
      console.error(error);
    });
  const title = (
    <EngArTitle
      english={"The Stars"}
      arabic={"محبوبين الجماهير"}
      bottom={"-50%"}
      right={"-75%"}
      arColor={CONSTANTS.blue}
    />
  );
  // TODO: fix the carousel

  mappedElements = [
    <SwiperSlide>
      <Card
        isInCarousel
        classTitle="Canvas Your Cake"
        classDur="75"
        price="40"
      />
    </SwiperSlide>,
    <SwiperSlide>
      <Card isInCarousel classTitle="Crystal Effect" classDur="50" price="25" />
    </SwiperSlide>,
    <SwiperSlide>
      <Card isInCarousel classTitle="Space Effect" classDur="30" price="36" />
    </SwiperSlide>,
  ];

  return (
    <>
      <CarouselComponent isGrey title={title} mappedElements={mappedElements} />
      {/* </Section> */}
    </>
  );
}

export default EducateSection;

const ContentDiv = styled(BasicContentDiv)`
  min-height: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CardWrapper = styled.div`
  min-height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;
