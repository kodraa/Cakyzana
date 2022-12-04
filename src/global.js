import styled from "styled-components";

export let CONSTANTS = {
    pink: '#F92D88',
    purpleActive: '#451E5D',
    purpleSemiActive: '#6D2E8C',
    purpleInactive: '#8D57A0',
    yellow: '#EEFF00',
    blue: '#4ECADD',
    fosfore: '#E4FF00'
}

export const FullScreenSection = styled.section`
  height: 100vh;
  width: 100%;
  /* background-color: pink; */
  display: flex;
  justify-content: center;
`;

export const ContentContainer = styled.div`
  height: 100%;
  width: 85%;
  /* background-color: blue; */
`;

export let BasicContentDiv = styled.div`
  height: calc(100vh - 10rem);
`