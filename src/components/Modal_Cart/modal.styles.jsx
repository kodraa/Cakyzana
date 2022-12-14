import styled from "styled-components";
//import { keyframes } from "styled-components";
import { CONSTANTS } from "../../global";
export const ModalBlock = styled.div`
  bottom: 0;
  overflow: hidden;
  padding: 0.4rem;
  position: fixed;
  right: 0;
  top: 4rem;
  display: flex;
  opacity: 1;
  z-index: 400;
  height: fit-content;
  width: 230px;
  border-radius: 10px;

`;

export const ModalOverlay = styled.a`
  background: rgba(247, 248, 249, 0.75);
  bottom: 0;
  cursor: default;
  display: block;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
`;

export const ModalClose = styled.a`
  float: right !important;
  text-decoration: none !important;
  cursor: pointer;
  font-size: 1rem;
`;

export const ModalContainer = styled.div`
  background: #ffffff;
  border-radius: 0.1rem;
  display: flex;
  flex-direction: column;
  max-height: 75vh;
  max-width: 850px;
  padding: 0 0.8rem;
  width: 100%;
  /* animation-name: slideDown;
  animation-duration: 0.5s;
  animation-timing-function: ease; */
  z-index: 1;
  box-shadow: 0 0.2rem 0.5rem rgba(48, 55, 66, 0.3);
  border-radius: 10px;
`;

export const ModalBody = styled.div`
  overflow-y: auto;
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  `;

export const ModalHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: #303742;
  padding: 20px 0px 5px;
`;

export const ModalTitle = styled.span`
  font-size: 30px;
  font-weight: 500;
`;

export const ModalFooter = styled.div`
  padding: 10px 0px;
  text-align: right;
`;

export const Button = styled.button`
  background: #7b2cbf;
  color: white;
  font-size: 1em;
  margin: 10px;
  padding: 5px 10px;
  border: 2px solid #7b2cbf;
  border-radius: 3px;
  cursor: pointer;
`;


export const ModalImage  = styled.img`
  width: 75px
`


export const Btn = styled.button`
width: 200px;
text-align: center;
padding: 5px;
background-color: ${CONSTANTS.pink};
color: white;
border-radius: 32px;
border: none;
font-weight: bold;
font-size: .8rem;
/* margin-top: 1rem; */
`;


export const Title = styled.h5`
font-size: .9rem;
color: ${CONSTANTS.pink};
font-weight: bold;
`

/* export const slideDown = keyframes`  
  /* 0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(0);
  } */
