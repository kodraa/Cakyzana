import React, { useState, useContext } from "react";
import styled from "styled-components/macro";
import { CONSTANTS } from "../../global";
import Section from "../globalComponents/Section";
import Navbar from "../globalComponents/Navbar";
import { CartContext } from "../../context";
import { AuthContext } from "../../AuthContext";
import { db, auth } from "../../firebase";

//TODO: Add orders page.

const Cart = (props) => {
  const { userData } = useContext(AuthContext);
  const [cart, setCart] = useContext(CartContext);
  const [checkout, setCheckout] = useState(false);
  const [showCongrates, setShowCongrates] = useState(false);

  const [subtotal, setSubTotal] = useState(
    cart.items.reduce((accumulator, object) => {
      return accumulator + parseInt(object?.qty) * parseInt(object?.price);
    }, 0)
  );
  const [shipping, setShipping] = useState(4);
  const [grandtotal, setGrandTotal] = useState(subtotal + shipping);

  const handleIncreaseQuantity = (itemId) => {
    const updatedItems = cart.items.map((item) => {
      if (item.id === itemId) {
        return {
          ...item,
          qty: item.qty + 1,
        };
      }
      return item;
    });

    setCart((prevCart) => ({
      ...prevCart,
      items: updatedItems,
    }));

    // Update subtotal, shipping and grand total
    const updatedSubtotal = updatedItems.reduce((accumulator, object) => {
      return accumulator + parseInt(object?.qty) * parseInt(object?.price);
    }, 0);
    setSubTotal(updatedSubtotal);

    const updatedGrandTotal = updatedSubtotal + shipping;
    setGrandTotal(updatedGrandTotal);
  };

  const handleSubtractQuantity = (itemId) => {
    const updatedItems = cart.items.map((item) => {
      if (item.id === itemId) {
        return {
          ...item,
          qty: item.qty - 1,
        };
      }
      return item;
    });

    setCart((prevCart) => ({
      ...prevCart,
      items: updatedItems,
    }));

    // Update subtotal, shipping and grand total
    const updatedSubtotal = updatedItems.reduce((accumulator, object) => {
      return accumulator + parseInt(object?.qty) * parseInt(object?.price);
    }, 0);
    setSubTotal(updatedSubtotal);

    const updatedGrandTotal = updatedSubtotal + shipping;
    setGrandTotal(updatedGrandTotal);
  };

  // const handlePlaceOrder = () => {
  //   const utensils = cart.items
  //     .filter((item) => item.type === "utensil")
  //     .map((item) => ({ Item: item, Quantity: item.qty }));

  //   const classes = cart.items
  //     .filter((item) => item.type === "class")
  //     .map((item) => ({ Item: item, Quantity: item.qty }));

  //   db.collection("Order")
  //     .doc()
  //     .set({
  //       UserId: userData.id,
  //       Date: new Date(),
  //       UserEmail: userData.email,
  //       classes: classes,
  //       utensils: utensils,
  //     })
  //     .then((docRef) => {
  //       if (docRef) {
  //         classes.map((item) => {
  //           console.log(docRef);
  //           for (let i = 0; i < item.Quantity; i++) {
  //             console.log("item", item);
  //             db.collection("Codes").doc().set({
  //               UserEmail: userData.email,
  //               UserId: userData.id,
  //               DateOfPurchase: new Date(),
  //               DateOfRedeem: "",
  //               OrderId: docRef.id,
  //               Redeemed: false,
  //               Class: item.Item.title,
  //               UserRedeemedEmail: "",
  //             });
  //           }
  //         });
  //       } else {
  //         console.log("error in doc ref");
  //       }
  //     })
  //     .catch((error) => {
  //       console.error("Error adding document: ", error);
  //     });

  //   setCart((prevCart) => ({
  //     ...prevCart,
  //     items: [],
  //   }));
  // };

  const handlePlaceOrder = async () => {
    console.log("cart.items", cart.items);
    const utensils = cart.items
      .filter((item) => item.type === "utensil")
      .map((item) => ({ Item: item, Quantity: item.qty }));

    const classes = cart.items
      .filter((item) => item.type === "class")
      .map((item) => ({ Item: item, Quantity: item.qty }));

    try {
      const orderRef = await db.collection("Order").add({
        UserId: userData.id,
        Date: new Date(),
        UserEmail: userData.email,
        classes: classes,
        utensils: utensils,
      });

      const codesPromises = classes.flatMap((item) =>
        Array.from({ length: item.Quantity }, () => {
          console.log("item in codes loop", item);
          db.collection("Codes").add({
            UserEmail: userData.email,
            UserId: userData.id,
            DateOfPurchase: new Date(),
            DateOfRedeem: "",
            OrderId: orderRef.id,
            Redeemed: false,
            Class: item.Item.id,
            UserRedeemedEmail: "",
          });
        })
      );

      await Promise.all(codesPromises);

      setCart((prevCart) => ({
        ...prevCart,
        items: [],
      }));
      console.log("Order added successfully");
    } catch (error) {
      console.error("Error adding order: ", error);
    }
  };

  return (
    <Section>
      <Navbar />
      <Header>{checkout ? "Checkout" : "Your Cart"}</Header>
      {cart.items.length > 0 ? (
        <>
          {!checkout ? (
            <TitleCart checkout={checkout}>
              <ItemTitle>Item</ItemTitle>
              <QuantityTitle>Quantity</QuantityTitle>
              <PriceTitle>Price</PriceTitle>
            </TitleCart>
          ) : (
            <NewCartContainer
            // style={{
            //   display: "flex",
            //   width: "80%",
            //   margin: "auto",
            //   flexDirection: "row",
            //   alignItems: "right",
            //   justifyContent: "flex-end",
            // }}
            >
              <h4 style={{ width: "50%", textAlign: "center", padding: 20 }}>
                Order Summary
              </h4>
            </NewCartContainer>
          )}

          <NewCheckoutContainer>
            {checkout &&
              (showCongrates ? (
                <>
                  <CongratsDiv>
                    <CongratsSubDiv>
                      <h3>Your order has been placed successfully</h3>
                      <h2>Thank you for your purchase!</h2>
                    </CongratsSubDiv>
                  </CongratsDiv>
                </>
              ) : (
                <div className="divInsideCheckoutContainer">
                  <InputDiv>
                    <h5 style={{ width: "50%" }}>Customer Name</h5>
                    <h5>{userData.firstName}</h5>
                  </InputDiv>
                  <InputDivBig>
                    <h5>Address</h5>
                    <h5>{userData.address}</h5>
                  </InputDivBig>
                </div>
              ))}
            <NewCartWrapper checkout={checkout}>
              <CartDiv>
                <CartContainer>
                  {cart.items.map((item) => {
                    console.log("name", item.title);

                    return (
                      <CartItem checkout={checkout}>
                        <CartItemImgContainer>
                          <CartItemImg src={item.image} />
                        </CartItemImgContainer>
                        <CartItemName>{item.title}</CartItemName>
                        <CartItemQuantity>
                          <span
                            onClick={() => handleSubtractQuantity(item.id)}
                            style={{ cursor: "pointer" }}
                          >
                            -
                          </span>{" "}
                          {item.qty}{" "}
                          <span
                            onClick={() => handleIncreaseQuantity(item.id)}
                            style={{ cursor: "pointer" }}
                          >
                            +
                          </span>
                        </CartItemQuantity>
                        <CartItemPrice> {item.price} </CartItemPrice>
                      </CartItem>
                    );
                  })}
                </CartContainer>
              </CartDiv>

              <CartLowerDivContainer checkout={checkout}>
                <CartLowerDiv>
                  <CartItem lower={false} checkout={checkout}>
                    <CartItemName>Subtotal</CartItemName>
                    <CartItemName>{subtotal}$</CartItemName>
                  </CartItem>

                  <CartItem lower={false} checkout={checkout}>
                    <CartItemName>Shipping</CartItemName>
                    <CartItemName>{shipping}$</CartItemName>
                  </CartItem>

                  <CartItem lower={false} checkout={checkout}>
                    <CartItemName>Grand Total</CartItemName>
                    <CartItemName>{grandtotal}$</CartItemName>
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
                    {/* {!checkout && ( */}
                    <CTABtn
                      onClick={() => {
                        if (cart.items.length !== 0 && checkout === false) {
                          setCheckout(true);
                        } else if (
                          cart.items.length !== 0 &&
                          checkout === true &&
                          showCongrates === true
                        ) {
                          handlePlaceOrder();
                          setShowCongrates(true);
                        } else if (
                          cart.items.length !== 0 &&
                          checkout === true
                        ) {
                          setShowCongrates(true);
                        }
                      }}
                    >
                      {checkout
                        ? showCongrates
                          ? "Place Order"
                          : "Proceed Checkout"
                        : "Checkout"}
                      {/* showCongrates ? "Proceed Checkout" : "Checkout"} */}
                    </CTABtn>
                    {/* )} */}
                  </div>
                </CartLowerDiv>
              </CartLowerDivContainer>
            </NewCartWrapper>
          </NewCheckoutContainer>
        </>
      ) : (
        <>
          <CartEmpltyText>Cart is Empty</CartEmpltyText>
        </>
      )}
    </Section>
  );
};

