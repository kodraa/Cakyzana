import React, { useCallback, useRef, useState } from "react";
import styled from "styled-components/macro";
import { BasicContentDiv, CONSTANTS } from "../../../global";
import EngArTitle from "../../globalComponents/EngArTitle";
import Section from "../../globalComponents/Section";
import cake1 from "../../../designAssets/Homepage/Classes/cake1.png";
import cake2 from "../../../designAssets/Homepage/Classes/cake2.png";
import cake3 from "../../../designAssets/Homepage/Classes/cake3.png";
import cake4 from "../../../designAssets/Homepage/Classes/cake4.png";
import cake5 from "../../../designAssets/Homepage/Classes/cake5.png";
import ArrowRight from "../../../designAssets/Homepage/Classes/ArrowRight.png";
import ArrowLeft from "../../../designAssets/Homepage/Classes/ArrowLeft.png";
import { highlightedClasses } from "../../../data/highlightedClasses";
import DescriptionCard from "../../globalComponents/DescriptonCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/swiper-bundle.css";
import "swiper/css/hash-navigation";

function TestCarousel() {
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
      <Section isGrey>
        <EngArTitle
          english={"Classes"}
          arabic={"يلا عالصف"}
          bottom={"-50%"}
          right={"-62%"}
          arColor={CONSTANTS.pink}
        />
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
              // TODO breakpoints
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
                480: {
                  slidesPerView: 1,
                  spaceBetween: 30,
                },
                640: {
                  slidesPerView: 2,
                  spaceBetween: 40,
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
              {highlightedClasses.map((item) => {
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
              })}
            </Swiper>
            <div>
              <Arrow
                className="right-arrow"
                onClick={handleNext}
                src={ArrowRight}
                // className="right"
              />
            </div>
          </CardWrapper>
        </ContentDiv>
      </Section>
    </>
  );
}

export default TestCarousel;

const ContentDiv = styled(BasicContentDiv)`
  display: flex;
  align-items: center;
  justify-content: center;

  & .left-arrow, & .right-arrow {
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
// We extend the BasicContentDiv with ContentDiv and add display: flex; align-items: center; to center the content vertically in the section

// function Arrow(props) {
//   const disabeld = props.disabled ? " arrow--disabled" : ""
//   return (
//     <svg
//       onClick={props.onClick}
//       className={`arrow ${
//         props.left ? "arrow--left" : "arrow--right"
//       } ${disabeld}`}
//       xmlns="http://www.w3.org/2000/svg"
//       viewBox="0 0 24 24"
//     >
//       {props.left && (
//         <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
//       )}
//       {!props.left && (
//         <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
//       )}
//     </svg>
//   )
// }
