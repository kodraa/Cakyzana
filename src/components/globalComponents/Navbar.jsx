import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import WhiteCart from '../../designAssets/Navbar/White Cart.png'
import BlackCart from '../../designAssets/Navbar/Black Cart.png'
import WhiteLogo from '../../designAssets/Navbar/White Navbar Logo.png'
import BlackLogo from '../../designAssets/Navbar/Black Navbar Logo.png'

function Navbar(props) {
  return (
    <Header>
      <LogoContainer>        
        <Logo src={props.isLogoWhite ? WhiteLogo : BlackLogo}/>
      </LogoContainer>
      <NavLinksContainer>
        <Link to="/" style={styles.Link} className={props.isWhite && 'white'}>
        <NavLink className={props.isWhite && 'white'}>Home</NavLink>
        </Link>
        <Link to="/classes" style={styles.Link} className={props.isWhite && 'white'}>
        <NavLink className={props.isWhite && 'white'}>Classes</NavLink>
        </Link>
        <Link to="/utensils" style={styles.Link}>
        <NavLink className={props.isWhite && 'white'}>Utensils</NavLink>
        </Link>
        <NavLink className={(props.isHalfWhite || props.isWhite ) && 'white' }>Educate</NavLink>
        <NavLink className={(props.isHalfWhite || props.isWhite ) && 'white' }>LogIn</NavLink>
        <NavLink>
          <Img src={props.isCartWhite ? WhiteCart : BlackCart} alt="cart icon"/>
        </NavLink>
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

const NavLink = styled.li`
  font-size: 1.2rem;
  list-style: none;

  &.white {
    color: white;
  }
`;

const Img = styled.img`
  height: 75%;
  width: 75%;
  object-fit: contain;
`;

const styles = {
  Link: {
    textDecoration: 'none',

    //if classname is white, then color is white else color is black
    color: 'inherit',
    



  },
}
