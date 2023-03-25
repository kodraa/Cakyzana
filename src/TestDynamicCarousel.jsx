import React from "react";
import { SwiperSlide } from "swiper/react";
import CarouselComponent from "./components/globalComponents/CarouselComponent";
import DescriptionCard from "./components/globalComponents/DescriptonCard";
import EngArTitle from "./components/globalComponents/EngArTitle";
import { CONSTANTS } from "./global";

export const classes = [
  {
    id: 1,
    classTitle: "Chocolate Cake Recipe",
    imagesrc: "cake1",
    number: "10",
    classDur: "30",
    descr: " In this class you will learn how to bake a fluffy and moist chocolate cake that lasts if refrigirated.",
  },
  {
    id: 2,
    classTitle: "Chocolate Ganache",
    imagesrc: "cake2",
    number: "10",
    classDur: "30",
    descr: "This workshop includes recipe, crumb coating, sugar coating, bubbles making, coloring rules... ",
  },
  {
    id: 2,
    classTitle: "Chocolate Ganache",
    imagesrc: "cake2",
    number: "10",
    classDur: "30",
    descr: "This workshop includes recipe, crumb coating, sugar coating, bubbles making, coloring rules... ",
  },
  {
    id: 3,
    classTitle: "Sugar Fondant",
    imagesrc: "cake3",
    number: "10",
    classDur: "30",
    descr: " This workshop includes recipe, crumb coating, sugar coating, bubbles making, coloring rules... ",
  },
  {
    id: 3,
    classTitle: "Sugar Fondant",
    imagesrc: "cake3",
    number: "10",
    classDur: "30",
    descr: " This workshop includes recipe, crumb coating, sugar coating, bubbles making, coloring rules... ",
  },
  {
    id: 1,
    classTitle: "Chocolate Cake Recipe",
    imagesrc: "cake1",
    number: "10",
    classDur: "30",
    descr: " In this class you will learn how to bake a fluffy and moist chocolate cake that lasts if refrigirated.",
  },
  {
    id: 2,
    classTitle: "Chocolate Ganache",
    imagesrc: "cake2",
    number: "10",
    classDur: "30",
    descr: "This workshop includes recipe, crumb coating, sugar coating, bubbles making, coloring rules... ",
  },
  {
    id: 2,
    classTitle: "Chocolate Ganache",
    imagesrc: "cake2",
    number: "10",
    classDur: "30",
    descr: "This workshop includes recipe, crumb coating, sugar coating, bubbles making, coloring rules... ",
  },
  {
    id: 3,
    classTitle: "Sugar Fondant",
    imagesrc: "cake3",
    number: "10",
    classDur: "30",
    descr: " This workshop includes recipe, crumb coating, sugar coating, bubbles making, coloring rules... ",
  },
  {
    id: 3,
    classTitle: "Sugar Fondant",
    imagesrc: "cake3",
    number: "10",
    classDur: "30",
    descr: " This workshop includes recipe, crumb coating, sugar coating, bubbles making, coloring rules... ",
  },
];

const mappedElements = classes.map((item) => {
  return (
    <SwiperSlide>
      <DescriptionCard
        key={item.id}
        classTitle={item.classTitle}
        imagesrc={require(`./designAssets/Homepage/Classes/${item.imagesrc}.png`)}
        // imagesrc={pic1}
        // imagesrc={item.imagesrc}
        number={item.number}
        classDur={item.classDur}
        descr={item.descr}
      />      
    </SwiperSlide>
  );
});

function TestDynamicCarousel() {
  const title = (
    <>
      <EngArTitle
        english={"Classes"}
        arabic={"يلا عالصف"}
        bottom={"-50%"}
        right={"-62%"}
        arColor={CONSTANTS.pink}
      />
    </>
  );

  

  return (
    <>
      <CarouselComponent
        title={title}
        mappedElements={mappedElements}
      />
    </>
  );
}

export default TestDynamicCarousel;
