import React from "react";
import styled from "styled-components";
import cartIcon from '../../designAssets/Navbar/cart icon.png'

function Navbar(props) {
  return (
    <Header>
      <LogoContainer>
        <Logo src={props.logo}/>
      </LogoContainer>
      <NavLinksContainer>
        <NavLink>Home</NavLink>
        <NavLink>Classes</NavLink>
        <NavLink>Utensils</NavLink>
        <NavLink className={props.isWhite && 'white' }>Educate</NavLink>
        <NavLink className={props.isWhite && 'white' }>LogIn</NavLink>
        <NavLink className={props.isWhite && 'white' }>
          <Img src={cartIcon} alt="cart icon"/>
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

  &.white{
    color: white;
  }
`;

const Img = styled.img`
  height: 75%;
  width: 75%;
  object-fit: contain;
`
