import React, { useCallback, useRef, useState } from "react";
import styled from "styled-components/macro";
import { BasicContentDiv, CONSTANTS } from "../../global";
import EngArTitle from "./EngArTitle";
import Section from "./Section";
import cake1 from "../../designAssets/Homepage/Classes/cake1.png";
import cake2 from "../../designAssets/Homepage/Classes/cake2.png";
import cake3 from "../../designAssets/Homepage/Classes/cake3.png";
import cake4 from "../../designAssets/Homepage/Classes/cake4.png";
import cake5 from "../../designAssets/Homepage/Classes/cake5.png";
import ArrowRight from "../../designAssets/Homepage/Classes/ArrowRight.png";
import ArrowLeft from "../../designAssets/Homepage/Classes/ArrowLeft.png";
// import { highlightedClasses } from "../../data/highlightedClasses";
import DescriptionCard from "./DescriptonCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/swiper-bundle.css";
import "swiper/css/hash-navigation";

const highlightedClasses = [
  {
    id: 1,
    classTitle: "Chocolate Cake Recipe",
    imagesrc: "cake1",
    number: "10",
    classDur: "30",
    descr:
      " In this class you will learn how to bake a fluffy and moist chocolate cake that lasts if refrigirated.",
  },
  {
    id: 2,
    classTitle: "Chocolate Ganache",
    imagesrc: "cake2",
    number: "10",
    classDur: "30",
    descr:
      "This workshop includes recipe, crumb coating, sugar coating, bubbles making, coloring rules... ",
  },
  {
    id: 3,
    classTitle: "Sugar Fondant",
    imagesrc: "cake3",
    number: "10",
    classDur: "30",
    descr:
      " This workshop includes recipe, crumb coating, sugar coating, bubbles making, coloring rules... ",
  },
  {
    id: 1,
    classTitle: "Chocolate Cake Recipe",
    imagesrc: "cake1",
    number: "10",
    classDur: "30",
    descr:
      " In this class you will learn how to bake a fluffy and moist chocolate cake that lasts if refrigirated.",
  },
  {
    id: 2,
    classTitle: "Chocolate Ganache",
    imagesrc: "cake2",
    number: "10",
    classDur: "30",
    descr:
      "This workshop includes recipe, crumb coating, sugar coating, bubbles making, coloring rules... ",
  },
  {
    id: 3,
    classTitle: "Sugar Fondant",
    imagesrc: "cake3",
    number: "10",
    classDur: "30",
    descr:
      " This workshop includes recipe, crumb coating, sugar coating, bubbles making, coloring rules... ",
  },
  {
    id: 1,
    classTitle: "Chocolate Cake Recipe",
    imagesrc: "cake1",
    number: "10",
    classDur: "30",
    descr:
      " In this class you will learn how to bake a fluffy and moist chocolate cake that lasts if refrigirated.",
  },
  {
    id: 2,
    classTitle: "Chocolate Ganache",
    imagesrc: "cake2",
    number: "10",
    classDur: "30",
    descr:
      "This workshop includes recipe, crumb coating, sugar coating, bubbles making, coloring rules... ",
  },
  {
    id: 3,
    classTitle: "Sugar Fondant",
    imagesrc: "cake3",
    number: "10",
    classDur: "30",
    descr:
      " This workshop includes recipe, crumb coating, sugar coating, bubbles making, coloring rules... ",
  },
  {
    id: 3,
    classTitle: "Sugar Fondant",
    imagesrc: "cake3",
    number: "10",
    classDur: "30",
    descr:
      " This workshop includes recipe, crumb coating, sugar coating, bubbles making, coloring rules... ",
  },
];

function MultipleRowComponent({ title, mappedElements }) {
  const tempClasses = [...highlightedClasses];

  const newClasses = [];

  while (tempClasses.length > 0) newClasses.push(tempClasses.splice(0, 3));

  console.log(newClasses);

  return (
    <>
      <Section isGrey>
        <EngArTitle
          english={"Classes"}
          arabic={"يلا عالصف"}
          bottom={"-50%"}
          right={"-62%"}
          arColor={CONSTANTS.pink}
        />

        {/* map over newClasses */}
        {newClasses.map((item, index) => {
          const row = Math.floor(index / 3);
          const bgColor = row % 2 === 0 ? "white" : CONSTANTS.graywhite;
          return (
            <ContentDiv>
              <CardWrapper>
                {item.map((item) => {
                  return (
                    <DescriptionCard
                      key={item.id}
                      classTitle={item.classTitle}
                      imagesrc={require(`../../designAssets/Homepage/Classes/${item.imagesrc}.png`)}
                      // imagesrc={pic1}
                      // imagesrc={item.imagesrc}
                      number={item.number}
                      classDur={item.classDur}
                      descr={item.descr}
                    />
                  );
                })}
              </CardWrapper>
            </ContentDiv>
          );
        })}

        {/* <ContentDiv>
        <CardWrapper>
          {highlightedClasses.map((item) => {
            return (
              <DescriptionCard
                key={item.id}
                classTitle={item.classTitle}
                imagesrc={require(`../../designAssets/Homepage/Classes/${item.imagesrc}.png`)}
                // imagesrc={pic1}
                // imagesrc={item.imagesrc}
                number={item.number}
                classDur={item.classDur}
                descr={item.descr}
              />
            );
          })}
        </CardWrapper>                
      </ContentDiv> */}
      </Section>
    </>
  );
}

export default MultipleRowComponent;

const ContentDiv = styled(BasicContentDiv)`
  display: flex;
  height: 82vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  `;

const CardWrapper = styled.div`
background-color: red;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  /* background-color: blue; */
`;

// background-color: ${props => props.isGrey ? CONSTANTS.graywhite : 'transparent'};

{
  /* <ContentDiv>
        <CardWrapper>
          {highlightedClasses.map((item) => {
            return (
              <DescriptionCard
                key={item.id}
                classTitle={item.classTitle}
                imagesrc={require(`../../designAssets/Homepage/Classes/${item.imagesrc}.png`)}
                // imagesrc={pic1}
                // imagesrc={item.imagesrc}
                number={item.number}
                classDur={item.classDur}
                descr={item.descr}
              />
            );
          })}
        </CardWrapper>                
      </ContentDiv> */
}
