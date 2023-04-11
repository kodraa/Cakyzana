import React, { useState, useEffect } from "react";
import ForCakes from "./ForCakes";
import ForCoverage from "./ForCoverage";
import ForFondants from "./ForFondants";
import ForMeasuring from "./ForMeasuring";
import ForPiping from "./ForPiping";
import Landing from "./Landing";
import Footer from "../globalComponents/Footer";
import Navbar from "../globalComponents/Navbar";
import { CONSTANTS } from "../../global";
import { db } from "../../firebase";
import EngArTitle from "../globalComponents/EngArTitle";
import { SwiperSlide } from "swiper/react";
import { utensils } from "../../data/utensils";
import Card from "../globalComponents/Card";
import CarouselComponent from "../globalComponents/CarouselComponent";
import DescriptionCard from "../globalComponents/DescriptonCard";
import UtensilCard from "../globalComponents/UtensilCard";
import { classesCategories } from "../../data/classes";

// todo swiper in landing,

export const utensilsArray = [
  {
    id: 1,
    name: "Measuring Spoons",
    category: "ForMeasuring",
    image: "ForMeasuring/MeasuringSpoons",
    price: "36 $",
    shape: "Circle",
    material: ["Stainless Steel", "Rubber"],
    Dimensions: [
      "Cup 1: 1*1*1 ~1/4 tbsp.",
      "Cup 2: 1.5*1.5*1.5 ~1/2 tbsp.",
      "Cup 3: 2*2*2 ~3/4 tbsp.",
      "Cup 4: 3*3*3 ~1tbsp.",
    ],
    Packaging: "4pcs/package",
  },
  {
    id: 2,
    name: "Measuring Cups",
    category: "ForMeasuring",
    image: "ForMeasuring/MeasuringCups",
    price: "48 $",
    shape: "Circle",
    material: ["Stainless Steel", "Rubber"],
    Dimensions: [
      "Cup 1: 1*1*1 ~1/4 cup.",
      "Cup 2: 1.5*1.5*1.5 ~1/2 cup.",
      "Cup 3: 2*2*2 ~3/4 cup.",
      "Cup 4: 3*3*3 ~1 cup.",
    ],
    Packaging: "4pcs/package",
  },
  {
    id: 3,
    name: "Cake Ruler",
    category: "ForMeasuring",
    image: "ForMeasuring/CakeRuler",
    price: "23 $",
    shape: "Circle",
    material: ["Plastic"],
    Dimensions: ["Length: 30cm", "Width: 5cm"],
    Packaging: "1pc/package",
  },
  {
    id: 4,
    name: "Modeling Pens Set 1",
    category: "ForFondants",
    image: "ForFondants/ModelingPensSet1",
    price: "15 $",
    shape: "Circle",
    material: ["Stainless Steel"],
    Dimensions: [
      "Cup 1: 1*1*1 ~1/4 tbsp.",
      "Cup 2: 1.5*1.5*1.5 ~1/2 tbsp.",
      "Cup 3: 2*2*2 ~3/4 tbsp.",
      "Cup 4: 3*3*3 ~1tbsp.",
    ],
    Packaging: "4pcs/package",
  },
  {
    id: 5,
    name: "Modeling Pens Set 2",
    category: "ForFondants",
    image: "ForFondants/ModelingPensSet2",
    price: "20 $",
    shape: "Rubber Head",
    material: ["Stainless Steel"],
    Dimensions: [],
    Packaging: "5pcs/package",
  },
  {
    id: 6,
    name: "Modeling Pens Set 3",
    category: "ForFondants",
    image: "ForFondants/ModelingPensSet3",
    price: "16 $",
    shape: "Multiple-Head",
    material: ["Wooden"],
    Dimensions: ["Length: 15cm"],
    Packaging: "4pcs/package",
  },
  {
    id: 7,
    name: "Piping Heads Set 1",
    category: "ForPiping",
    image: "ForPiping/PipingHeadsSet1",
    price: "15 $",
    shape: "Multiple-Head",
    material: ["Stainless Steel"],
    Dimensions: [],
    Packaging: "5pcs/package",
  },
  {
    id: 8,
    name: "Piping Heads Set 2",
    category: "ForPiping",
    image: "ForPiping/PipingHeadsSet2",
    price: "36 $",
    shape: "Multiple-Head",
    material: ["Stainless Steel"],
    Dimensions: [],
    Packaging: "10pcs/package",
  },
  {
    id: 9,
    name: "Piping Bags",
    category: "ForPiping",
    image: "ForPiping/PipingBag",
    price: "18 $",
    shape: "",
    material: [],
    Dimensions: [],
    Packaging: "3pcs/package",
  },
  {
    id: 10,
    name: "Table Turner",
    category: "ForCakes",
    image: "ForCakes/TableTurner",
    price: "105 $",
    shape: "Round",
    material: ["Ceramic"],
    Dimensions: ["Diameter: 30cm", "Height: 5cm"],
    Packaging: "1pc/package",
  },
  {
    id: 11,
    name: "Circle Cake Tray",
    category: "ForCakes",
    image: "ForCakes/CircleCakeTray",
    price: "62 $",
    shape: "Round",
    material: ["Carbon Steel"],
    Dimensions: ["Diameter: 30cm", "Height: 5cm"],
    Packaging: "1pc/package",
  },
  {
    id: 12,
    name: "Square Cake Tray",
    category: "ForCakes",
    image: "ForCakes/SquareCakeTray",
    price: "18 $",
    shape: "Square",
    material: ["Carbon Steel"],
    Dimensions: ["Length: 30cm", "Width: 30cm", "Height: 5cm"],
    Packaging: "3pc/package",
  },
  {
    id: 13,
    name: "Whisk",
    category: "ForCoverage",
    image: "ForCoverage/whisk",
    price: "18 $",
    shape: "Round",
    material: ["Stainless Steel"],
    Dimensions: [],
    Packaging: "1pc/package",
  },
  {
    id: 14,
    name: "Spatula",
    category: "ForCoverage",
    image: "ForCoverage/spatula",
    price: "21 $",
    shape: "Round",
    material: ["Stainless Steel"],
    Dimensions: [],
    Packaging: "1pc/package",
  },
  {
    id: 15,
    name: "Scraper",
    category: "ForCoverage",
    image: "ForCoverage/scraper",
    price: "13 $",
    shape: "Round",
    material: ["Stainless Steel"],
    Dimensions: [],
    Packaging: "1pc/package",
  },
];

