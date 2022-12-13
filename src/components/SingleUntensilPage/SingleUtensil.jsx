import React from "react";
import styled from "styled-components";
import {
  BasicLandingSection,
  CONSTANTS,
  FullScreenSection,
} from "../../global";
import { utensils } from "../../data/utensils";
import { useParams } from "react-router-dom";


// TODO add black cart logo

function SingleUntensil() {
  const params = useParams();
  const id = params.id;
  let utensil = utensils.find((utensil) => utensil.id == id);

  return (
    <FullScreenSection isGrey>
      <UtensilFlexContainer>
        <LeftFlexChild>
          <LeftChildImgContainer>
            <Img
              src={require(`../../designAssets/UtensilsPage/${utensil.image}.png`)}
              alt="utensil"
            />
          </LeftChildImgContainer>
        </LeftFlexChild>

        <RightFlexChild>
          <UtensilTitle>{utensil.name}</UtensilTitle>

          <UtensilSubtitles>
            <Price>Price: </Price>
            <Subtitle>{utensil.price}</Subtitle>
          </UtensilSubtitles>

          <ShapeContainer>
            <BoldText>Shape:</BoldText>
            <Paragraph>{utensil.shape}</Paragraph>
          </ShapeContainer>

          <MaterialContainer>
            <BoldText>Material:x{utensil.material.length}</BoldText>
            <ListItems>
              {utensil.material.map((material) => (
                <ListItem>{material}</ListItem>
              ))}
            </ListItems>
          </MaterialContainer>

          <MaterialContainer>
            <BoldText>Diemnsions: x{utensil.Dimensions.length}</BoldText>
            <ListItems>
              {utensil.Dimensions.map((dimension) => (
                <ListItem>{dimension}</ListItem>
              ))}
            </ListItems>
          </MaterialContainer>

          <MaterialContainer>
            <BoldText>Packaging</BoldText>
            <ListItems>
              <ListItem>{utensil.Packaging}</ListItem>
            </ListItems>
          </MaterialContainer>

          <CTA>
            <CTABtn>Add to Cart</CTABtn>
          </CTA>
        </RightFlexChild>
      </UtensilFlexContainer>
    </FullScreenSection>
  );
}

export default SingleUntensil;

const UtensilFlexContainer = styled(BasicLandingSection)`
  width: 87%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-self: flex-end;
  margin-left: auto;
  margin-right: auto;
`;

const FlexChild = styled.div`
  /* height: 80%; */
  height: 75%;
  width: 55%;
  display: flex;
`;

const LeftFlexChild = styled(FlexChild)``;

const LeftChildImgContainer = styled.div`
  height: 100%;
  width: 100%;
  /* aspect-ratio: 1/1.033; */
  background-color: white;
  border-radius: 36px;
  align-self: center;
  position: relative;
  display: flex;
  justify-content: center;
`;

const Img = styled.img`
  height: 100%;
  width: 70%;
  object-fit: contain;
`;

const RightFlexChild = styled.div`
  height: 75%;
  width: 35%;
  display: flex;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1.4rem;
  position: relative;
  & * {
    color: #545454;
    font-weight: 100;
  }
`;

const UtensilTitle = styled.h2`
  font-size: 2.2rem;
  color: ${CONSTANTS.pink};
  font-weight: bold;
`;

const UtensilSubtitles = styled.div`
  font-size: 1.8rem;
`;

const Subtitle = styled.p`
  font-size: 1.7rem;
  display: inline !important;
`;

const ShapeContainer = styled.div``;

const MaterialContainer = styled.div``;

const BoldText = styled.h4`
  font-weight: 600;
  font-size: 1.2rem;
`;

const Paragraph = styled.p`
  font-size: 1.2rem;
  font-weight: lighter !important;
`;

const ListItems = styled.ul`
  list-style-type: "-";
`;

const ListItem = styled.li`
  font-size: 1.2rem;
  font-weight: lighter !important;
`;

const CTA = styled.div`
  position: relative;
  top: 2%;
  height: 20%;
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: flex-Utensilt;
  gap: 30px;
`;

const Price = styled.h3`
  font-size: 1.7rem;
  font-weight: 600;
  display: inline !important;
`;

const CTABtn = styled.button`
  width: 200px;
  text-align: center;
  padding: 10px;
  background-color: ${CONSTANTS.pink};
  color: white;
  border-radius: 32px;
  border: none;
  font-weight: bold;
  font-size: 1.2rem;
  /* margin-top: 1rem; */
`;
