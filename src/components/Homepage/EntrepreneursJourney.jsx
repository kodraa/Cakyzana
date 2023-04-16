import React, { useRef } from "react";
import styled from "styled-components/macro";
import { BasicContentDiv, CONSTANTS } from "../../global";
import EngArTitle from "../globalComponents/EngArTitle";
import Section from "../globalComponents/Section";
import beginner from "../../designAssets/Homepage/EntrepreneursJourney/Track1.png";
import intermediate from "../../designAssets/Homepage/EntrepreneursJourney/Track2.png";
import professional from "../../designAssets/Homepage/EntrepreneursJourney/Track3.png";
import CarouselComponent from "../globalComponents/CarouselComponent";
import { SwiperSlide, Swiper } from "swiper/react";
import ArrowRight from "../../designAssets/Homepage/Classes/ArrowRight.png";
import ArrowLeft from "../../designAssets/Homepage/Classes/ArrowLeft.png";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/swiper-bundle.css";
import "swiper/css/hash-navigation";
import { Link } from "react-router-dom";

function EntrepreneursJourney(props) {

  const sliderRef = useRef();

  const title = (
    <EngArTitle
      english={"Entrepreneurs Journey"}
      arabic={"يلَّا خود أوَّل خطوة"}
      bottom={"-65%"}
      right={"-25%"}
      arColor={CONSTANTS.pink}
    />
  );

  const mappedElements = [
    <SwiperSlide key={"beginner"}>
      <CircularDiv className="left">
        <Image animated src={beginner}></Image>
        <Text>
          <div>
            <p style={{ fontWeight: "bold", fontSize: "25px" }}>
              Beginner Level
            </p>
            <br />
            <p style={{ fontSize: "13.5px" }}>
              <span style={{ fontWeight: "bold" }}>Number of Classes:</span> 12
            </p>
            <p style={{ fontSize: "13.5px" }}>
              <span style={{ fontWeight: "bold" }}>
                Approximate Class Duration:{" "}
              </span>
              30 mins
            </p>
            <br />
            <p style={{ fontSize: "13.5px" }}>
              Description: In this level you will learn about the basics of
              baking, cream making, crumb coating, and decorating a cake.
            </p>
            <br />
            <Button to={"/entrepreneursjourney"}>Take Journey</Button>
          </div>
        </Text>
      </CircularDiv>
    </SwiperSlide>,

    <SwiperSlide key={"intermediate"}>
      <CircularDiv className="middle">
        <Image animated src={intermediate}></Image>
        <Text>
          <div>
            <p style={{ fontWeight: "bold", fontSize: "25px" }}>
              intermediate Level
            </p>
            <br />
            <p style={{ fontSize: "13.5px" }}>
              <span style={{ fontWeight: "bold" }}>Number of Classes:</span> 12
            </p>
            <p style={{ fontSize: "13.5px" }}>
              <span style={{ fontWeight: "bold" }}>
                Approximate Class Duration:{" "}
              </span>
              30 mins
            </p>
            <br />
            <p style={{ fontSize: "13.5px" }}>
              Description: In this level you will learn about the basics of
              baking, cream making, crumb coating, and decorating a cake.
            </p>
            <br />
            <Button to={"/entrepreneursjourney"}>Take Journey</Button>
          </div>
        </Text>
      </CircularDiv>
    </SwiperSlide>,

    <SwiperSlide key={"professional"}>
      <CircularDiv className="right">
        <Image animated src={professional}></Image>
        <Text>
          <div>
            <p style={{ fontWeight: "bold", fontSize: "25px" }}>
              Professional Level
            </p>
            <br />
            <p style={{ fontSize: "13.5px" }}>
              <span style={{ fontWeight: "bold" }}>Number of Classes:</span> 12
            </p>
            <p style={{ fontSize: "13.5px" }}>
              <span style={{ fontWeight: "bold" }}>
                Approximate Class Duration:{" "}
              </span>
              30 mins
            </p>
            <br />
            <p style={{ fontSize: "13.5px" }}>
              Description: In this level you will learn about the basics of
              baking, cream making, crumb coating, and decorating a cake.
            </p>
            <br />
            <Button to={"/entrepreneursjourney"}>Take Journey</Button>
          </div>
        </Text>
      </CircularDiv>
    </SwiperSlide>,
  ];

  return (
    <>
      {/* <Section isGrey={props.isGrey}>
        <EngArTitle
          english={"Entrepreneurs Journey"}
          arabic={"يلَّا خود أوَّل خطوة"}
          bottom={"-65%"}
          right={"-25%"}
          arColor={CONSTANTS.pink}
        />
        <CoreDiv>
          <ContentWrapper>
            <CircularDiv className="left">
              <Image animated src={beginner}></Image>
              <Text>
                <div>
                  <p style={{ fontWeight: "bold", fontSize: "25px" }}>
                    Beginner Level
                  </p>
                  <br />
                  <p style={{ fontSize: "13.5px" }}>
                    <span style={{ fontWeight: "bold" }}>
                      Number of Classes:
                    </span>{" "}
                    12
                  </p>
                  <p style={{ fontSize: "13.5px" }}>
                    <span style={{ fontWeight: "bold" }}>
                      Approximate Class Duration:{" "}
                    </span>
                    30 mins
                  </p>
                  <br />
                  <p style={{ fontSize: "13.5px" }}>
                    Description: In this level you will learn about the basics
                    of baking, cream making, crumb coating, and decorating a
                    cake.
                  </p>
                  <br />
                  <Button>Take Journey</Button>
                </div>
              </Text>
            </CircularDiv>

            <CircularDiv className="middle">
              <Image animated src={intermediate}></Image>
              <Text>
                <div>
                  <p style={{ fontWeight: "bold", fontSize: "25px" }}>
                    intermediate Level
                  </p>
                  <br />
                  <p style={{ fontSize: "13.5px" }}>
                    <span style={{ fontWeight: "bold" }}>
                      Number of Classes:
                    </span>{" "}
                    12
                  </p>
                  <p style={{ fontSize: "13.5px" }}>
                    <span style={{ fontWeight: "bold" }}>
                      Approximate Class Duration:{" "}
                    </span>
                    30 mins
                  </p>
                  <br />
                  <p style={{ fontSize: "13.5px" }}>
                    Description: In this level you will learn about the basics
                    of baking, cream making, crumb coating, and decorating a
                    cake.
                  </p>
                  <br />
                  <Button>Take Journey</Button>
                </div>
              </Text>
            </CircularDiv>

            <CircularDiv className="right">
              <Image animated src={professional}></Image>
              <Text>
                <div>
                  <p style={{ fontWeight: "bold", fontSize: "25px" }}>
                    Professional Level
                  </p>
                  <br />
                  <p style={{ fontSize: "13.5px" }}>
                    <span style={{ fontWeight: "bold" }}>
                      Number of Classes:
                    </span>{" "}
                    12
                  </p>
                  <p style={{ fontSize: "13.5px" }}>
                    <span style={{ fontWeight: "bold" }}>
                      Approximate Class Duration:{" "}
                    </span>
                    30 mins
                  </p>
                  <br />
                  <p style={{ fontSize: "13.5px" }}>
                    Description: In this level you will learn about the basics
                    of baking, cream making, crumb coating, and decorating a
                    cake.
                  </p>
                  <br />
                  <Button>Take Journey</Button>
                </div>
              </Text>
            </CircularDiv>
          </ContentWrapper>
        </CoreDiv>
      </Section> */}

      <Section isGrey={props.isGrey}>
        {/* <EngArTitle
          english={"Classes"}
          arabic={"يلا عالصف"}
          bottom={"-50%"}
          right={"-62%"}
          arColor={CONSTANTS.pink}
        /> */}
        {title}
        <CoreDiv>
          <ContentWrapper>
            <Arrow
              className="left-arrow"
              src={ArrowLeft}
              // onClick={handlePrev}
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
              slidesPerGroup={1}
              // slidesPerView={'auto'}
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
            {/* <button onClick={() => console.log(mappedElements)}>log elements</button> */}
            <Arrow
              className="right-arrow"
              // onClick={handleNext}
              src={ArrowRight}
              // className="right"
            />
          </ContentWrapper>
        </CoreDiv>
      </Section>
    </>
  );
}

