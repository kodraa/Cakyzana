import React, { useState } from "react";
import styled from "styled-components/macro";
import backgroundImage from "../../designAssets/SignUp/background2.png";
import Navbar from "../globalComponents/Navbar";
import { db, auth } from "../../firebase";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    password: "",
    birthDate: "",
    confirmPassword: "",
    phoneNumber: "",
    gender: "",
  });

  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const navigate = useNavigate();
  const HandleSignUp = () => {
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

  const CheckPassword = (value) => {
    if (value === userInfo.password) {
      setPasswordsMatch(true);
    } else {
      setPasswordsMatch(false);
    }
  };

  return (
    <>
      <Navbar />
      <Body>
        <Img src={backgroundImage} />
        <Container>
          <Title>Sign Up</Title>
          <Form
            onSubmit={() => {
              if (passwordsMatch) {
                HandleSignUp();
              }
            }}
            action="#"
          >
            <UserDetails>
              <InputBox>
                <Details>First Name</Details>
                <Input
                  type="text"
                  name="firstName"
                  required
                  onChange={(e) =>
                    handleInputChange("firstName", e.target.value)
                  }
                ></Input>
              </InputBox>

              <InputBox>
                <Details>Phone number</Details>
                <Input
                  type="text"
                  name="phoneNumber"
                  required
                  onChange={(e) =>
                    handleInputChange("phoneNumber", e.target.value)
                  }
                ></Input>
              </InputBox>

              <InputBox>
                <Details>Last Name</Details>
                <Input
                  type="text"
                  name="lastName"
                  required
                  onChange={(e) =>
                    handleInputChange("lastName", e.target.value)
                  }
                ></Input>
              </InputBox>

              <InputBox>
                <Details>User Name</Details>
                <Input
                  type="text"
                  name="userName"
                  required
                  onChange={(e) =>
                    handleInputChange("userName", e.target.value)
                  }
                ></Input>
              </InputBox>

              <InputBox>
                <Details>Email Address</Details>
                <Input
                  type="text"
                  name="email"
                  required
                  onChange={(e) => handleInputChange("email", e.target.value)}
                ></Input>
              </InputBox>

              <InputBox>
                <Details>Password</Details>
                <Input
                  type="text"
                  name="password"
                  required
                  onChange={(e) =>
                    handleInputChange("password", e.target.value)
                  }
                ></Input>
              </InputBox>

              <InputBox>
                <Details>Birth Date</Details>
                <Input
                  type="text"
                  name="birthDate"
                  required
                  onChange={(e) =>
                    handleInputChange("birthDate", e.target.value)
                  }
                ></Input>
              </InputBox>

              <InputBox>
                <Details>Confirm Password</Details>
                <Input
                  type="text"
                  name="confirmPassword"
                  required
                  onChange={(e) => CheckPassword(e.target.value)}
                ></Input>
                {passwordsMatch ? null : (
                  <Details2>Passwords doesnt match</Details2>
                )}
              </InputBox>
            </UserDetails>

            <GenderDetails>
              <Category>
                <GenderTitle>Gender:</GenderTitle>
                <Label>
                  <Radio
                    type="radio"
                    name="gender"
                    value="male"
                    onChange={(e) => {
                      handleInputChange("gender", e.target.value);
                    }}
                  />
                  <Gender>Male</Gender>
                </Label>
                <Label>
                  <Radio
                    type="radio"
                    name="gender"
                    value="female"
                    onChange={(e) => {
                      handleInputChange("gender", e.target.value);
                    }}
                  />
                  <Gender>Female</Gender>
                </Label>
                <Button
                  onClick={() => {
                    if (passwordsMatch) {
                      HandleSignUp();
                    }
                  }}
                  type="button"
                >
                  Submit
                </Button>
              </Category>
            </GenderDetails>
          </Form>
        </Container>
      </Body>
    </>
  );
}

export default SignUp;

const Container = styled.div`
  max-width: 900px;
  width: 100%;
  padding: 25px 30px;
  border-radius: 5px;
`;

const Title = styled.div`
  font-size: 55px;
  font-weight: bolder;
  text-align: center;
`;

const Form = styled.form``;

const Body = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  /* background-image: url(${backgroundImage});
  background-size: auto; */
  padding: 10px;
  color: #fff;
`;

const UserDetails = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 35px 0 12px 0;
`;

const InputBox = styled.div`
  width: calc(100% / 2 - 20px);
  margin-bottom: 25px;
`;

const Details = styled.span`
  display: block;
  font-size: 20px;
`;

const Details2 = styled.span`
  display: block;
  font-size: 15px;
  color: red;
`;

const Input = styled.input`
  margin-top: 5px;
  height: 45px;
  width: 100%;
  outline: none;
  border-radius: 10px;
  border: 1px solid #fff;
  padding-left: 15px;
  font-size: 16px;
`;

const GenderDetails = styled.div`
  position: relative;
`;

const GenderTitle = styled.span`
  font-weight: bold;
  font-size: 20px;
`;

const Category = styled.div`
  display: flex;
  width: 40%;
  justify-content: space-between;
  margin: 14px 0;
  align-items: center;
`;

const Label = styled.label`
  display: flex;
  align-items: center;
`;

const Gender = styled.span`
  margin-left: 10px;
  font-size: 20px;
`;

const Button = styled.button`
  position: absolute;
  right: 0%;
  background-color: #fa2d8a;
  border: none;
  border-radius: 18px;
  font-weight: bold;
  width: 22.5%;
  padding: 12.5px;
  color: #fff;
  font-size: 16px;

  &:hover {
    cursor: pointer;
  }
`;

const Radio = styled.input`
  width: 20px;
  height: 20px;
  accent-color: purple;
`;

const Img = styled.img`
  position: absolute;
  z-index: -1;
  /* top: 8%; */
  /* left: 8%; */
  top: 52.5%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 85%;
  height: 85%;
`;
