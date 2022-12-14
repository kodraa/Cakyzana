import React from "react";
import Navbar from "../globalComponents/Navbar";
import Footer from "../globalComponents/Footer";
import Section from "../globalComponents/Section";
import ClassesComponent from "./ClassesComponent";

const ClassesPage = (props) => {
  return (
    <Section>
      <Navbar />
        <ClassesComponent/>
    </Section>
    
  );
};

export default ClassesPage;

