import React, { useState, useEffect } from "react";
import Landing from "./Landing";
import EntrepreneursJourney from "../Homepage/EntrepreneursJourney";
import TheStars from "../Homepage/TheStars/TheStars";
import Footer from "../globalComponents/Footer";
import Category from "./Category";
import { db } from "../../firebase";

function Classes() {

  useEffect(() => {
    getClasses();
    setCategories(groupClassesByCategory());

  }, []);

  const [classesList, setClassesList] = useState([]);

  const getClasses = () => {
    const AllClasses = [];
    setClassesList(AllClasses);

    db.collection("Course")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const classes = doc.data();
          AllClasses.push(classes);
        });
        setClassesList(AllClasses);

        console.log(AllClasses);
      })
      .then(() => {

      })
    return;
  }

  const [categories, setCategories] = useState([]);

  const filteredCategories = () => {
    classesList.forEach((classes) => {
      if (!categories.includes(classes.Category)) {
        categories.push(classes.Category);
      }
    });
  };

  function groupClassesByCategory() {
    console.log("is being groupped")
    const categories = [];
    console.log(classesList);
    classesList.forEach(classes => {
      const categoryIndex = categories.findIndex(category => category.Category === classes.Category);
      if (categoryIndex === -1) {
        categories.push({ Category: classes.Category, items: [classes] });
      } else {
        categories[categoryIndex].items.push(classes);
      }
    });
    console.log(categories);
    return categories;
  }

  return (
    <>
      <Landing />
      <Category isGrey />
      <TheStars />
      <EntrepreneursJourney isGrey/>
      <Footer />
    </>
  );
}

export default Classes;
