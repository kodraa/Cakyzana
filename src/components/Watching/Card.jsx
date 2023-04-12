import React from "react";
import styled from "styled-components/macro";
import vid1 from "../../designAssets/WatchVideo/vid1.mp4";
import vid2 from "../../designAssets/WatchVideo/vid2.mp4";
import vid3 from "../../designAssets/WatchVideo/vid3.mp4";
import cake1 from "../../designAssets/WatchVideo/cake1.jpg";
import cake2 from "../../designAssets/WatchVideo/cake2.jpg";
import cake3 from "../../designAssets/WatchVideo/cake3.jpg";
import av1 from "../../designAssets/WatchVideo/av1.png";
import { Link } from "react-router-dom";
import { CONSTANTS } from "../../global";


// todo fix video src

const Card = ({ type, onClick, id, vid, title, duration }) => {

  // get the text in duration before :
  // duration = "18:00"
  // duration string = "18"
  const durationString = duration.split(":")[0];

  return (
    <Container type={type}>
        <Wrapper key={id} onClick={() => onClick()}>
          {/* <Img type={type} src={thumbnail} /> */}
          <Details type={type}>
            {/* <ChannelImage type={type} src={av1} /> */}
            <Texts>
              <Title>{title}</Title>
              {/* <ChannelName> Sawsan Habbal </ChannelName> */}
              <Info>{durationString} mins</Info>
            </Texts>
          </Details>
        </Wrapper>
    </Container>
  );
};

export default Card;



const Container = styled.div`
  /* width: ${(props) => props.type !== "sm" && "360px"}; */
  width: 100%;
  /* margin-bottom: ${(props) => (props.type === "sm" ? "10px" : "45px")}; */
  border-top: 1px solid ${CONSTANTS.grayblack};
  cursor: pointer;
  display: ${(props) => props.type === "sm" ? "flex" : "block"};
  flex-wrap: wrap;
  padding: 6px 0;

  &:hover {
    background-color: #d1d7dc;
  }

  &.active {
    background-color: #d1d7dc;
  }
`;
const Wrapper = styled.div`
  display: flex;
`;
const Img = styled.img`
  width: ${(props) => props.type === "sm" ? "100%" : "260px"};
  height: ${(props) => (props.type === "sm" ? "150px" : "202px")};
  background-color: #999;
  border-radius: 7%;
  object-fit: cover;
`;
const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 12px;
`;
const ChannelImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #999;
  display: ${(props) => props.type === "sm" && "none"};
`;
const Texts = styled.div``;
const Title = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;
const ChannelName = styled.h2`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
  margin: 10px 0px;
`;
const Info = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
`;