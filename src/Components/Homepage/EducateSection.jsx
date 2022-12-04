import React from "react";
import { CONSTANTS, BasicContentDiv } from "../../global";
import EngArTitle from "../globalComponents/EngArTitle";
import Section from "../globalComponents/Section";
import styled from "styled-components";

function EducateSection() {
  return (
    <Section>
      <EngArTitle 
        english={"Educate"}
        arabic={"ثقافة كايكية"}
        bottom={"-65%"}
        right={"-95%"}
        arColor={CONSTANTS.pink}
      />
      <ContentDiv> 
        
        <VideoCarouseContainer>
        <VideoHolder> </VideoHolder>
        <VideoHolder> </VideoHolder>
        <VideoHolder> </VideoHolder>
        </VideoCarouseContainer>
        
      </ContentDiv>
    </Section>
  )
}

export default EducateSection

const ContentDiv = styled(BasicContentDiv)`
  display: flex;
  align-items: center;
  `

  const VideoCarouseContainer = styled.div`
  align-self: center;
  width: 100%;
  height: 729px;
  `
const VideoHolder = styled.div`
float: left;
width: 27%;
height: 90%;
margin: 2%;
background-color: orange;
border-radius: 10px;
  `