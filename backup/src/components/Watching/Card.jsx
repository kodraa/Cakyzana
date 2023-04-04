import React from "react";
import styled from "styled-components";
import vid1 from "../../designAssets/WatchVideo/vid1.mp4";
import vid2 from "../../designAssets/WatchVideo/vid2.mp4";
import vid3 from "../../designAssets/WatchVideo/vid3.mp4";
import cake1 from "../../designAssets/WatchVideo/cake1.jpg";
import cake2 from "../../designAssets/WatchVideo/cake2.jpg";
import cake3 from "../../designAssets/WatchVideo/cake3.jpg";
import av1 from "../../designAssets/WatchVideo/av1.png";

const Container = styled.div`
  width: ${(props) => props.type !== "sm" && "360px"};
  margin-bottom: ${(props) => (props.type === "sm" ? "10px" : "45px")};
  cursor: pointer;
  display: ${(props) => props.type === "sm" && "flex"};
  gap: 10px;
`;
const img = styled.img`
  width: 100%;
  height: ${(props) => (props.type === "sm" ? "120px" : "202px")};
  background-color: #999;
  border-radius: 7%;
  flex: 1;
`;
const Details = styled.div`
  display: flex;
  margin-top: ${(props) => props.type !== "sm" && "16px"};
  gap: 12px;
  flex: 1;
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

const Card = ({ type }) => {
  return (
    //  <Link to="/watching/test" style={{textDecoration:"none"}}>
    <Container type={type}>
      <ul>
        {videoData.map((video) => (
          <div
            key={video.id}
            onClick={() => {
              setVideoP(video.vid);
              console.log("clicked" + video.vid);
            }}
          >
            <img type={type} src={video.thumbnail} />
            <Details type={type}>
              <ChannelImage type={type} src={av1} />
              <Texts>
                <Title>{video.title}</Title>
                <ChannelName> Sawsan Habbal </ChannelName>
                <Info> 70,000 views * 1 day ago</Info>
              </Texts>
            </Details>
          </div>
        ))}
      </ul>
    </Container>
    // </Link>
  );
};

export default Card;

const videoData = [
  {
    id: "1",
    title: "Buttercream Tutorial",
    url: "../../designAssets/WatchVideo/vid1.mp4",
    extension: "vid1.mp4",
    vid: vid1,
    thumbnail: cake1,
  },
  {
    id: "2",
    title: "Sugar Paper Tutorial",
    url: "../../designAssets/WatchVideo/vid2.mp4",
    extension: "vid2.mp4",
    vid: vid3,
    thumbnail: cake2,
  },
  {
    id: "3",
    title: "Piping Tutorial",
    url: "../../designAssets/WatchVideo/vid3.mp4",
    extension: "vid3.mp4",
    vid: vid3,
    thumbnail: cake3,
  },
];
