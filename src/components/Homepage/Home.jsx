import React from "react";
import EntrepreneursJourney from "./EntrepreneursJourney";
import Landing from "./Landing/Landing";
import ThisMonth from "./ThisMonth/ThisMonth";
import Classes from "./Classes/TheClasses";
import TheStars from "./TheStars/TheStars";
import Footer from "../globalComponents/Footer";
import Navbar from "../globalComponents/Navbar";
import SignUp from "../SignUp/SignUp";
import Chatbot from "../globalComponents/Chatbot";

function Home() {
  return (
    <>
      <Navbar
        isHalfWhite
        isLogoWhite
        isCartWhite
        isWhite={window.innerWidth < 768}
      />
      <Landing />
      <ThisMonth />
      <Classes isGrey isWhite />
      <TheStars />
      <EntrepreneursJourney isGrey />
      <Footer />
      <Chatbot />
    </>
  );
}

export default Home;
