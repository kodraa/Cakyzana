import React from "react";
import styled from "styled-components/macro";
import { BasicContentDiv, CONSTANTS } from "../../global";
import EngArTitle from "../globalComponents/EngArTitle";
import Section from "../globalComponents/Section";
import Whisk from "../../designAssets/Classes/Categories/Whisk.png";
import Deco from "../../designAssets/Classes/Categories/Deco.png";
import PipingBag from "../../designAssets/Classes/Categories/Piping Bag.png";
import Scraper from "../../designAssets/Classes/Categories/Scraper.png";
import SmoothingTool from "../../designAssets/Classes/Categories/Smoothing Tool.png";
import Spatula from "../../designAssets/Classes/Categories/Spatula.png";
import { Link } from "react-router-dom";

function Category(props) {
  return (
    <Section isGrey={props.isGrey}>
      <EngArTitle
        english={"Category"}
        arabic={"طوّر مهارتك الكايكية"}
        bottom={"-65%"}
        right={"-11 7%"}
        arColor={CONSTANTS.pink}
      />
      <ContentDiv>
        <ItemsWrapper>
          <Circle>
            <CircleLink to={"baking"}>
              <CircleTitle>Baking</CircleTitle>
              <Img src={Whisk} alt="Whisk" />
            </CircleLink>
          </Circle>
          <Circle>
            <CircleLink to={"butterCream"}>
              <CircleTitle>Butter Cream</CircleTitle>
              <Img src={Spatula} alt="Spatula" />
            </CircleLink>
          </Circle>
          <Circle>
            <CircleLink to={"decoration"}>
              <CircleTitle>Deco- ration</CircleTitle>
              <Img src={Deco} alt="Deco" />
            </CircleLink>
          </Circle>
          <Circle>
            <CircleLink to={"fondant"}>
              <CircleTitle>Fondant</CircleTitle>
              <Img src={SmoothingTool} alt="Smoothing Tool" />
            </CircleLink>
          </Circle>
          <Circle>
            <CircleLink to={"ganache"}>
              <CircleTitle>Gan- ache</CircleTitle>
              <Img src={Scraper} alt="Scraper" />
            </CircleLink>
          </Circle>
          <Circle>
            <CircleLink to={"/classes/filling"}>
              <CircleTitle>Filling</CircleTitle>
              <Img src={PipingBag} alt="Piping Bag" />
            </CircleLink>
          </Circle>
        </ItemsWrapper>
      </ContentDiv>
    </Section>
  );
}

export default Category;

const ContentDiv = styled(BasicContentDiv)`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    /* height: auto; */
  }
  `;

const ItemsWrapper = styled.div`
  width: 100%;
  height: 100%;
  /* background-color: red; */
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  align-content: center;
  gap: 8%;
  /* row-gap: 6%; */
  row-gap: 0.7rem;
  /* background-color: pink; */

  @media (max-width: 768px) {
    gap: 10%;
  }
`;

const CircleLink = styled(Link)`
  color: unset;
  text-decoration: none;
`;

const Img = styled.img`
  width: 55%;
  height: 55%;
  object-fit: contain;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: all 0.5s ease-in-out;
`;

const CircleTitle = styled.h2`
  /* font-size: 3.5rem; */
  font-size: clamp(2rem, 3.5vw, 3.5rem);
  font-family: "Century Gothic Bold", sans-serif;
  position: absolute;
  top: 30%;
  left: 25%;
  transform: translate(-25%, -25%);
  transition: all 0.5s ease-in-out;
  opacity: 0;
  user-select: none;
`;

const Circle = styled.div`
  width: 22%;
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  background-color: white;
  position: relative;

  &:hover ${CircleTitle} {
    top: 50%;
    left: 35%;
    transform: translate(-35%, -50%);
    opacity: 1;
    transition: all 0.5s ease-in-out;
  }

  &:hover ${Img} {
    top: 68%;
    left: 72%;
    transform: translate(-50%, -50%);
    transition: all 0.5s ease-in-out;
  }

  @media (max-width: 768px) {
    width: 40%;

    & ${CircleTitle} {
      top: 50%;
      left: 35%;
      transform: translate(-35%, -50%);
      opacity: 1;
      transition: all 0.5s ease-in-out;
    }

    & ${Img} {
      top: 68%;
      left: 72%;
      transform: translate(-50%, -50%);
      transition: all 0.5s ease-in-out;
    }
  }
`;
