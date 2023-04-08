import React from "react";
import styled from "styled-components/macro";
import CakyzanaFooterLogo from "../../designAssets/Footer/CakyzanaFooterLogo.png";
import { CONSTANTS } from "../../global";
import Facebook from "../../designAssets/Footer/FacebookFooterLogo.png";
import Tiktok from "../../designAssets/Footer/TiktokFooterLogo.png";
import Instagram from "../../designAssets/Footer/InstagramFooterLogo.png";
import Youtube from "../../designAssets/Footer/YoutubeFooterLogo.png";
import LinkedIn from "../../designAssets/Footer/LinkedInFooterLogo.png";

// todo fix links

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
          <FooterChildContent className="padded">
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
  min-height: 300px;
  /* max-height: max-content; */
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${CONSTANTS.purpleActive};
`;

const FooterContent = styled.div`
  height: 100%;
  width: 87%;
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const FooterFlexChild = styled.div`
  height: 100%;
  width: 25%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
`;

const FooterChildContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  &.padded {
    @media (max-width: 768px) {
      padding-bottom: 10%;
    }
  }
`;

const LogoContainer = styled.div`
  height: 100%;
  width: 100%;
  max-width: 400px;
`;

const FooterLogo = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

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
  /* font-size: 0.75rem; */
  font-size: clamp(0.5rem, 1.75vw, 1.25rem);
  border: none;
  outline: none;
  padding-left: 10%;
  /* padding-top: 3%; */
  display: flex;
  align-items: center;
`;
