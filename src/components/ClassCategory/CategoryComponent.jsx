import React from "react";
import { Link } from "react-router-dom";
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
import { SwiperSlide } from "swiper/react";
import { titles } from "../../data/titles";
import CarouselComponent from "../globalComponents/CarouselComponent";
import { highlightedClasses } from "../../data/highlightedClasses";

//import {classesCategories} from "../../data/classes.js"

function CategoryComponent(props) {

  // todo get id from url and get item from db

  return (
    // <Section>
    //   <EngArTitle
    //     english={"Baking"}
    //     arabic={"طعمة و ريحة ولا أطيب"}
    //     bottom={"-80%"}
    //     right={"-150%"}
    //     height={"100%"}
    //     arColor={CONSTANTS.pink}
    //     isTransformed
    //   />
    //   <ContentDiv>
    //     <CardWrapper>
    //       <DescriptionCard
    //         isGrey={true}
    //         id="10"
    //         imagesrc={vanillacake}
    //         cardBgColor={props.cardBgColor}
    //         classTitle="Vanilla Cake"
    //         classSection="Cake Recipes"
    //         classDur="30 mins"
    //         descr=" In this class you will learn how to bake a fluffy and moist chocolate cake that lasts 3 days or more if refrigirated.  "
    //       />
    //       <DescriptionCard
    //         isGrey={true}
    //         id="11"
    //         imagesrc={redvelvet}
    //         cardBgColor={props.cardBgColor}
    //         isPadded={props.isPadded}
    //         classTitle="Red Velvet Cake"
    //         classSection="Cake Recipes"
    //         classDur="30 mins"
    //         descr=" In this class you will learn how to bake a fluffy and moist chocolate cake that lasts 3 days or more if refrigirated.  "
    //       />
    //       <DescriptionCard
    //         isGrey={true}
    //         id="12"
    //         imagesrc={orangecake}
    //         cardBgColor={props.cardBgColor}
    //         classTitle="Orange Cake"
    //         classSection="Cake Recipes"
    //         classDur="30 mins"
    //         descr=" In this class you will learn how to bake a fluffy and moist chocolate cake that lasts 3 days or more if refrigirated.  "
    //       />
    //     </CardWrapper>
    //   </ContentDiv>
    // </Section>
    <>
      {highlightedClasses.map((category) => (
        <CarouselComponent
          isGrey
          title={titles[category.category]}
          mappedElements={category.items.map((utensil) => {
            return (
              <SwiperSlide>
                {/* <UtensilCard
                  isGrey
                  isInCarousel
                  id={utensil.id}
                  src={utensil.src}
                  // cardBgColor={props.cardBgColor}
                  classTitle={utensil.classTitle}
                  Description={utensil.Description}
                  Set="4"
                  price={utensil.price}
                /> */}
                <DescriptionCard
                  isInCarousel
                  key={utensil.id}
                  classTitle={utensil.classTitle}
                  imagesrc={require(`../../designAssets/Homepage/Classes/${classes[0].imagesrc}.png`)}
                  // imagesrc={pic1}
                  // imagesrc={utensil.imagesrc}
                  number={utensil.number}
                  classDur={utensil.classDur}
                  descr={utensil.descr}
                />
              </SwiperSlide>
            );
          })}
        />
      ))}
    </>
  );
}

export default CategoryComponent;

const ContentDiv = styled(BasicContentDiv)`
  height: calc(100vh - 18vh - 90px);
  display: flex;
  align-items: center;
  justify-content: center;
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
