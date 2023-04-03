import React, { useRef, useCallback, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/swiper-bundle.css";
import "swiper/css/hash-navigation";
import { CONSTANTS, BasicContentDiv } from "../../global";
import Navbar from "../globalComponents/Navbar";
import Footer from "../globalComponents/Footer";
import Section from "../globalComponents/Section";
import EngArTitle from "../globalComponents/EngArTitle";
import styled from "styled-components/macro";
import vanillacake from "../../designAssets/ClassCategory/vanillacake.png";
import chocolatecake from "../../designAssets/ClassCategory/chocolatecake.png";
import redvelvet from "../../designAssets/ClassCategory/redvelvet.png";
import darkchocolatecake from "../../designAssets/ClassCategory/darkchocolatecake.png";
import orangecake from "../../designAssets/ClassCategory/orangecake.png";
import lemoncake from "../../designAssets/ClassCategory/lemoncake.png";
import DescriptionCard from "../globalComponents/DescriptonCard";
// import { titles } from "../../data/titles";
import CarouselComponent from "../globalComponents/CarouselComponent";
import { highlightedClasses } from "../../data/highlightedClasses";
import { classesCategories } from "../../data/classes.js";
import ArrowRight from "../../designAssets/Homepage/Classes/ArrowRight.png";
import ArrowLeft from "../../designAssets/Homepage/Classes/ArrowLeft.png";

const titles = {
  Baking: {
    title: (
      <EngArTitle
        english={"Baking"}
        arabic={"طعمة و ريحة ولا أطيب"}
        bottom={"-80%"}
        right={"-150%"}
        height={"100%"}
        arColor={CONSTANTS.pink}
        isTransformed
      />
    ),
    color: CONSTANTS.pink,
  },
  Filling: {
    title: (
      <EngArTitle
        english={"For Filling"}
        arabic={"من برا هالله هالله ومن جوا يعلم الله"}
        bottom={"-60%"}
        right={"-85%"}
        arColor={CONSTANTS.blue}
      />
    ),
    color: CONSTANTS.blue,
  },
  Fondant: {
    title: (
      <EngArTitle
        english={"Fondant"}
        arabic={"بتغمر الكيك غمر"}
        bottom={"-60%"}
        right={"-85%"}
        arColor={CONSTANTS.pink}
      />
    ),
    color: CONSTANTS.pink,
  },
  Ganache: {
    title: (
      <EngArTitle
        english={"Ganache"}
        arabic={"بتغمر الكيك غمر"}
        bottom={"-60%"}
        right={"-85%"}
        arColor={CONSTANTS.pink}
      />
    ),
    color: CONSTANTS.pink,
  },
  ButterCream: {
    title: (
      <EngArTitle
        english={"Butter Cream"}
        arabic={"بتغمر الكيك غمر"}
        bottom={"-60%"}
        right={"-85%"}
        arColor={CONSTANTS.pink}
      />
    ),
    color: CONSTANTS.pink,
  },
  Decoration: {
    title: (
      <EngArTitle
        english={"Decoration"}
        arabic={"جمالو جمال"}
        bottom={"-60%"}
        right={"-85%"}
        arColor={CONSTANTS.blue}
      />
    ),
    color: CONSTANTS.blue,
  },
};

function CategoryComponent(props) {

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  // todo get id from url and get item from db

  const { category } = useParams();
  const capitalizedCategory =
    category.charAt(0).toUpperCase() + category.slice(1);
  const requestedCategory = classesCategories.find(
    (item) => item.classCategory === capitalizedCategory
  );
  const tempClasses = [...requestedCategory.items];
  const newClasses = [];
  while (tempClasses.length > 0) newClasses.push(tempClasses.splice(0, 3));

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
      <Section>
        {/* <EngArTitle
          english={"Baking"}
          arabic={"طعمة و ريحة ولا أطيب"}
          bottom={"-80%"}
          right={"-150%"}
          height={"100%"}
          arColor={CONSTANTS.pink}
          isTransformed
        /> */}
        {/* <ContentDiv>
          <CardWrapper>
            <DescriptionCard
              isGrey={true}
              id="10"
              imagesrc={vanillacake}
              cardBgColor={props.cardBgColor}
              classTitle="Vanilla Cake"
              classSection="Cake Recipes"
              classDur="30 mins"
              descr=" In this class you will learn how to bake a fluffy and moist chocolate cake that lasts 3 days or more if refrigirated.  "
            />
            <DescriptionCard
              isGrey={true}
              id="11"
              imagesrc={redvelvet}
              cardBgColor={props.cardBgColor}
              classTitle="Red Velvet Cake"
              classSection="Cake Recipes"
              classDur="30 mins"
              descr=" In this class you will learn how to bake a fluffy and moist chocolate cake that lasts 3 days or more if refrigirated.  "
            />
            <DescriptionCard
              isGrey={true}
              id="12"
              imagesrc={orangecake}
              cardBgColor={props.cardBgColor}
              classTitle="Orange Cake"
              classSection="Cake Recipes"
              classDur="30 mins"
              descr=" In this class you will learn how to bake a fluffy and moist chocolate cake that lasts 3 days or more if refrigirated.  "
            />
          </CardWrapper>
        </ContentDiv> */}
        {titles[capitalizedCategory].title}
        
        {newClasses.map((item, index) => {
          const row = Math.floor(index / 3);
          const bgColor = row % 2 === 0 ? "white" : CONSTANTS.graywhite;
          return (
            <ContentDiv>
              <CardWrapper>
                {/* <Arrow
                  className="left-arrow"
                  src={ArrowLeft}
                  onClick={handlePrev}
                  // className="left"
                /> */}
                <Swiper
                  className="global-swiper"
                  ref={sliderRef}
                  // spaceBetween={50}
                  // slidesPerView={3}
                  onSlideChange={() => console.log("slide change")}
                  onSwiper={(swiper) => console.log(swiper)}
                  // modules={[Navigation]}
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
                  {item.map((item) => {
                    console.log("item", item);
                    return (
                      <SwiperSlide>
                        <DescriptionCard
                          isInCarousel
                          key={item.id}
                          classTitle={item.title}
                          isGrey
                          // imagesrc={require(`../../designAssets/Homepage/Classes/${item.imagesrc}.png`)}
                          // imagesrc={pic1}
                          // imagesrc={item.imagesrc}
                          classSection={item.classSection}
                          classDur={item.duration}
                          descr={item.description}
                          buttonBgColor={titles[capitalizedCategory].color}
                        />
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
                {/* <Arrow
                  className="right-arrow"
                  onClick={handleNext}
                  src={ArrowRight}
                  // className="right"
                /> */}
              </CardWrapper>
            </ContentDiv>
          );
        })}
      </Section>
    </>
  );
}

export default CategoryComponent;

const ContentDiv = styled(BasicContentDiv)`
  height: calc(100vh - 18vh - 90px);
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

const CardWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

/*const ItemsWrapper=styled.div`
height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`*/

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
