import React from "react";
import { Link } from "react-router-dom";
import { CONSTANTS, BasicContentDiv } from "../../global";
import Navbar from "../globalComponents/Navbar";
import Footer from "../globalComponents/Footer";
import Section from "../globalComponents/Section";
import EngArTitle from "../globalComponents/EngArTitle";
import styled from "styled-components";
import vanillacake from "../../designAssets/ClassCategory/vanillacake.png";
import chocolatecake from "../../designAssets/ClassCategory/chocolatecake.png";
import redvelvet from "../../designAssets/ClassCategory/redvelvet.png";
import darkchocolatecake from "../../designAssets/ClassCategory/darkchocolatecake.png";
import orangecake from "../../designAssets/ClassCategory/orangecake.png";
import lemoncake from "../../designAssets/ClassCategory/lemoncake.png";
import Card from "./CategoryCard";

//import {classesCategories} from "../../data/classes.js"

function CategoryComponent(props) {


    return (
        <Section>
            <EngArTitle
                style={{ width: "80% !important" }}
                english={"Baking"}
                arabic={"طعمة و ريحة ولا أطيب"}
                bottom={"-80%"}
                right={"-200%"}
                height={"100%"}
                arColor={CONSTANTS.pink}
            />
            <ContentDiv>
                <Card
                    isGrey={props.isGrey}
                    id="10"
                    src={vanillacake}
                    cardBgColor={props.cardBgColor}
                    classTitle="Vanilla Cake"
                    classSection="Cake Recipes"
                    Duration="30 mins"
                    Description=" In this class you will learn how to bake a fluffy and moist chocolate cake that lasts 3 days or more if refrigirated.  "

                />
                <Card
                    id="11"
                    src={redvelvet}
                    cardBgColor={props.cardBgColor}
                    isPadded={props.isPadded}
                    classTitle="Red Velvet Cake"
                    classSection="Cake Recipes"
                    Duration="30 mins"
                    Description=" In this class you will learn how to bake a fluffy and moist chocolate cake that lasts 3 days or more if refrigirated.  "

                />
                <Card
                    id="12"
                    src={orangecake}
                    cardBgColor={props.cardBgColor}
                    classTitle="Orange Cake"
                    classSection="Cake Recipes"
                    Duration="30 mins"
                    Description=" In this class you will learn how to bake a fluffy and moist chocolate cake that lasts 3 days or more if refrigirated.  "

                />
                </ContentDiv>
        </Section>

    );
};




export default CategoryComponent;

const ContentDiv = styled(BasicContentDiv)`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  gap: 4rem;
  
`;


/*const ItemsWrapper=styled.div`
height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`*/

