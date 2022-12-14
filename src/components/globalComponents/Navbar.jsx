import React, { useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import WhiteCart from "../../designAssets/Navbar/White Cart.png";
import BlackCart from "../../designAssets/Navbar/Black Cart.png";
import WhiteLogo from "../../designAssets/Navbar/White Navbar Logo.png";
import BlackLogo from "../../designAssets/Navbar/Black Navbar Logo.png";
import { CartContext } from "../../context";
import { CONSTANTS } from "../../global";
function Navbar(props) {
  const [cart, setCart] = useContext(CartContext);
  return (
    <Header>
      <LogoContainer>
        <Logo src={props.isLogoWhite ? WhiteLogo : BlackLogo} />
      </LogoContainer>
      <NavLinksContainer>
        <Link to="/" style={styles.Link} className={props.isWhite && "white"}>
          <NavLink className={props.isWhite && "white"}>Home<BottomBorder></BottomBorder></NavLink>
        </Link>
        <Link
          to="/classes"
          style={styles.Link}
          className={props.isWhite && "white"}
        >
          <NavLink className={props.isWhite && "white"}>Classes<BottomBorder></BottomBorder></NavLink>
        </Link>
        <Link to="/utensils" style={styles.Link}>
          <NavLink className={(props.isHalfWhite || props.isWhite) && "white"}>Utensils<BottomBorder></BottomBorder></NavLink>
        </Link>
        <Link to="/login" style={styles.Link}>
        <NavLink className={(props.isHalfWhite || props.isWhite) && "white"}>
          LogIn<BottomBorder></BottomBorder>
        </NavLink>
        </Link>
        <Link to="/cart">
          <NavLink>
            <Img
              src={props.isCartWhite ? WhiteCart : BlackCart}
              alt="cart icon"
            />
            <Badge>{cart.total > 0 && cart.total}</Badge>
            {/* <h5>{cart.total > 0 && cart.total}</h5> */}
          </NavLink>
        </Link>
      </NavLinksContainer>
    </Header>
  );
}

export default Navbar;

const Header = styled.header`
  height: 70px;
  width: 87%;
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoContainer = styled.div`
  height: 100%;
  width: 21%;
`;

const Logo = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
`;

const NavLinksContainer = styled.ul`
  height: 100%;
  width: 60%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 30px;
`;

const BottomBorder=styled.div`
  opacity:0;
  border-bottom: 3px solid;
  width: 65%;
`;

const NavLink = styled.li`
  font-size: 1.2rem;
  list-style: none;

  &.white {
    color: white;
  }

  &:hover {
    font-weight:bolder;
    cursor:pointer;

    ${BottomBorder}{
      opacity:1;
    }
  }
`;

const Img = styled.img`
  height: 75%;
  width: 75%;
  object-fit: contain;
`;

const Badge=styled.div`
  position: absolute;
  top: 18px;
  right: 22px;
  height: 12px;
  width: 12px;
  background-color: ${CONSTANTS.pink};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 0.5rem;
  font-weight: 600;
`;

const styles = {
  Link: {
    textDecoration: "none",

    //if classname is white, then color is white else color is black
    color: "inherit",
  },
};
