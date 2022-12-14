import React from "react";
import { Link } from "react-router-dom";
import { CONSTANTS } from "../../global";
import Navbar from "../globalComponents/Navbar";
import Footer from "../globalComponents/Footer";
import Section from "../globalComponents/Section";
import EngArTitle from "../globalComponents/EngArTitle";
import styled from "styled-components";
import TheClasses from "../Homepage/Classes/TheClasses";
import Card from "../Homepage/Classes/Card";
import cake1 from "../../designAssets/Homepage/Classes/pic5.png";
import {classesCategories} from "../../data/classes.js"


const categorycomponent = (props) => {

    const [classes, setClasses] = React.useState(classescategories[0].items);
    



  return (
      <SectionContainer>
        <EngArTitle
        style={{width:"80% !important"}}
          english={"Baking"}
          arabic={"طعمة و ريحة ولا أطيب"}
          bottom={"-75%"}
          right={"-100%"}
          arColor={CONSTANTS.pink}
        />
        <CardsContainer>
            
        {classes?.map((item, index) => 
                <Card
                isGrey
                key={index}
                classTitle={item.title}
                imagesrc={require(`../../designAssets/Homepage/Classes/pic5.png`)}
                number={item.classSection}
                classDur={item.Duration}
                descr={item.Description}
                />
            )
        }
            
        
        </CardsContainer>
      </SectionContainer>
    
  );
};

export default categorycomponent;

const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;
    margin: auto;
    margin-top: 5%;
`;

const CardsContainer=styled.div`
 display: flex;
  flex-direction: row; 
  flex-wrap: wrap;
   justify-content: space-evenly;
  width: 100%;
  gap: 1rem;
`;