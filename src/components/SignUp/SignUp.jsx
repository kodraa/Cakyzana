import React from "react";
import styled from "styled-components";
import backgroundImage from "../../designAssets/SignUp/background2.png";

function SignUp() {
  return (
    <Body>
      <Img src={backgroundImage} />
      <Container>
        <Title>Sign Up</Title>
        <Form action="#">
          <UserDetails>
            <InputBox>
              <Details>First Name</Details>
              <Input type="text" required></Input>
            </InputBox>

            <InputBox>
              <Details>Phone number</Details>
              <Input type="text" required></Input>
            </InputBox>

            <InputBox>
              <Details>Last Name</Details>
              <Input type="text" required></Input>
            </InputBox>

            <InputBox>
              <Details>User Name</Details>
              <Input type="text" required></Input>
            </InputBox>

            <InputBox>
              <Details>Email Address</Details>
              <Input type="text" required></Input>
            </InputBox>

            <InputBox>
              <Details>Password</Details>
              <Input type="text" required></Input>
            </InputBox>

            <InputBox>
              <Details>Birth Date</Details>
              <Input type="text" required></Input>
            </InputBox>

            <InputBox>
              <Details>Confirm Password</Details>
              <Input type="text" required></Input>
            </InputBox>
          </UserDetails>

          <GenderDetails>
            <Category>
              <GenderTitle>Gender:</GenderTitle>
              <Label>
                <Radio type="radio" name="gender"></Radio>
                <Gender>Male</Gender>
              </Label>
              <Label>
                <Radio type="radio" name="gender"></Radio>
                <Gender>Female</Gender>
              </Label>
              <Button>Submit</Button>
            </Category>
          </GenderDetails>
        </Form>
      </Container>
    </Body>
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
  text-align:center;
`;

const Form = styled.form``;

const Body = styled.body`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  /* background-image: url(${backgroundImage});
  background-size: auto; */
  padding: 10px;
  color:#fff;
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
  font-size:20px;
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
  position:relative;

`;

const GenderTitle = styled.span`
  font-weight: bold;
  font-size:20px;
`;

const Category = styled.div`
  display: flex;
  width: 40%;
  justify-content: space-between;
  margin: 14px 0;
  align-items:center;
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
    position:absolute;
    right:0%;
    background-color: #FA2D8A;
    border: none;
    border-radius: 18px;
    font-weight: bold;
    width: 22.5%;
    padding: 12.5px;
    color:#fff;
    font-size:16px;

    &:hover {
    cursor: pointer;
    }
`;

const Radio = styled.input`
    width:20px;
    height:20px;
    accent-color:purple;
`;

const Img = styled.img`
  position: absolute;
  z-index: -1;
  top: 8%;
  left: 8%;
  width: 85%;
  height: 85%;
`;