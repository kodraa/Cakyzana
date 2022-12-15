import React, { useState } from "react";
import styled from "styled-components";
import { CONSTANTS, FullScreenSection } from "../../global";
import LoginBg from "../../designAssets/Login/LoginBg.png";
import LoginWordImg from "../../designAssets/Login/LOG IN.png";
import TTR from "../../designAssets/Login/Top-TopRight.png";
import RBR from "../../designAssets/Login/Right-BottomRight.png";
import BTL from "../../designAssets/Login/Bottom-TopLeft.png";
import LBL from "../../designAssets/Login/Left-BottomLeft.png";
import Stars from "../../designAssets/Login/Stars.png";
import BackArrow from "../../designAssets/Login/Left Arrow.png";
import { Link } from "react-router-dom";

function Login() {
  const [isActive, setIsActive] = useState(false);

  return (
    <LoginAnimationPage>
      <Image src={LoginBg} />
      <LoginRectangleWrapper className={isActive && "active"}>
        <WhiteRectangle>
          <WhiteRectangleContent>
            <StarsImg src={Stars} />
            <LoginRectangle>
              <LoginRectangleTitle>Log In</LoginRectangleTitle>
              <LoginFormContainer>
                <LoginForm>
                  <InputsGroup>
                    <FormGroup>
                      <Label>Username</Label>
                      <Input type="text" />
                    </FormGroup>
                    <FormGroup>
                      <Label>Password</Label>
                      <Input type="password" />
                    </FormGroup>
                  </InputsGroup>
                  <p style={{ marginTop: "3%" }}>Forgot password?</p>
                </LoginForm>
                <Cardbtn>Log In</Cardbtn>
                <FlexBottomChild>
                  <p style={{fontSize: '1.1rem'}}>New here?</p>
                  <p style={{  }}>

                    <ToSignup to={"/signup"} >
                      Create an Account
                    </ToSignup>

                  </p>
                </FlexBottomChild>
              </LoginFormContainer>
            </LoginRectangle>
            <Back onClick={() => setIsActive((prev) => !prev)}>
                <BackArrowImg src={BackArrow} />
                <p>Back</p>
            </Back>
          </WhiteRectangleContent>
        </WhiteRectangle>
        <CakeImg
          src={TTR}
          className={"ttr"}
          onClick={() => setIsActive((prev) => !prev)}
        />
        <CakeImg
          src={RBR}
          className={"rbr"}
          onClick={() => setIsActive((prev) => !prev)}
        />
        <CakeImg
          src={BTL}
          className={"btl"}
          onClick={() => setIsActive((prev) => !prev)}
        />
        <CakeImg
          src={LBL}
          className={"lbl"}
          onClick={() => setIsActive((prev) => !prev)}
        />
      </LoginRectangleWrapper>
      <LoginWord src={LoginWordImg} />
    </LoginAnimationPage>
  );
}

export default Login;

const LoginAnimationPage = styled(FullScreenSection)`
  position: relative;
`;

const Image = styled.img`
  position: relative;
  width: 100%;
  height: 100%;
  object-fit: 100%;
  z-index: -1;
`;

const CakeImg = styled.img`
  position: absolute;
  transition: all 1.5s ease;
  transform: scale(0.9);

  &.ttr {
    top: -5%;
    right: 16.7%;
  }
  &.rbr {
    bottom: 21%;
    right: 5%;
  }
  &.btl {
    top: 40%;
    left: 61%;
  }
  &.lbl {
    bottom: 16%;
    left: 49%;
  }
`;

const WhiteRectangle = styled.div`
  transition: all 1.5s ease;
  position: absolute;
  background-color: white;
  top: 40%;
  left: 64.5%;
  right: 19.7%;
  bottom: 31%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 1.5s ease;

  & * {
    opacity: 0;
    transition: all 1.5s ease;
  }
`;

const LoginWord = styled.img`
  width: 907px;
  height: 301px;
  object-fit: contain;
  position: absolute;
  left: 39.3%;
  top: 32.5%;
  transition: all 1.5s ease;
  pointer-events: none;
`;

const LoginRectangleWrapper = styled.div`
  position: absolute;
  top: 13.435%;
  left: 12.73%;
  right: 8%;
  bottom: 13.435%;
  transition: all 1.5s ease;

  &.active ${WhiteRectangle} {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    transition: all 1.5s ease;
  }

  &.active ${WhiteRectangle} * {
    opacity: 1;
    transition: all 1.5s ease;
  }

  &.active ${CakeImg}.ttr {
    position: absolute;
    top: -15%;
    right: -10%;
    transition: all 1.5s ease;
  }

  &.active ${CakeImg}.rbr {
    position: absolute;
    bottom: -15%;
    right: -10%;
    transition: all 1.5s ease;
  }

  &.active ${CakeImg}.btl {
    position: absolute;
    top: -15%;
    left: -10%;
    transition: all 1.5s ease;
  }

  &.active ${CakeImg}.lbl {
    position: absolute;
    bottom: -15%;
    left: -10%;
    transition: all 1.5s ease;
  }

  &.active + ${LoginWord} {
    opacity: 0;
    transition: all 1.5s ease;
  }
`;

const WhiteRectangleContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10%;
  width: 80%;
  height: 100%;
  /* background-color: red; */
  transition: all 1.5s ease;
`;

const StarsImg = styled.img`
  scale: 0.8;
  /* padding-right: 10px; */
  /* transform: translateX(-100%); */
`;

const LoginRectangle = styled.div`
  width: 44%;
  height: 100%;
  /* background-color: blue; */
  padding: 3% 0;
  transform: translateX(-9%);
`;

const LoginRectangleTitle = styled.div`
  width: 100%;
  height: 25%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3.5rem;
  font-family: "Century Gothic Bold", sans serif;
`;

const LoginFormContainer = styled.div`
  width: 100%;
  height: 60%;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const LoginForm = styled.form`
  width: 100%;
  height: 60%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  /* background-color: pink; */
`;

const InputsGroup = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  flex-direction: column;
  gap: 7px;
`;

const FormGroup = styled.div`
  width: 100%;
  height: 45%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 7px;
`;

const Label = styled.label`
  font-size: 1.1rem;
  font-family: "Century Gothic Bold", sans serif;
`;

const Input = styled.input`
  width: 100%;
  height: 70%;
  padding: 0 3%;
  border: 1.5px solid black;
  border-radius: 7px;
  background-color: white;

  &:focus {
    /* box-shadow: 0 0 0 2px black; */
  }
`;

const Cardbtn = styled.button`
  width: 175px;
  text-align: center;
  padding: 10px;
  background-color: ${CONSTANTS.blue};
  color: white;
  border-radius: 32px;
  border: none;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  align-self: center;
`;

const Bold = styled.span`
  font-weight: bold;
`;

const FlexBottomChild = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Back = styled.div`
  align-self: flex-end;
  display: flex;
  align-items: center;
  padding-left: auto;
  color: ${CONSTANTS.pink};
  font-family: "Century Gothic Bold", sans serif;
  margin-bottom: 3%;
  cursor: pointer;

  & p{
    font-size: 1.1rem;
    font-weight: 900;
  }
`;

const BackArrowImg = styled.img`
    height: 100%;
    aspect-ratio: 1 / 1;
    object-fit: contain;
`;

const ToSignup = styled(Link)`
  color: black;
  text-decoration: none;
  font-family: "Century Gothic Bold";
  font-size: 1.1rem;
  display: inline-block;

  &:hover {
    transform: translateY(10%);
  };

`;