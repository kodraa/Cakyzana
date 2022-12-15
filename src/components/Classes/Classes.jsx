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
      <Category isGrey={true} />
      <TheStars />
      <EntrepreneursJourney />
      <Footer />
    </>
  );
}

export default Classes;
