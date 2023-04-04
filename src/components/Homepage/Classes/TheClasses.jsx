// import React from "react";
// import { CONSTANTS, BasicContentDiv } from "../../../global";
// import EngArTitle from "../../globalComponents/EngArTitle";
// import Section from "../../globalComponents/Section";
// import styled from "styled-components/macro";
// import Card from "./Card";
// import cake1 from "../../../designAssets/Homepage/Classes/pic1.png";
// import cake2 from "../../../designAssets/Homepage/Classes/pic2.png";
// import cake3 from "../../../designAssets/Homepage/Classes/pic3.png";
// import cake4 from "../../../designAssets/Homepage/Classes/pic4.png";
// import cake5 from "../../../designAssets/Homepage/Classes/pic5.png";

// function TheClasses(props) {

// console.log(window.innerHeight, window.innerWidth)

//   return (
//     <Section isGrey={props.isGrey}>
//       {/* // <Section> */}
//       <EngArTitle
//         english={"Classes"}
//         arabic={"يلا عالصف"}
//         bottom={"-50%"}
//         right={"-114%"}
//         arColor={CONSTANTS.pink}
//       />
//       <ContentDiv>
//         <CardWrapper>
//           <Card
//             classTitle="Chocolate Cake Recipe"
//             imagesrc={cake1}
//             number="10"
//             classDur="30"
//             descr=" In this class you will learn how to bake a fluffy and moist chocolate cake that lasts if refrigirated."
//           />

//           <Card
//             classTitle="Chocolate Ganache"
//             imagesrc={cake2}
//             number="10"
//             classDur="30"
//             descr="This workshop includes recipe, crumb coating, sugar coating, bubbles making, coloring rules... "
//           />

//           <Card
//             classTitle="Sugar Fondant"
//             imagesrc={cake3}
//             number="10"
//             classDur="30"
//             descr=" This workshop includes recipe, crumb coating, sugar coating, bubbles making, coloring rules... "
//           />
//         </CardWrapper>
//       </ContentDiv>
//     </Section>
//   );
// }

// export default TheClasses;

// const ImgHolder = styled.div`
//   min-width: 31%;
//   height: 100%;
//   border-radius: 10px;
// `;

// const ContentDiv = styled(BasicContentDiv)`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   /* background-color: black; */
// `;

// const CardWrapper = styled.div`
//   height: 100%;
//   width: 90%;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   gap: 5rem;
//   /* background-color: red; */
// `;

// const Image = styled.img`
//   width: 100%;
//   height: 100%;
//   object-fit: contain;
// `;

import React from "react";
import { CONSTANTS, BasicContentDiv } from "../../../global";
import EngArTitle from "../../globalComponents/EngArTitle";
import Section from "../../globalComponents/Section";
import styled from "styled-components/macro";
// import { pic1 } from "/designAssets/Homepage/Classes/pic1.png";
import cake1 from "../../../designAssets/Homepage/Classes/cake1.png";
import cake2 from "../../../designAssets/Homepage/Classes/cake2.png";
import cake3 from "../../../designAssets/Homepage/Classes/cake3.png";
import cake4 from "../../../designAssets/Homepage/Classes/cake4.png";
import cake5 from "../../../designAssets/Homepage/Classes/cake5.png";
import ArrowRight from "../../../designAssets/Homepage/Classes/ArrowRight.png";
import ArrowLeft from "../../../designAssets/Homepage/Classes/ArrowLeft.png";
import { highlightedClasses } from "../../../data/highlightedClasses";
import DescriptionCard from "../../globalComponents/DescriptonCard";

function TheClasses() {

  return (
    <Section isGrey>
      <EngArTitle
        english={"Classes"}
        arabic={"يلا عالصف"}
        bottom={"-50%"}
        right={"-62%"}
        arColor={CONSTANTS.pink}
      />
      <ContentDiv>
        <Arrow className="left" src={ArrowLeft} />
        <CardWrapper>
          {highlightedClasses.map((item) => {
            return (
              <DescriptionCard
                key={item.id}
                classTitle={item.classTitle}
                imagesrc={require(`../../../designAssets/Homepage/Classes/${item.imagesrc}.png`)}
                // imagesrc={pic1}
                // imagesrc={item.imagesrc}
                number={item.number}
                classDur={item.classDur}
                descr={item.descr}
              />
            );
          })}
        </CardWrapper>
        <Arrow className="right" src={ArrowRight} />
      </ContentDiv>
    </Section>
  );
}

export default TheClasses;

const ContentDiv = styled(BasicContentDiv)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Arrow = styled.img`
  width: 25px;
  cursor: pointer;

  &.left {
    left: 0;
  }

  &.right {
    right: 0;
  }
`;

const CardWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

// {/* <Card
//   classTitle="Chocolate Cake Recipe"
//   imagesrc={cake1}
//   number="10"
//   classDur="30"
//   descr=" In this class you will learn how to bake a fluffy and moist chocolate cake that lasts 3 days or more if refrigirated."
// />
// <Card
//   classTitle="Chocolate Ganache"
//   imagesrc={cake2}
//   number="10"
//   classDur="30"
//   descr="This workshop includes recipe, crumb coating, sugar coating, bubbles making, coloring rules... "
// />
// <Card
//   classTitle="Sugar Fondant"
//   imagesrc={cake3}
//   number="10"
//   classDur="30"
//   descr=" This workshop includes recipe, crumb coating, sugar coating, bubbles making, coloring rules... "
// /> */}
