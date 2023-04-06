import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components/macro";
import {
  BasicLandingSection,
  CONSTANTS,
  FullScreenSection,
} from "../../global";
import Navbar from "../globalComponents/Navbar";
import vid1 from "../../designAssets/WatchVideo/vid1.mp4";
 import vid2 from "../../designAssets/WatchVideo/vid2.mp4";
import vid3 from "../../designAssets/WatchVideo/vid3.mp4";
import cake1 from "../../designAssets/WatchVideo/cake1.jpg";
import cake2 from "../../designAssets/WatchVideo/cake2.jpg";
import cake3 from "../../designAssets/WatchVideo/cake3.jpg";
import Comments from "./Comments";
import Comment from "./Comment";
import Card from "./Card";

const Container = styled.div`
  display: flex;
  gap: 34px;
   margin-top: 160px;
  padding-left: 100px;
  // width: 2020px;
`;

const Content = styled.div`
  flex: 4;

`;

const VideoWrapper = styled.div`
display:flex;
`;

const Title = styled.h1`
  font-size: 18px;
  font-weight: 400;
  margin-top: 20px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.text};
`;

const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Info = styled.span`
  color: ${({ theme }) => theme.textSoft};
`;

const Hr = styled.hr`
  margin: 15px 0px;
  border: 0.5px solid ${({ theme }) => theme.soft};
  color: transparent;
`;

const Channel = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ChannelInfo = styled.div`
  display: flex;
  gap: 20px;
`;

const ChannelDetail = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.text};
`;

const Playlist = styled.div`
  flex: 2;
`;

const ChannelName = styled.span`
  font-weight: 500;
`;

const Description = styled.p`
  font-size: 14px;
`;

const Watch = (props) => {

  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef(null);

  const togglePlay = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleProgress = () => {
    const duration = videoRef.current.duration;
    const currentTime = videoRef.current.currentTime;
    const progress = (currentTime / duration) * 100;
    setProgress(progress);
  };

  const [videoP, setVideoP] = useState(vid1);
  
  useEffect(() => {    
    videoRef.current?.load();
  }, [videoP]);

  return (
    <>
      <Container>
        <Navbar />
        <Content>
          <VideoWrapper>
            <video
            onTimeUpdate={handleProgress} ref={videoRef} key={videoP} controls
              width="100%"
              // height="707"
              src={vid1}
              title="Frosting"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen={true}
            >
              <source src={videoP} type="video/mp4" />
            </video>
          </VideoWrapper>
          <Title>How to Make Perfect Frosting Every Time</Title>
          <Details>
            <Info> Learn How to Frost! ~ 25 March, 2023 </Info>
          </Details>
          <Hr />
          <Channel>
          <ChannelInfo>
            <ChannelDetail>
              <ChannelName> Sawsan Habbal </ChannelName>
              <Description>
                {" "}
                Are you tired of frosting that's too runny or too sweet? Do you
                want to learn how to make frosting that's perfectly creamy and
                delicious every time? Look no further! In this tutorial, we'll
                show you how to make the perfect frosting using just a few
                simple ingredients. Our recipe is easy to follow and produces a
                frosting that's not too sweet, not too runny, and not too stiff.
                We'll walk you through each step of the process, from measuring
                out the ingredients to mixing everything together to achieve the
                perfect consistency. Whether you're a beginner baker or an
                experienced pro, this recipe is sure to become your go-to for
                all your frosting needs. You can use it to frost cakes,
                cupcakes, cookies, and more. Plus, you can easily customize the
                recipe to suit your taste preferences by adding different
                flavors and colors. So, if you want to take your baking to the
                next level, join us in this tutorial and learn how to make
                perfect frosting every time.{" "}
              </Description>
            </ChannelDetail>
          </ChannelInfo>
          </Channel>

          <Hr />
          <Comments />
        </Content>
        <Playlist>
          <Card type="sm"/>
          <Card type="sm"/>
          <Card type="sm"/>
          <Card type="sm"/>
          <Card type="sm"/>
          <Card type="sm"/>
          <Card type="sm"/>
          <Card type="sm"/>
          <Card type="sm"/>
          <Card type="sm"/>
          <Card type="sm"/>
          <Card type="sm"/>
          <Card type="sm"/>
          <Card type="sm"/>
          <Card type="sm"/>
          <Card type="sm"/>
          <Card type="sm"/>

         
        </Playlist>
      </Container>
    </>
  );
};

export default Watch;
