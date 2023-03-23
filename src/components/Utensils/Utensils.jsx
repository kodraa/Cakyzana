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
  const [utensilList, setUtensilList] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getUtensils();
  }, []);

  // useEffect(() => {
  //   setCategories(groupUtensilsByCategory());
  // }, [utensilList]);

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
  function groupUtensilsByCategory(utensilsParameter=[]) {
    console.log("is being groupped");
    const categories = [];
    // utensilList.forEach((utensil) => {
      [...utensilsParameter].forEach((utensil) => {
      const categoryIndex = categories.findIndex(
        (category) => category.Category === utensil.Category
      );
      if (categoryIndex === -1) {
        categories.push({ Category: utensil.Category, items: [utensil] });
      } else {
        categories[categoryIndex].items.push(utensil);
      }
    });
    console.log("categories", categories);
    return categories;
  }

  return (
    <>
      <Navbar isLogoWhite={true} isCartWhite={true} isWhite={true} />
      <Landing />
      <button onClick={() => console.log(utensilList)}>Log UtensilList</button>
      <button onClick={() => console.log(categories)}>Log Categories</button>
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
