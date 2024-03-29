import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components/macro";
import {
  BasicLandingSection,
  CONSTANTS,
  FullScreenSection,
} from "../../global";
import { utensils } from "../../data/utensils";
import { useParams } from "react-router-dom";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { keyframes } from "styled-components/macro";
// TODO add black cart logo
import { CartContext } from "../../context";
import Modal from "../Modal_Cart";
import { db } from "../../firebase";

function SingleUntensil() {
  const [cart, setCart] = useContext(CartContext);
  const [active, setActive] = useState(true);
  const [addedToCart, SetAddedToCart] = useState(false);
  const params = useParams();
  const id = params.id;
  const [currentUtensil, setCurrentUtensil] = useState();

  useEffect(() => {
    window.scrollTo(0, 0);
    const getItemById = async () => {
      const itemRef = db.collection("utensils").doc(id);
      const itemDoc = await itemRef.get();
      if (itemDoc.exists) {
        const itemData = itemDoc.data();
        console.log("utensilData", currentUtensil);
        setCurrentUtensil({ ...itemData, id: itemDoc.id });
      } else {
        console.log("No such document!");
      }
    };

    getItemById();
  }, [id]);

  const handleAddToCart = () => {
    let total_item = cart.items.filter((item) => item.id == currentUtensil.id);
    console.log("total_item", total_item);

    total_item = total_item.length > 0 ? total_item[0].qty : 0;

    if (total_item >= 1) {
      let items = cart.items.map((item) => {
        return {
          ...item,
          qty: item.id == currentUtensil.id ? total_item + 1 : item.qty,
        };
      });

      setCart((prev) => ({
        total: prev.total + 1,
        items,
      }));
    } else {
      setCart((prev) => ({
        total: prev.total + 1,
        items: [...prev.items, { ...currentUtensil, qty: total_item + 1 }],
      }));
    }

    SetAddedToCart(true);
    setActive(true);

    setTimeout(() => {
      setActive(false);
      SetAddedToCart(false);
    }, 2000);
  };
  // const nextUtensil = () => {
  //   let nextUtensil = utensils.find(
  //     (utensil) => utensil.id == currentUtensil.id + 1
  //   );
  //   if (nextUtensil && nextUtensil.id <= utensils.length) {
  //     setCurrentUtensil(nextUtensil);
  //     window.history.replaceState(null, null, `/utensil/${nextUtensil.id}`);
  //   } else {
  //     setCurrentUtensil(utensils[0]);
  //   }
  // };
  // const prevUtensil = () => {
  //   let prevUtensil = utensils.find(
  //     (utensil) => utensil.id == currentUtensil.id - 1
  //   );
  //   if (prevUtensil && prevUtensil.id >= 1) {
  //     setCurrentUtensil(prevUtensil);

  //     window.history.replaceState(null, null, `/utensil/${prevUtensil.id}`);
  //   } else {
  //     setCurrentUtensil(utensils[utensils.length - 1]);
  //   }
  // };

  useEffect(() => {
    console.log(cart);
  });
  return (
    <FullScreenSection isGrey>
      {addedToCart && (
        <Modal
          active={active}
          hideModal={() => setActive(false)}
          item={currentUtensil}
        />
      )}

      <UtensilFlexContainer>
        <LeftFlexChild>
          <LeftChildImgContainer>
            <Img src={currentUtensil?.image} alt="utensil" />
          </LeftChildImgContainer>
        </LeftFlexChild>

        <RightFlexChild>
          <UtensilTitle>{currentUtensil?.name}</UtensilTitle>

          <UtensilSubtitles>
            <Price>Price: </Price>
            <Subtitle>{currentUtensil?.price}</Subtitle>
          </UtensilSubtitles>

          <ShapeContainer>
            <BoldText>Shape:</BoldText>
            <Paragraph>{currentUtensil?.shape}</Paragraph>
          </ShapeContainer>

          <MaterialContainer>
            <BoldText>Material:x{currentUtensil?.material.length}</BoldText>
            <ListItems>
              <ListItem>{currentUtensil?.material}</ListItem>
            </ListItems>
          </MaterialContainer>

          <MaterialContainer>
            <BoldText>
              Diemnsions: x{currentUtensil?.Dimensions.length}
            </BoldText>
            <ListItems>
              {currentUtensil?.Dimensions.map((dimension) => (
                <ListItem>{dimension}</ListItem>
              ))}
            </ListItems>
          </MaterialContainer>

          <MaterialContainer>
            <BoldText>Packaging</BoldText>
            <ListItems>
              <ListItem>{currentUtensil?.Packaging}</ListItem>
            </ListItems>
          </MaterialContainer>

          <CTA>
            <CTABtn onClick={handleAddToCart}>Add to Cart</CTABtn>
          </CTA>
        </RightFlexChild>

        {/* <ButtonsDiv>
          <PrevBtn onClick={prevUtensil}>
            <MdKeyboardArrowLeft size={25} /> Previous Product
          </PrevBtn>
          <NextBtn onClick={nextUtensil}>
            Next Product
            <MdKeyboardArrowRight size={25} />
          </NextBtn>
        </ButtonsDiv> */}
      </UtensilFlexContainer>
    </FullScreenSection>
  );
}

export default SingleUntensil;

const UtensilFlexContainer = styled(BasicLandingSection)`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-self: flex-end;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
  //transition: all 0.3s ease;
`;

const FlexChild = styled.div`
  /* height: 80%; */
  height: 75%;
  width: 55%;
  display: flex;

  @media (max-width: 768px) {
    width: 50%;
    height: 50%;
  }
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
  box-shadow: 4px 25px 25px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    height: 100%;
    width: 100%;
    box-shadow: none;
  }
`;

const Img = styled.img`
  height: 80%;
  width: 50%;
  object-fit: contain;
  align-self: center;
`;

const RightFlexChild = styled.div`
  min-height: 70%;
  width: 35%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1.4rem;
  position: relative;
  & * {
    color: #545454;
    font-weight: 100;
  }

  @media (max-width: 768px) {
    display: flex;
    width: 50%;
    height: 50%;
    flex-direction: row;
    flex-wrap: wrap;
    margin-bottom: 1rem;
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

const ButtonsDiv = styled.div`
  position: absolute;
  width: 75%;
  bottom: 4%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const slide = keyframes`
0% {
  transform: translateX(0);

}
100% {
  transform: translateX(-100%);
  
}
`;
const NextBtn = styled.button`
  width: fit-content;
  text-align: center;
  background: none;
  border: none;
  margin: 0;
  padding: 0;
  font-size: 20px;
  font-weight: 900;
  cursor: pointer;
  display: inline-flex;
  //on click slide to the left whole container
  align-self: center;
`;

const PrevBtn = styled.button`
  width: fit-content;
  font-size: 20px;
  font-weight: 900;
  text-align: center;
  background: none;
  border: none;
  margin: 0;
  padding: 0;
  cursor: pointer;
  display: inline-flex;
  align-self: center;
  transition: all 0.3s ease-in-out;
  //animation slide
`;