export default Cart;

const NewCartContainer = styled.div`
  width: 80%;
  margin: auto;
  display: flex;
  justify-content: center;
  font-size: 1.2rem;
`;

const NewCartWrapper = styled.div`
  width: ${({ checkout }) => (checkout ? "50%" : "100%")};
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const NewCheckoutContainer = styled.div`
  display: flex;
  gap: 2rem;

  & > .divInsideCheckoutContainer {
    width: 50%;

    @media (max-width: 768px) {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

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

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const TitleCart = styled.div`
  display: flex;
  justify-content: space-between;
  width: ${(props) => (props.checkout ? "40%" : "80%")};
  margin: auto;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    width: 100%;
  }
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
  margin-right: 6%;
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
  justify-content: ${(props) => (props.lower ? "flex-start" : "space-between")};
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

const CartEmpltyText = styled.h2`
  font-size: clamp(0.75rem, 5vw, 1.75rem);
  font-weight: 600;
  width: 100%;
  height: 60%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #f92d88;
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
  user-select: none;
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

  @media (max-width: 768px) {
    width: 100%;
    left: 0;
  }
`;

const CartLowerDiv = styled.div`
  gap: 1rem;
  display: flex;
  align-items: end;
  flex-direction: column;
  justify-content: end;
  margin-top: 2rem;

  @media (max-width: 768px) {
    width: 100%;
  }
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
  justify-content: space-between;
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
  justify-content: space-between;
`;

// const obj = {
// classes: {
//   classId1: {
//     videoId1: {
//       isFinished: false,
//       timeStamp: "67",
//     },
//     videoId2: {
//       isFinished: false,
//       timeStamp: "32",
//     },
//   },
//   lastWatchedVideo: "0",
// },
// };

const CongratsDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  background-color: ${CONSTANTS.purpleActive};

  @media (max-width: 768px) {
    display: none;
  }
`;

const CongratsSubDiv = styled.div`
  height: 50%;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  text-align: center;
  /* background-color: white; */

  h3 {
    font-size: 1.5rem;
    color: white;
  }

  h2 {
    font-size: 2rem;
    color: ${CONSTANTS.fosfore};
  }
`;
