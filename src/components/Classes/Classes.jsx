import React from "react";
import Landing from "./Landing";
import EntrepreneursJourney from "../Homepage/EntrepreneursJourney";
import TheStars from "../Homepage/TheStars/TheStars";
import Footer from "../globalComponents/Footer";
import Category from "./Category";

function Classes() {
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
