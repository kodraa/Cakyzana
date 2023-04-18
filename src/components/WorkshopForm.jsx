import React, { useState } from "react";
import styled from "styled-components/macro";
import backgroundImage from "../designAssets/SignUp/background2.png";
import Navbar from "./globalComponents/Navbar";
import { db, auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { CONSTANTS } from "../global";

// todo submit button

function WorkshopForm() {
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    phoneNumber: "",
    email: "",
    birthDate: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const navigate = useNavigate();
  const HandleSignUp = () => {
    // check if any attribute in userInfo is empty using object.values.some()

    const flag = Object.values(userInfo).some((value) => {
      console.log("value", value);
      return value === "";
    });

    if (flag === true) {
      alert("Please fill out all fields");
      return;
    }

    auth
      .createUserWithEmailAndPassword(userInfo.email, userInfo.password)
      .then((authUser) => {
        console.log("User is being created");
        console.log(authUser.user.uid);
        db.collection("Users").doc(authUser.user.uid).set({
          firstName: userInfo.firstName,
          lastName: userInfo.lastName,
          userName: userInfo.userName,
          email: userInfo.email,
          birthDate: userInfo.birthDate,
          phoneNumber: userInfo.phoneNumber,
          gender: userInfo.gender,
          favClasses: [],
          favUtensils: [],
        });
      })
      .then(() => {
        navigate("/login");
      })
      .catch(function (error) {
        switch (error.code) {
          case "auth/weak-password":
            alert("The password is too weak.");
            break;
          case "auth/email-already-in-use":
            alert("The email address is already in use.");
            break;
          case "auth/invalid-email":
            alert("The email address is invalid.");
            break;
          case "auth/network-request-failed":
            alert("A network error has occurred.");
            break;
          case "auth/internal-error":
            alert("An internal server error has occurred.");
            break;
          case "auth/user-disabled":
            alert("The user account has been disabled.");
            break;
          case "auth/operation-not-allowed":
            alert(
              "Email/password accounts are not enabled. Please enable them in the Firebase console."
            );
            break;
          default:
            alert("An unknown error occurred.");
        }
      });
  };

  const handleInputChange = (name, value) => {
    setUserInfo({ ...userInfo, [name]: value });
  };

  return (
    <>
      <Navbar />
      <Section>
        <Subsection>
          <Title>Sign Up</Title>
          <Form action="#">
            <FormRow>
              <FormGroup>
                <Label>First Name</Label>
                <Input
                  type="text"
                  name="firstName"
                  required
                  onChange={(e) =>
                    handleInputChange("firstName", e.target.value)
                  }
                />
              </FormGroup>
              <FormGroup>
                <Label>Last Name</Label>
                <Input
                  type="text"
                  name="lastName"
                  required
                  onChange={(e) =>
                    handleInputChange("lastName", e.target.value)
                  }
                />
              </FormGroup>
            </FormRow>
            <FormRow>
              <FormGroup>
                <Label>Email Address</Label>
                <Input
                  type="email"
                  autoComplete="email"
                  name="email"
                  required
                  onChange={(e) => handleInputChange("email", e.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <Label>Phone number</Label>
                <Input
                  type="number"
                  name="phoneNumber"
                  required
                  onChange={(e) =>
                    handleInputChange("phoneNumber", e.target.value)
                  }
                />
              </FormGroup>
            </FormRow>

            {/* form row with label gender, and 2 radio buttons */}
            <button
              type="button"
              onClick={() => {
                if (userInfo.password === userInfo.confirmPassword) {
                  HandleSignUp();
                }
              }}
            >
              submit
            </button>
          </Form>
        </Subsection>
      </Section>
    </>
  );
}

export default WorkshopForm;

const Section = styled.section`
  height: calc(100vh - 90px);
  transform: translateY(90px);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Subsection = styled.div`
  width: 85%;
  min-height: 85%;
  background: url(${backgroundImage}) no-repeat center center fixed;
  background-size: contain;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;

  /* additional styles for mobile devices */
  @media only screen and (max-width: 768px) {
    height: 50%;
    background-size: cover;
    background-position: center center;
  }
`;

const Title = styled.h1`
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-family: "Century Gothic Bold";
  text-align: center;
  color: white;
`;

// const Container = styled.div`
//   max-width: 900px;
//   width: 100%;
//   padding: 25px 30px;
//   border-radius: 5px;
// `;

const Form = styled.form`
  /* width: 60%; */
  width: clamp(300px, 60%, 650px);
`;

const FormRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const FormGroup = styled.div`
  width: 48%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &.horizontal {
    align-items: center;
    flex-direction: row;
  }

  &.gender {
    gap: 1.2rem;
  }
`;

const Label = styled.label`
  font-size: clamp(1rem, 2.5vw, 1.5rem);
  color: white;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px 10px;
  border: none;
  outline: none;
  border-radius: 10px;
  border: 1px solid #fff;
  padding-left: 15px;
`;

const RadioGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Radio = styled.input.attrs({ type: "radio" })`
  width: 20px;
  height: 20px;
  border: 2px solid #333;
  border-radius: 50%;
  margin-right: 10px;
  position: relative;
  /* top: 5px; */
  outline: none;
  cursor: pointer;
  border: 1px solid white;
  background-color: ${CONSTANTS.purpleActive};
  accent-color: ${CONSTANTS.purpleDark};

  &:checked {
    background-color: ${CONSTANTS.purpleActive};
    accent-color: ${CONSTANTS.purpleDark};
  }

  &:after {
    /* content: ""; */
    width: 12px;
    height: 12px;
    background-color: white;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    transition: transform 0.2s ease-in-out;
  }

  &:checked:after {
    transform: translate(-50%, -50%) scale(1);
  }
`;
