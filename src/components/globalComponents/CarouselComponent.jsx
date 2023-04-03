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
import { highlightedClasses } from "../../data/highlightedClasses";
import DescriptionCard from "./DescriptonCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/swiper-bundle.css";
import "swiper/css/hash-navigation";

function CarouselComponent({ title, mappedElements, isGrey }) {
  const sliderRef = useRef(null);
  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  return (
    <>
      <Section isGrey={isGrey}>
        {/* <EngArTitle
          english={"Classes"}
          arabic={"يلا عالصف"}
          bottom={"-50%"}
          right={"-62%"}
          arColor={CONSTANTS.pink}
        /> */}
        {title}
        <ContentDiv>
          <CardWrapper>
            <Arrow
              className="left-arrow"
              src={ArrowLeft}
              onClick={handlePrev}
              // className="left"
            />
            <Swiper
              className="global-swiper"
              ref={sliderRef}
              // spaceBetween={50}
              // slidesPerView={3}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
              modules={[Navigation]}
              navigation={{
                nextEl: ".right-arrow",
                prevEl: ".left-arrow",
                clickable: true,
              }}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                640: {
                  slidesPerView: 2,
                  spaceBetween: 50,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 50,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 50,
                },
              }}
            >
              {/* {highlightedClasses.map((item) => {
                return (
                  <SwiperSlide>
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
                  </SwiperSlide>
                );
              })} */}
              {mappedElements}
            </Swiper>
            <Arrow
              className="right-arrow"
              onClick={handleNext}
              src={ArrowRight}
              // className="right"
            />
          </CardWrapper>
        </ContentDiv>
      </Section>
    </>
  );
}

export default CarouselComponent;

const ContentDiv = styled(BasicContentDiv)`
  display: flex;
  align-items: center;
  justify-content: center;

  & .left-arrow,
  & .right-arrow {
    width: 25px;
    cursor: pointer;
  }

  & .global-swiper {
    height: 85.02%;
    /* background-color: red; */
  }
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
  gap: 0.5rem;

  h2 {
    background-color: red;
    width: 30%;
  }
  /* background-color: blue; */
`;
