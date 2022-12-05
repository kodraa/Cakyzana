import React from "react";
import styled from "styled-components";
import CakyzanaFooterLogo from "../../designAssets/Footer/CakyzanaFooterLogo.png";
import { CONSTANTS } from "../../global";
import Facebook from "../../designAssets/Footer/FacebookFooterLogo.png";
import Tiktok from "../../designAssets/Footer/TiktokFooterLogo.png";
import Instagram from "../../designAssets/Footer/InstagramFooterLogo.png";
import Youtube from "../../designAssets/Footer/YoutubeFooterLogo.png";
import LinkedIn from "../../designAssets/Footer/LinkedInFooterLogo.png";

function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterFlexChild>
          <LogoContainer>
            <FooterLogo src={CakyzanaFooterLogo} />
          </LogoContainer>
        </FooterFlexChild>
        <FooterFlexChild>
          <FooterChildContent>
            <FooterChildTitle>Menu</FooterChildTitle>
            <FooterNavLinksContainer>
              <FooterNavLink>Classes</FooterNavLink>
              <FooterNavLink>Utensils</FooterNavLink>
              <FooterNavLink>Tips & Tricks</FooterNavLink>
              <FooterNavLink>Log In/ Sign Up</FooterNavLink>
            </FooterNavLinksContainer>
          </FooterChildContent>
        </FooterFlexChild>
        <FooterFlexChild>
          <FooterChildContent>
            <FooterChildTitle>Follow Us</FooterChildTitle>
            <FooterSocialsContainer>
              <FooterSocialsItem>
                <FooterSocialsIcon data-name="facebook" src={Facebook} />
              </FooterSocialsItem>
              <FooterSocialsItem>
                <FooterSocialsIcon src={Tiktok} />
              </FooterSocialsItem>
              <FooterSocialsItem>
                <FooterSocialsIcon src={Instagram} />
              </FooterSocialsItem>
              <FooterSocialsItem>
                <FooterSocialsIcon src={Youtube} />
              </FooterSocialsItem>
              <FooterSocialsItem>
                <FooterSocialsIcon src={LinkedIn} />
              </FooterSocialsItem>
            </FooterSocialsContainer>
          </FooterChildContent>
        </FooterFlexChild>
        <FooterFlexChild>
          <FooterChildContent>
            <FooterChildTitle>Subscribe to our newsletter</FooterChildTitle>
            <NewsletterInput type="text" placeholder="Enter your email here" />
          </FooterChildContent>
        </FooterFlexChild>
      </FooterContent>
    </FooterContainer>
  );
}

export default Footer;

const FooterContainer = styled.footer`
  height: 300px;
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: ${CONSTANTS.purpleActive};
`;

const FooterContent = styled.div`
  height: 100%;
  width: 87%;
  display: flex;
`;

const FooterFlexChild = styled.div`
  height: 100%;
  width: 25%;
  display: flex;

  justify-content: center;
  align-items: center;
`;

const FooterChildContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const LogoContainer = styled.div``;

const FooterLogo = styled.img``;

const FooterChildTitle = styled.h3`
  font-size: 1.65rem;
  color: white;
  margin-bottom: 13px;
`;

const FooterNavLinksContainer = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const FooterNavLink = styled.li`
  list-style: none;
  font-size: 1.25rem;
  color: white;
`;

const FooterSocialsContainer = styled.ul`
  display: flex;
  justify-content: flex-start;
`;

const FooterSocialsItem = styled.li`
  list-style: none;
  color: white;
  margin: 0;
  height: 40px;
  width: 40px;
`;

const FooterSocialsIcon = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  transform: translateX(-60%);

  &[data-name="facebook"] {
    transform: translateX(-30%);
  }
`;

const NewsletterInput = styled.input`
  height: 50px;
  width: 100%;
  border-radius: 9999px;
  border: none;
  outline: none;
  padding-left: 10%;
  padding-top: 3%;
`;