const titles = {
  ForCakes: {
    title: (
      <EngArTitle
        english={"For Cakes"}
        arabic={"الشكل تحت السيطرة"}
        bottom={"-75%"}
        right={"-155%"}
        arColor={CONSTANTS.pink}
      />
    ),
    color: CONSTANTS.pink,
  },
  ForCoverage: {
    title: (
      <EngArTitle
        english={"For Coverage"}
        arabic={"متل الكوي والمسح والتعزيل"}
        bottom={"-75%"}
        right={"-155%"}
        arColor={CONSTANTS.blue}
      />
    ),
    color: CONSTANTS.blue,
  },
  ForFondants: {
    title: (
      <EngArTitle
        english={"For Fondants"}
        arabic={"لعجينة السّكر يا سكّر "}
        bottom={"-85%"}
        right={"-110%"}
        arColor={CONSTANTS.blue}
      />
    ),
    color: CONSTANTS.blue,
  },
  ForMeasuring: {
    title: (
      <EngArTitle
        english={"For Measuring"}
        arabic={"عالعيار او بتخبص"}
        bottom={"-60%"}
        right={"-85%"}
        arColor={CONSTANTS.blue}
      />
    ),
    color: CONSTANTS.blue,
  },
  ForPiping: {
    title: (
      <EngArTitle
        english={" For Piping"}
        arabic={"للتزين يا عيني "}
        bottom={"-60%"}
        right={"-85%"}
        arColor={CONSTANTS.purpleSemiActive}
      />
    ),
    color: CONSTANTS.purpleSemiActive,
  },
};

