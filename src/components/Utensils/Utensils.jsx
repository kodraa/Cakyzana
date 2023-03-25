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

export const classes = [
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

function Utensils() {
  const [utensilList, setUtensilList] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getUtensils();
  }, []);

  const titles = {
    ForCakes: (
      <EngArTitle
        english={"For Cakes"}
        arabic={"الشكل تحت السيطرة"}
        bottom={"-75%"}
        right={"-155%"}
        arColor={CONSTANTS.pink}
      />
    ),
    ForCoverage: (
      <EngArTitle
        english={"For Coverage"}
        arabic={"متل الكوي والمسح والتعزيل"}
        bottom={"-75%"}
        right={"-155%"}
        arColor={CONSTANTS.blue}
      />
    ),
    ForFondants: (
      <EngArTitle
        english={"For Fondants"}
        arabic={"لعجينة السّكر يا سكّر "}
        bottom={"-85%"}
        right={"-110%"}
        arColor={CONSTANTS.blue}
      />
    ),
    ForMeasuring: (
      <EngArTitle
        english={"For Measuring"}
        arabic={"عالعيار او بتخبص"}
        bottom={"-60%"}
        right={"-85%"}
        arColor={CONSTANTS.blue}
      />
    ),
    ForPiping: (
      <EngArTitle
        english={" For Piping"}
        arabic={"للتزين يا عيني "}
        bottom={"-60%"}
        right={"-85%"}
        arColor={CONSTANTS.pink}
      />
    ),
  };

  const getUtensils = () => {
    const AllUtensils = [];
    setUtensilList(AllUtensils);

    db.collection("fruits")
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

  // utensils.forEach((fruit) => {
  //   db.collection("fruits").add(fruit)
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
      {/* <button onClick={() => console.log(utensilList)}>Log UtensilList</button>
      <button onClick={() => console.log(categories)}>Log Categories</button>
      <ForFondants
        cardBgColor={CONSTANTS.blue}
        isPadded={true}
        data={utensilList}
      />
      <ForPiping cardBgColor={CONSTANTS.pink} isPadded={true} isGrey={true} />
      <ForMeasuring cardBgColor={CONSTANTS.blue} isPadded={true} />
      <ForCakes cardBgColor={CONSTANTS.pink} isPadded={true} isGrey={true} />
      <ForCoverage cardBgColor={CONSTANTS.blue} isPadded={true} /> */}
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
      {categories.map((category) => (
        <CarouselComponent
          isGrey
          title={titles[category.category]}
          mappedElements={category.items.map((utensil) => {
            console.log("utensil", utensil);
            return (
              <SwiperSlide>
                {/* <Card
                isGrey={props.isGrey}
                id={utensil.id}
                src={utensil.src}
                cardBgColor={props.cardBgColor}
                classTitle={utensil.classTitle}
                Description={utensil.Description}
                Set={utensil.Set}
                price={utensil.price}
              /> */}
                {/* <Card                  
                  id="4"                  
                  classTitle="Modeling Pens Set 1"
                  Description=" Stainless steel "
                  Set="4"
                  price="40"
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
