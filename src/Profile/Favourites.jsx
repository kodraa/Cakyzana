import React from "react";
import { AuthContext } from "../AuthContext";
import { useContext } from "react";
import { useEffect } from "react";
import { SwiperSlide } from "swiper/react";
import DescriptionCard from "../components/globalComponents/DescriptonCard";
import { useState } from "react";
import { db } from "../firebase";
import firebase from "firebase/compat/app";
import UtensilCard from "../components/globalComponents/UtensilCard";
import CarouselComponent from "../components/globalComponents/CarouselComponent";
import Section from "../components/globalComponents/Section";
import EngArTitle from "../components/globalComponents/EngArTitle";
import { CONSTANTS } from "../global";

// todo description for utensils

let mappedClasses = [];
let mappedUtensils = [];
let favClassesDocs = [];
let favUtensilsDocs = [];
let mappedElements = [];

function Favourites() {
  const { userData } = useContext(AuthContext);
  const [favouritesState, setFavouritesState] = useState([]);
  const [classesState, setClassesState] = useState([]);
  const [utensilsState, setUtensilsState] = useState([]);

  // console.log("userData", userData);

  useEffect(() => {
    const favClasses = userData?.favClasses;
    const favUtensils = userData?.favUtensils;

    function shuffleArrays(arr1, arr2) {
      const newArr = [...arr1, ...arr2];
      for (let i = newArr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
      }
      return newArr;
    }

    if (favClasses && favUtensils) {
      // get all classes with the ids that are in favClasses array
      db.collection("Classes")
        .where(firebase.firestore.FieldPath.documentId(), "in", favClasses)
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            favClassesDocs.push({ id: doc.id, ...doc.data() });
          });
        })
        .then(() => {
          setClassesState(favClassesDocs);
        })
        .then(() => {
          mappedClasses = favClassesDocs?.map((item) => (
            <SwiperSlide key={item.id}>
              <DescriptionCard
                id={item.id}
                isInCarousel
                classTitle={item.title}
                imagesrc={item?.image}
                // imagesrc={item.image}
                // imagesrc={cake1}
                // imagesrc={item.imagesrc}
                number={2}
                classDur={item.duration}
                descr={item.description}
                to={`/singleClass/${item.id}`}
              />
            </SwiperSlide>
          ));
        });

      // get all utensils with the ids that are in favUtensils array
      db.collection("utensils")
        .where(firebase.firestore.FieldPath.documentId(), "in", favUtensils)
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            favUtensilsDocs.push({ id: doc.id, ...doc.data() });
          });
        })
        .then(() => {
          setUtensilsState(favUtensilsDocs);
        })
        .then(() => {
          // use the UtensilCard
          mappedUtensils = favUtensilsDocs?.map((item) => (
            <SwiperSlide key={item.id}>
              <UtensilCard
                key={item?.id}
                id={item?.id}
                // isGrey={!flag}
                isInCarousel
                src={item?.image}
                cardBgColor={CONSTANTS.blue}
                classTitle={item?.classTitle}
                Description={item?.Description}
                Set="4"
                price={item?.price}
              />
            </SwiperSlide>
          ));
        })
        .then(() => {
          mappedElements = shuffleArrays(mappedClasses, mappedUtensils);
          setFavouritesState(mappedElements);
        });

      // console.log("Entered if");
      // const favClassesQuery = db
      //   .collection("favClasses")
      //   .where(firebase.firestore.FieldPath.documentId(), "in", favClasses);
      // const favUtensilsQuery = db
      //   .collection("favUtensils")
      //   .where(firebase.firestore.FieldPath.documentId(), "in", favUtensils);

      // Promise.all([favClassesQuery.get(), favUtensilsQuery.get()])
      //   .then((results) => {
      //     const favClassesDocs = results[0].docs;
      //     const favUtensilsDocs = results[1].docs;
      //     // do something with the documents
      //     console.log("favClassesDocs", favClassesDocs);
      //     console.log("favUtensilsDocs", favUtensilsDocs);
      //   })
      //   .catch((error) => {
      //     console.log(error);
      //   });
    }
  }, [userData]);

  return (
    <>
      <CarouselComponent
        isGrey
        title={
          <EngArTitle
            // todo mahboubin l jamahir
            english={"Favourites"}
            arabic={"محبوبينك"}
            arColor={CONSTANTS.blue}
            bottom={"-50%"}
            right={"-40%"}
          />
        }
        mappedElements={mappedElements}
      />
    </>
  );
}

export default Favourites;
