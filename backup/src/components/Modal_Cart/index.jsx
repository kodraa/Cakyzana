import React, { Fragment } from "react";
import {
  ModalBlock,
  ModalBody,
  ModalContainer,
  ModalImage,
  Btn,
  ModalFooter,
  ModalHeader,
  Title
} from "./modal.styles";
import { Link } from "react-router-dom";
const Modal = ({ title, footer, active, hideModal, item }) => {
  return (
    <Fragment>
      {active && (
        <ModalBlock>
          <ModalContainer>
            <ModalHeader>
              <Title>{item.name}</Title>
            </ModalHeader>
            <ModalBody>
              <ModalImage
                src={require(`../../designAssets/Utensils/${item?.image}.png`)}
                alt="utensil"
              />
              <div>
                <h4>Quantity: 1</h4>
                <h4>Price: {item.price}</h4>
              </div>

            </ModalBody>
            <ModalFooter>
              <Link to="/cart">
            <Btn>
              View Cart
              </Btn>
              </Link>
            </ModalFooter>
          </ModalContainer>
        </ModalBlock>
      )}
    </Fragment>
  );
};
export default Modal;