function Utensils() {
  const [utensilList, setUtensilList] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getUtensils();
  }, []);

  const getUtensils = () => {
    const AllUtensils = [];
    setUtensilList(AllUtensils);

    db.collection("utensils")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const utensil = doc.data();
          AllUtensils.push(utensil);
        });
        setUtensilList(AllUtensils);
        console.log("All Utensils", AllUtensils);

        // const categories = groupUtensilsByCategory();
        // setCategories(categories);
      })
      .then(() => {
        setCategories(groupUtensilsByCategory(AllUtensils));
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });
  };

  // console.log(categories);

  // function groupUtensilsByCategory([...utensilsParameter]) {
  function groupUtensilsByCategory(utensilsParameter = []) {
    console.log("is being groupped");
    const categories = [];
    // utensilList.forEach((utensil) => {
    [...utensilsParameter].forEach((utensil) => {
      const categoryIndex = categories.findIndex(
        (category) => category.category === utensil.category
      );
      if (categoryIndex === -1) {
        categories.push({ category: utensil.category, items: [utensil] });
      } else {
        categories[categoryIndex].items.push(utensil);
      }
    });
    console.log("categories", categories);
    return categories;
  }

  // classesCategories.forEach((item) => {
  //     console.log("is being added")
  //   db.collection("classCategories").add(item)
  //     .then((docRef) => {
  //       console.log("Document written with ID: ", docRef.id);
  //     })
  //     .catch((error) => {
  //       console.error("Error adding document: ", error);
  //     });
  // });

  return (
    <>
      <Navbar isLogoWhite={true} isCartWhite={true} isWhite={true} />
      <Landing />
      {/* <Card
          isGrey={props.isGrey}
          id="4"
          src={ModelingPensSet1}
          cardBgColor={props.cardBgColor}
          classTitle="Modeling Pens Set 1"
          Description=" Stainless steel "
          Set="4"
          price="40"
        /> */}
      {categories.map((category, index) => {
        const row = Math.floor(index / 3);
        const bgColor = row % 2 === 0 ? "white" : CONSTANTS.graywhite;
        const flag = index % 2 === 0;
        return (
          <CarouselComponent
            isGrey={flag}
            title={titles[category.category].title}
            mappedElements={category.items.map((utensil) => {
              return (
                <SwiperSlide>
                  <UtensilCard
                    key={utensil.id}
                    id={utensil.id}
                    isGrey={!flag}
                    isInCarousel
                    src={utensil.src}
                    cardBgColor={titles[category.category].color}
                    classTitle={utensil.classTitle}
                    Description={utensil.Description}
                    Set="4"
                    price={utensil.price}
                  />
                  {/* <DescriptionCard
                  isInCarousel
                  key={utensil.id}
                  classTitle={utensil.classTitle}
                  imagesrc={require(`../../designAssets/Homepage/Classes/${classes[0].imagesrc}.png`)}
                  // imagesrc={pic1}
                  // imagesrc={utensil.imagesrc}
                  number={utensil.number}
                  classDur={utensil.classDur}
                  descr={utensil.descr}
                /> */}
                </SwiperSlide>
              );
            })}
          />
        );
      })}

      <Footer />
    </>
  );
}

export default Utensils;

// const fetchUtensilsAndCategories = async () => {
//   await getUtensils();
//   await setCategories(groupUtensilsByCategory());
// }
// fetchUtensilsAndCategories();

// const getUtensils = () => {
//   const AllUtensils = [];
//   setUtensilList(AllUtensils);

//   db.collection("Utensil")
//     .get()
//     .then((querySnapshot) => {
//       querySnapshot.forEach((doc) => {
//         const utensil = doc.data();
//         AllUtensils.push(utensil);
//       });
//       setUtensilList(AllUtensils);
//       console.log(AllUtensils);

//     })
//     .then(() => {
//       setCategories(groupUtensilsByCategory());
//     })
//   return;
// };

// const mappedElements = classes.map((item) => {
//   return (
//     <SwiperSlide>
//       <DescriptionCard
//         key={item.id}
//         classTitle={item.classTitle}
//         imagesrc={require(`./designAssets/Homepage/Classes/${item.imagesrc}.png`)}
//         // imagesrc={pic1}
//         // imagesrc={item.imagesrc}
//         number={item.number}
//         classDur={item.classDur}
//         descr={item.descr}
//       />
//     </SwiperSlide>
//   );
// });
