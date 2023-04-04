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

function TheClasses() {
  const classes = [];
  const [classesData, setClassesData] = useState([]);

  useEffect(() => {
    db.collection("Classes")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          classes.push(doc.data());
        });
      });
    setClassesData(classes);
    console.log(classes);
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

  const mappedElements = classes.map((item) => {
    console.log("item", item);
    return (
      <SwiperSlide>
        <DescriptionCard
          isInCarousel
          key={1}
          classTitle={item.title}
          imagesrc={item.image}
          // imagesrc={pic1}
          // imagesrc={item.imagesrc}
          number={2}
          classDur={item.duration}
          descr={item.description}
        />
      </SwiperSlide>
    );
  });

  // const mappedElements = highlightedClasses.map((item) => {
  //   return (
  //     <SwiperSlide>
  //       <DescriptionCard
  //         key={item.id}
  //         classTitle={item.classTitle}
  //         imagesrc={require(`../../../designAssets/Homepage/Classes/${item.imagesrc}.png`)}
  //         // imagesrc={pic1}
  //         // imagesrc={item.imagesrc}
  //         number={item.number}
  //         classDur={item.classDur}
  //         descr={item.descr}
  //       />
  //     </SwiperSlide>
  //   );
  // });

  return (
    <>
      <button onClick={() => console.log(mappedElements)}>log elements</button>
      <button onClick={() => console.log(classesData)}>log classes</button>
      {/* <ContentDiv>
        <Arrow className="left" src={ArrowLeft} />
        <CardWrapper>
          {highlightedClasses.map((item) => {
            return (
              <DescriptionCard
                key={item.id}
                classTitle={item.classTitle}
                imagesrc={require(`../../../designAssets/Homepage/Classes/${item.imagesrc}.png`)}
                // imagesrc={pic1}
                // imagesrc={item.imagesrc}
                number={item.number}
                classDur={item.classDur}
                descr={item.descr}
              />
            );
          })}
        </CardWrapper>
        <Arrow className="right" src={ArrowRight} />
      </ContentDiv> */}
      {/* TODO: fix the carousel */}
      <CarouselComponent
        title={title}
        //  mappedElements={mappedElements} />
        mappedElements={classesData.map((item) => {
          console.log("item", item);
          return (
            <SwiperSlide>
              <DescriptionCard
                isInCarousel
                key={1}
                classTitle={item.title}
                imagesrc={item.image}
                // imagesrc={pic1}
                // imagesrc={item.imagesrc}
                number={2}
                classDur={item.duration}
                descr={item.description}
              />
            </SwiperSlide>
          );
        })}
      />
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
