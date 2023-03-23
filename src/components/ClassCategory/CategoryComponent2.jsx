import React from "react";
import { Link } from "react-router-dom";
import { CONSTANTS, BasicContentDiv } from "../../global";
import Navbar from "../globalComponents/Navbar";
import Footer from "../globalComponents/Footer";
import Section from "../globalComponents/Section";
import EngArTitle from "../globalComponents/EngArTitle";
import styled from "styled-components/macro";
import vanillacake from "../../designAssets/ClassCategory/vanillacake.png";
import chocolatecake from "../../designAssets/ClassCategory/chocolatecake.png";
import redvelvet from "../../designAssets/ClassCategory/redvelvet.png";
import darkchocolatecake from "../../designAssets/ClassCategory/darkchocolatecake.png";
import orangecake from "../../designAssets/ClassCategory/orangecake.png";
import lemoncake from "../../designAssets/ClassCategory/lemoncake.png";
import Card from "./CategoryCard";

//import {classesCategories} from "../../data/classes.js"

function CategoryComponent2(props) {


    return (
        <ContentDiv isGrey={props.isGrey}>
                <ContentDiv>
                    
                <Card
                    isGrey={props.isGrey}
                    id="10"
                    src={lemoncake}
                    cardBgColor={props.cardBgColor}
                    classTitle="Lemon Cake"
                    classSection="Cake Recipes"
                    Duration="30 mins"
                    Description=" In this class you will learn how to bake a fluffy and moist chocolate cake that lasts 3 days or more if refrigirated.  "

                />
                <Card
                    id="11"
                    isGrey={props.isGrey}
                    src={chocolatecake}
                    cardBgColor={props.cardBgColor}
                    classTitle=" Chocolate Cake"
                    classSection="Cake Recipes"
                    Duration="30 mins"
                    Description=" In this class you will learn how to bake a fluffy and moist chocolate cake that lasts 3 days or more if refrigirated.  "

                />
                <Card
                    id="12"
                    isGrey={props.isGrey}
                    src={darkchocolatecake}
                    cardBgColor={props.cardBgColor}
                    classTitle="Dark Chocolate Cake"
                    classSection="Cake Recipes"
                    Duration="30 mins"
                    Description=" In this class you will learn how to bake a fluffy and moist chocolate cake that lasts 3 days or more if refrigirated.  "

                />
                
            </ContentDiv>


        </ContentDiv>

    );
};




export default CategoryComponent2;

const ContentDiv = styled(BasicContentDiv)`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  gap: 4rem;
  background-color: ${CONSTANTS.graywhite}
`;

/*const ItemsWrapper=styled.div`
height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`
const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;
  margin: auto;
  margin-top: 5%;
`;

const CategoryCard=styled.div`
background-color: ${props => props.isGrey ? CONSTANTS.graywhite : 'transparent'};
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
 
`;*/