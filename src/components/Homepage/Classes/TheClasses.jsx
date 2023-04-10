import React, { useEffect, useState } from "react";
import { CONSTANTS, BasicContentDiv } from "../../../global";
import EngArTitle from "../../globalComponents/EngArTitle";
import Section from "../../globalComponents/Section";
import styled from "styled-components/macro";
import cake1 from "../../../designAssets/Homepage/Classes/cake1.png";
import cake2 from "../../../designAssets/Homepage/Classes/cake2.png";
import cake3 from "../../../designAssets/Homepage/Classes/cake3.png";
import cake4 from "../../../designAssets/Homepage/Classes/cake4.png";
import cake5 from "../../../designAssets/Homepage/Classes/cake5.png";
import ArrowRight from "../../../designAssets/Homepage/Classes/ArrowRight.png";
import ArrowLeft from "../../../designAssets/Homepage/Classes/ArrowLeft.png";
import { highlightedClasses } from "../../../data/highlightedClasses";
import DescriptionCard from "../../globalComponents/DescriptonCard";
import CarouselComponent from "../../globalComponents/CarouselComponent";
import { SwiperSlide } from "swiper/react";
import { db } from "../../../firebase";

let mappedElements;

// todo lessen height and width for hover scale issues, and add auto generated class id to the to attribute
// todo form for booking a seat

function TheClasses() {  
  const classes = [];
  const [classesData, setClassesData] = useState([]);

  useEffect(() => {
    db.collection("Classes")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          classes.push({ id: doc.id, ...doc.data() });
        });
      })
      .then(() => {
        console.log("classes", classes);
        setClassesData(classes);
      })
      .then(() => {
        mappedElements = classes.map((item) => {
          return (
            <SwiperSlide key={item?.id}>
              <DescriptionCard
                isInCarousel
                id={item?.id}
                classTitle={item?.title}
                imagesrc={item?.image}
                // imagesrc={cake1}
                // imagesrc={item??.imagesrc}
                number={2}
                classDur={item?.duration}
                descr={item?.description}
                to={`/singleClass/${item?.id}`}
              />
            </SwiperSlide>
          );
        });
      });
  }, []);  

  const title = (
    <EngArTitle
      english={"Classes"}
      arabic={"يلا عالصف"}
      bottom={"-50%"}
      right={"-62%"}
      arColor={CONSTANTS.pink}
    />
  );

  return (
    <>
      <CarouselComponent isGrey title={title} mappedElements={mappedElements} />
      {/* </Section> */}
    </>
  );
}

export default TheClasses;

const ContentDiv = styled(BasicContentDiv)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Arrow = styled.img`
  width: 25px;
  cursor: pointer;

  &.left {
    left: 0;
  }

  &.right {
    right: 0;
  }
`;

const CardWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

// {/* <Card---
//   classTitle="Chocolate Cake Recipe"
//   imagesrc={cake1}
//   number="10"
//   classDur="30"
//   descr=" In this class you will learn how to bake a fluffy and moist chocolate cake that lasts 3 days or more if refrigirated."
// />
// <Card
//   classTitle="Chocolate Ganache"
//   imagesrc={cake2}
//   number="10"
//   classDur="30"
//   descr="This workshop includes recipe, crumb coating, sugar coating, bubbles making, coloring rules... "
// />
// <Card
//   classTitle="Sugar Fondant"
//   imagesrc={cake3}
//   number="10"
//   classDur="30"
//   descr=" This workshop includes recipe, crumb coating, sugar coating, bubbles making, coloring rules... "
// /> */}
