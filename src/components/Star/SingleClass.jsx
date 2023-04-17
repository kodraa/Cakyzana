import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components/macro";
import {
  BasicLandingSection,
  CONSTANTS,
  FullScreenSection,
} from "../../global";
import Navbar from "../globalComponents/Navbar";
import Cake from "../../designAssets/Star/Sample Cake.png";
import { useNavigate, useParams } from "react-router-dom";
import { db } from "../../firebase";
import { CartContext } from "../../context";
import Modal from "../Modal_Cart";
import { AuthContext } from "../../AuthContext";

// TODO add to cart functionality

function SingleClass() {
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const { id } = useParams();
  const [itemData, setItemData] = useState(null);
  const [cart, setCart] = useContext(CartContext);
  const [active, setActive] = useState(true);
  const [addedToCart, SetAddedToCart] = useState(false);

  useEffect(() => {
    const getItemById = async () => {
      const itemRef = db.collection("Classes").doc(id);
      const itemDoc = await itemRef.get();
      if (itemDoc.exists) {
        const itemData = itemDoc.data();
        console.log("itemData", itemData);
        setItemData({ ...itemData, id: itemDoc.id });
      } else {
        console.log("No such document!");
      }
    };

    getItemById();
  }, [id]);

  const handleAddToCart = () => {
    // let total_item = cart.items.filter((item) => item.id == currentUtensil.id);
    let total_item = cart.items.filter((item) => item.id == itemData.id);

    total_item = total_item.length > 0 ? total_item[0].qty : 0;

    if (total_item >= 1) {
      let items = cart.items.map((item) => {
        return {
          ...item,
          // qty: item.id == currentUtensil.id ? total_item + 1 : item.qty,
          qty: item.id == itemData.id ? total_item + 1 : item.qty,
        };
      });

      setCart((prev) => ({
        total: prev.total + 1,
        items,
      }));
    } else {
      setCart((prev) => ({
        total: prev.total + 1,
        // items: [...prev.items, { ...currentUtensil, qty: total_item + 1 }],
        items: [...prev.items, { ...itemData, qty: total_item + 1 }],
      }));
    }

    SetAddedToCart(true);
    setActive(true);

    setTimeout(() => {
      setActive(false);
      SetAddedToCart(false);
    }, 2000);
  };

  return (
    <FullScreenSection>
      <Navbar />
      {addedToCart && (
        <Modal
          active={active}
          hideModal={() => setActive(false)}
          item={itemData}
        />
      )}
      <StarFlexContainer>
        <LeftFlexChild>
          <LeftChildImgContainer>
            <Img src={itemData?.image} alt="cake" />
          </LeftChildImgContainer>
        </LeftFlexChild>

        <RightFlexChild>
          {/* <StarTitle>Canvas Your Cake</StarTitle> */}
          <StarTitle>{itemData?.title}</StarTitle>

          <StarSubtitles>
            {/* <Subtitle>Class Section: Cake Recipes</Subtitle> */}
            <Subtitle>Class Section: {itemData?.classSection}</Subtitle>
            <Subtitle>Class Duration: {itemData?.duration}</Subtitle>
          </StarSubtitles>

          <DescriptionContainer>
            {/* <Paragraph>
              Description: This class gives you the real technique of drawing on
              fondant. It includes color combination and character drawing
              technique.
            </Paragraph> */}
            <Paragraph>Description: {itemData?.description}</Paragraph>
          </DescriptionContainer>

          <ToolsContainer>
            {/* <Paragraph>
              Tools Needed: Brushes, Butter cream, food coloring of your choice,
              coloring tray, fondant, reference image.
            </Paragraph> */}
            <Paragraph>Tools Needed: {itemData?.tools}</Paragraph>
          </ToolsContainer>

          <PrerequisitesContainer>
            {/* <Paragraph>
              Prerequisites: Butter cream making class, cream coloring class,
              fondant class.
            </Paragraph> */}
            <Paragraph>
              Prerequisites: {itemData?.prerequisites || "None"}
            </Paragraph>
          </PrerequisitesContainer>

          <CTA>
            <Price>Price: ${itemData?.price}</Price>
            <CTABtn
              onClick={currentUser ? handleAddToCart : () => navigate("/login")}
            >
              Add to Cart
            </CTABtn>
          </CTA>
        </RightFlexChild>
      </StarFlexContainer>
    </FullScreenSection>
  );
}

export default SingleClass;

const StarFlexContainer = styled(BasicLandingSection)`
  width: 87%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-self: flex-end;

  /* flex direction column on mobile */

  @media (max-width: 768px) {
    flex-direction: column;
    /* align-items: center; */
    /* justify-content: center; */
  }
`;

const FlexChild = styled.div`
  /* height: 80%; */
  height: 75%;
  width: 45%;
  display: flex;
`;

const LeftFlexChild = styled(FlexChild)``;

const LeftChildImgContainer = styled.div`
  height: 100%;
  width: 100%;
  /* aspect-ratio: 1/1.033; */
  background-color: ${CONSTANTS.purpleDark};
  border-radius: 36px;
  align-self: center;
  position: relative;
`;

const Img = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
  transform: translateY(10%);
`;

const RightFlexChild = styled(FlexChild)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  padding-top: 3%;

  & * {
    color: #545454;
    font-weight: 100;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
    padding-top: 0;
    justify-content: center;
    gap: 10px;
  }
`;

const StarTitle = styled.h2`
  /* font-size: 2.2rem; */
  font-size: clamp(1.6rem, 2.5vw, 2.2rem);
`;

const StarSubtitles = styled.div`
  /* font-size: 1.8rem; */
  font-size: clamp(1.2rem, 2vw, 1.8rem);
`;

const Subtitle = styled.h3`
  /* font-size: 1.4rem; */
  font-size: clamp(1.2rem, 2vw, 1.4rem);
`;

const DescriptionContainer = styled.div``;

const ToolsContainer = styled.div``;

const PrerequisitesContainer = styled.div``;

const Paragraph = styled.p`
  /* font-size: 1.4rem; */
  font-size: clamp(1.2rem, 2vw, 1.4rem);
  font-weight: lighter !important;
`;

const CTA = styled.div`
  height: 20%;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 20px;
`;

const Price = styled.p`
  font-size: 1.2rem;
`;

const CTABtn = styled.button`
  width: 200px;
  text-align: center;
  padding: 10px;
  background-color: ${CONSTANTS.blue};
  color: white;
  border-radius: 32px;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
  /* margin-top: 1rem; */
`;
