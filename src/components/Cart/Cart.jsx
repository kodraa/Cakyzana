import React, { useState, useContext } from "react";
import styled from "styled-components/macro";
import { CONSTANTS } from "../../global";
import Section from "../globalComponents/Section";
import Navbar from "../globalComponents/Navbar";
import { CartContext } from "../../context";
const Cart = (props) => {
  const [cart, setCart] = useContext(CartContext);
  const [checkout, setCheckout] = useState(false);

  const [subtotal, setSubTotal] = useState(
    cart.items.reduce((accumulator, object) => {
      return accumulator + parseInt(object?.qty) * parseInt(object?.price);
    }, 0)
  );
  const [shipping, setShipping] = useState(4);
  const [grandtotal, setGrandTotal] = useState(subtotal + shipping);

  return (
    <Section>
      <Navbar />
      <Header>{checkout ? "Checkout" : "Your Cart"}</Header>
      {!checkout ? (
        <TitleCart checkout={checkout}>
          <ItemTitle>Item</ItemTitle>
          <QuantityTitle>Quantity</QuantityTitle>
          <PriceTitle>Price</PriceTitle>
        </TitleCart>
      ) : (
        <div
          style={{
            display: "flex",
            width: "80%",
            margin: "auto",
            flexDirection: "row",
            alignItems: "right",
            justifyContent: "flex-end",
          }}
        >
          <h4 style={{ width: "50%", textAlign: "center", padding: 20 }}>
            Order Summary
          </h4>
        </div>
      )}

      <div style={{ display: "flex", flexDirection: "row", gap: "2rem" }}>
        {checkout && (
          <div style={{ width: "50%" }}>
            <InputDiv>
              <h5>Customer Name</h5>
            </InputDiv>
            <InputDivBig>
              <h5>Address</h5>
            </InputDivBig>
            <InputDiv>
              <h5>Payment</h5>
            </InputDiv>
          </div>
        )}
        <div style={{ width: checkout ? "50%" : "100%" }}>
          <CartDiv>
            <CartContainer>
              {cart.items.map((item) => {
                return (
                  <CartItem checkout={checkout}>
                    <CartItemImgContainer>
                      <CartItemImg
                        src={require(`../../designAssets/Utensils/${item?.image}.png`)}
                      />
                    </CartItemImgContainer>
                    <CartItemName>{item.name}</CartItemName>
                    <CartItemQuantity>- {item.qty} +</CartItemQuantity>
                    <CartItemPrice> {item.price} </CartItemPrice>
                  </CartItem>
                );
              })}
            </CartContainer>
          </CartDiv>

          <CartLowerDivContainer checkout={checkout}>
            <CartLowerDiv>
              <CartItem lower={true} checkout={checkout}>
                <CartItemName>Subtotal {subtotal}$</CartItemName>
              </CartItem>

              <CartItem lower={true} checkout={checkout}>
                <CartItemName>Shipping {shipping}$</CartItemName>
              </CartItem>

              <CartItem lower={true} checkout={checkout}>
                <CartItemName>Grand Total {grandtotal}$</CartItemName>
              </CartItem>

              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <CTABtn
                  goBack={true}
                  onClick={() => {
                    checkout
                      ? setCheckout(false)
                      : (window.location.href = "/");
                  }}
                >
                  Continue Shopping
                </CTABtn>
                <CTABtn onClick={() => setCheckout(true)}>
                  {checkout ? "Edit Cart" : "Checkout"}
                </CTABtn>
              </div>
            </CartLowerDiv>
          </CartLowerDivContainer>
        </div>
      </div>
    </Section>
  );
};

export default Cart;

const CTABtn = styled.button`
  width: 200px;
  text-align: center;
  padding: 10px;
  background-color: ${(props) =>
    props.goBack ? "transparent" : CONSTANTS.pink};
  color: ${(props) => (props.goBack ? "black" : "white")};
  border-radius: 32px;
  border: none;
  font-weight: bold;
  text-decoration: underline;
  font-size: 1.2rem;
  text-decoration: none;
  /* margin-top: 1rem; */
`;

const Header = styled.h1`
  color: ${(props) => (props.checkout ? CONSTANTS.blue : CONSTANTS.pink)};
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
  align-items: end;
  width: ${(props) => (props.checkout ? "40%" : "80%")};
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
  align-items: end;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
`;

const CartItem = styled.div`
  width: 100%;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.lower ? "flex-end" : "space-between")};
  border: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  padding: ${(props) =>
    props.lower ? (props.checkout ? "0" : "0 3.5rem") : "0 1rem"};
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

const CartLowerDivContainer = styled.div`
  width: ${(props) => (props.checkout ? "80%" : "40%")};
  /* justify-content: right;
align-items: end; */
  flex-direction: column;
  display: flex;
  //flex at the end
  align-content: flex-end;
  justify-content: flex-end;
  position: relative;
  left: ${(props) => (props.checkout ? "10%" : "50%")};
  /* left: 50%; */
`;

const CartLowerDiv = styled.div`
  gap: 1rem;
  display: flex;
  align-items: end;
  flex-direction: column;
  justify-content: end;
  margin-top: 2rem;
`;

const InputDiv = styled.div`
  display: flex;
  background-color: white;
  width: 100%;
  margin-bottom: 1rem;
  border: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  background-color: white;
  border-radius: 10px;
  padding: 2rem;
`;

const InputDivBig = styled.div`
  display: flex;
  background-color: white;
  width: 100%;
  margin-bottom: 1rem;
  border: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  background-color: white;
  border-radius: 10px;
  padding: 5rem 2rem;
`;