export default EntrepreneursJourney;

const ContentWrapper = styled.div`
  /* height: 450px; */
  width: 100%;
  height: 56.5%;
  display: flex;
  justify-content: space-between;
  gap: 4%;
`;

const CoreDiv = styled(BasicContentDiv)`
  display: flex;
  align-items: center;
  width: 100%;
`;

const Image = styled.img`
  display: inline-block;
  width: 80%;
  height: 80%;
  object-fit: contain;
  margin-left: auto;
  margin-right: auto;
  // background-position: 50% 50%;
  // background-size: cover;
  // border-radius: 50%;
`;

const Text = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  color: white;
  width: 70%;
`;

const CircularDiv = styled.div`
  /* height: 450px; */
  /* aspect-ratio: 1 / 1; */
  display: flex;
  flex-basis: 100%;
  height: 100%;
  border-radius: 50%;
  position: relative;
  text-align: center;
  align-items: center;

  &:hover ${Image} {
    transition: 1s ease;
    opacity: 0.3;
    scale: 0.9;
  }

  &.left {
    background-color: ${CONSTANTS.purpleInactive};
  }

  &.middle {
    background-color: ${CONSTANTS.purpleSemiActive};
  }

  &.right {
    background-color: ${CONSTANTS.purpleActive};
  }

  &:not(:hover) ${Image} {
    transition: 1s ease;
  }

  &:hover ${Text} {
    transition: 1s ease;
    opacity: 1;
    cursor: default;
  }

  &:not(:hover) ${Text} {
    transition: 1s ease;
  }
`;

const Button = styled(Link)`
  color: black;
  text-decoration: none;
  background-color: ${CONSTANTS.yellow};
  border: none;
  padding: 5%;
  border-radius: 18px;
  font-weight: bold;
  width: 60%;

  &:hover {
    cursor: pointer;
  }
`;

const Arrow = styled.img`
  width: 25px;
  cursor: pointer;
  align-self: center;

  &.left {
    left: 0;
  }

  &.right {
    right: 0;
  }
`;