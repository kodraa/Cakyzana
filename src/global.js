import styled from "styled-components";

export let CONSTANTS = {
    pink: '#F92D88',
    purpleActive: '#451E5D',
    purpleSemiActive: '#6D2E8C',
    purpleInactive: '#8D57A0',
    purpleDark: '#2C1346',
    yellow: '#EEFF00',
    blue: '#4ECADD',
    fosfore: '#E4FF00',
    graywhite:'#F6F6F6',
    grayblack:'#545454'
}

export const FullScreenSection = styled.section`
  background-color: ${props => props.isGrey ? CONSTANTS.graywhite : 'transparent'};
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center; //to center ContentContainer in the middle of the screen
  /* background-color: pink; */
`;

export const ContentContainer = styled.div`
  height: 100%;
  width: 87%; //width 85% to match the grid of the XD file
  /* background-color: blue; */
`;

export let BasicContentDiv = styled.div`
  height: calc(100vh - 12rem); //to complement the 12rem of EngArTitle
`

export const BasicLandingSection = styled.div`
  height: calc(100vh - 90px); //to complement the 70px of Navbar
`