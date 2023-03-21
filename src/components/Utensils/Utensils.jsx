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

function Utensils() {
  useEffect(() => {
    getUtensils();
  }, []);

  const [utensilList, setUtensilList] = useState([]);

  const getUtensils = () => {
    const AllUtensils = [];
    setUtensilList(AllUtensils);

    db.collection("Utensil")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const utensil = doc.data();
          AllUtensils.push(utensil);
        });
        setUtensilList(AllUtensils);

        // console.log(AllUtensils);

        // console.log("");
      })
      .then(() => {
        filteredCategories();
      })
      .then(() => {
        // console.log(categories);
      });
    return;
  };

  const [categories, setCategories] = useState([]);

  const filteredCategories = () => {
    utensilList.forEach((utensil) => {
      if (categories.includes(utensil.Category) === false) {
        categories.push(utensil.Category);
      }
    });
    console.log(categories);
  };

  return (
    <>
      <Navbar isLogoWhite={true} isCartWhite={true} isWhite={true} />
      <Landing />
      <ForFondants
        cardBgColor={CONSTANTS.blue}
        isPadded={true}
        data={utensilList}
      />
      <ForPiping cardBgColor={CONSTANTS.pink} isPadded={true} isGrey={true} />
      <ForMeasuring cardBgColor={CONSTANTS.blue} isPadded={true} />
      <ForCakes cardBgColor={CONSTANTS.pink} isPadded={true} isGrey={true} />
      <ForCoverage cardBgColor={CONSTANTS.blue} isPadded={true} />
      <Footer />
    </>
  );
}

export default Utensils;
