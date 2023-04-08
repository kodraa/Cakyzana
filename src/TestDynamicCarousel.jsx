import React from "react";
import { SwiperSlide } from "swiper/react";
import CarouselComponent from "./components/globalComponents/CarouselComponent";
import DescriptionCard from "./components/globalComponents/DescriptonCard";
import EngArTitle from "./components/globalComponents/EngArTitle";
import { CONSTANTS } from "./global";
import { highlightedClasses } from "./data/highlightedClasses";
import { classesCategories as classes } from "./data/classes";
import { db } from "./firebase";


// classes.forEach((item) => {
//   console.log("is being added");
//   db.collection("classes")
//     .add(item)
//     .then((docRef) => {
//       console.log("Document written with ID: ", docRef.id);
//     })
//     .catch((error) => {
//       console.error("Error adding document: ", error);
//     });
// });

db.collection("classes").where("category", "==", "Baking").get().then((querySnapshot) => {
  const data = querySnapshot.docs.map((doc) => doc.data());
  console.log(data);
});

const mappedElements = highlightedClasses.map((item) => {
  return (
    <SwiperSlide>
      <DescriptionCard
        isInCarousel={true}
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
      <CarouselComponent isGrey title={title} mappedElements={mappedElements} />
    </>
  );
}

export default TestDynamicCarousel;
