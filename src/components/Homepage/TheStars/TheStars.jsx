import React, { useEffect, useState } from "react";
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
  const [classesData, setClassesData] = useState([]);
  let topClasses = [];

  useEffect(() => {
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
        setClassesData(topClasses);
      })
      .then(() => {
        mappedElements = topClasses.map((item) => {
          console.log("item", item.id);
          return (
            // <SwiperSlide>
            <SwiperSlide key={item?.id}>
              <Card
                isGrey
                isInCarousel
                imagesrc={item?.image}
                classTitle={item?.title}
                classDur={item?.duration}
                price={item?.price}
                to={`/singleClass/${item?.id}`}
              />
            </SwiperSlide>
          );
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

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

  return (
    <>
      <CarouselComponent title={title} mappedElements={mappedElements} />
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
