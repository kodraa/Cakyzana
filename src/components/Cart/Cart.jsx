import react,{useState,useContext} from "react";
import styled from "styled-components";
import { CONSTANTS } from "../../global";
import { Link } from "react-router-dom";
import Section from "../globalComponents/Section";
import MeasuringCup from "../../designAssets/Utensils/ForMeasuring/MeasuringCups.png";
import Navbar from "../globalComponents/Navbar";
import { CartContext } from "../../context";
const Cart = (props) => {

  const [cart, setCart] = useContext(CartContext);

  return (
    <Section>
      <Navbar />
      <Header>Your Cart</Header>
      <TitleCart>
        <ItemTitle>Item</ItemTitle>
        <QuantityTitle>Quantity</QuantityTitle>
        <PriceTitle>Price</PriceTitle>
      </TitleCart>
      <CartDiv>
        <CartContainer>
          {cart.items.map((item) => {
            return (
              <CartItem>
                <CartItemImgContainer>
                  <CartItemImg src={item.img} />
                </CartItemImgContainer>
                <CartItemName>{item.name}</CartItemName>
                <CartItemQuantity>- 1 +</CartItemQuantity>
                <CartItemPrice> {item.price} </CartItemPrice>
              </CartItem>
            );
          }
          )}
          {/* <CartItem>
            <CartItemImgContainer>
            <CartItemImg src={MeasuringCup} />
            </CartItemImgContainer>
            <CartItemName>Measuring Cup</CartItemName>
            <CartItemQuantity>- 1 +</CartItemQuantity>
            <CartItemPrice> 10$ </CartItemPrice>
          </CartItem> */}
        </CartContainer>
      </CartDiv>
    </Section>
  );
};

export default Cart;

const Header = styled.h1`
  color: ${CONSTANTS.pink};
  font-size: 30px;
  font-weight: 900;
  text-align: center;
  align-self: center;
  margin-top: 8rem;
  margin-bottom: 2rem;
`;

const CartDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  margin: auto;
`;

const TitleCart = styled.div`
  display: flex;
  justify-content: space-between;
  
  align-items: center;
  width: 80%;
  margin: auto;
    margin-bottom: 1rem;

`;

const ItemTitle = styled.h4`
  font-size: 1.2rem;
  font-weight: 600;
  width: 60%;
  padding-left: 5rem;
`;

const QuantityTitle = styled.h4`
  font-size: 1.2rem;
  font-weight: 600;
  width: 20%;
  align-self: center;
  text-align: center;
`;

const PriceTitle = styled.h4`
  font-size: 1.2rem;
  font-weight: 600;
  width: 20%;
  align-self: center;
  text-align: center;
`;

const CartContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
`;

const CartItem = styled.div`
  width: 100%;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  padding: 0 1rem;
  background-color: white;
  border-radius: 10px;
  padding-left: 7%;

`;

const CartItemImgContainer = styled.div`
    width: 20%;
`;

const CartItemImg = styled.img`
  height: 3rem;
  object-fit: cover;

`;

const CartItemName = styled.h3`
  font-size: 1.2rem;
  font-weight: 400;
  width: 30%;
    text-align: center;
`;

const CartItemPrice = styled.h3`
  font-size: 1.2rem;
  font-weight: 400;
  text-align: center;
    width: 20%;
`;

const CartItemQuantity = styled.h3`
  font-size: 1.2rem;
  font-weight: 400;
    text-align: center;
    width: 20%;
`;
