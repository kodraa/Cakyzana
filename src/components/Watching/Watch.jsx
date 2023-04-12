import React, { useState, useRef, useEffect, useContext } from "react";
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
import { useParams } from "react-router-dom";
import firebase from "firebase/compat/app";
import { db } from "../../firebase";
import { AuthContext } from "../../AuthContext";
import { combineLatest } from "rxjs";
import { map } from "rxjs/operators";

// todo make this page responsive

const Watch = (props) => {
  const { userData } = useContext(AuthContext);

  const { classId } = useParams();
  const videoRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [videosData, setVideosData] = useState([]);
  const [classData, setClassData] = useState(null);
  const [commentsData, setCommentsData] = useState([]);
  const [videoP, setVideoP] = useState();

  useEffect(() => {
    db.collection("Classes")
      .doc(classId)
      .get()
      .then((doc) => {
        if (doc.exists) {
          setClassData(doc.data());
        } else {
          console.log("No such document!");
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  }, [classId]);

  useEffect(() => {
    const videos = [];
    console.log("userData", userData);
    if (classData) {
      db.collection("Video")
        .where(
          firebase.firestore.FieldPath.documentId(),
          "in",
          classData.videos
        )
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            videos.push({ id: doc.id, ...doc.data() });
          });
          setVideosData(videos);
          // console.log("videos", videos);
        })
        .then(() => {
          const lastWatchedVideoId = userData.classes[classId].lastWatchedVideo;
          // console.log(
          //   "lastWatchedVideoId",
          //   lastWatchedVideoId
          // );
          const video = videos.find((video) => {
            // console.log("video.id", video.id);
            // console.log(video.id, lastWatchedVideoId, video.id === lastWatchedVideoId);
            return video.id === lastWatchedVideoId;
          });
          // console.log("video", video);
          setVideoP(video.URL);
        })
        .catch((error) => {
          console.log("Error getting documents: ", error);
        });
    }
  }, [classData]);

  useEffect(() => {
    videoRef.current?.load();
    console.log("videoRef.current", videoRef.current);
    console.log("videoP", videoP);
  }, [videoP, videoRef]);

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

  const handleVideoChange = (newVid) => {
    setVideoP(newVid);
    console.log("newVid", newVid);
  };

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
      vid: vid2,
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

  return (
    <>
      <Container>
        <Navbar />
        <Content>
          <VideoWrapper>
            <video
              onTimeUpdate={handleProgress}
              ref={videoRef}
              key={videoP}
              src={videoP}
              id={videoP}
              controls
              width="100%"
              // height="707"
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
                  Are you tired of frosting that's too runny or too sweet? Do
                  you want to learn how to make frosting that's perfectly creamy
                  and delicious every time? Look no further! In this tutorial,
                  we'll show you how to make the perfect frosting using just a
                  few simple ingredients. Our recipe is easy to follow and
                  produces a frosting that's not too sweet, not too runny, and
                  not too stiff. We'll walk you through each step of the
                  process, from measuring out the ingredients to mixing
                  everything together to achieve the perfect consistency.
                  Whether you're a beginner baker or an experienced pro, this
                  recipe is sure to become your go-to for all your frosting
                  needs. You can use it to frost cakes, cupcakes, cookies, and
                  more. Plus, you can easily customize the recipe to suit your
                  taste preferences by adding different flavors and colors. So,
                  if you want to take your baking to the next level, join us in
                  this tutorial and learn how to make perfect frosting every
                  time.{" "}
                </Description>
              </ChannelDetail>
            </ChannelInfo>
          </Channel>
          <Hr />
          <Comments
            classId={classId}
            classData={classData}
            comments={commentsData}
            setCommentsData={setCommentsData}
            userName={userData?.userName}
            userEmail={userData?.email}
          />
        </Content>
        <Playlist>
          {/* {videoData.map((video) => {
            return (
              <Card
                key={video.id}
                id={video.id}
                type="sm"
                onClick={() => handleVideoChange(video.vid)}
                vid={video.vid}
                thumbnail={video.thumbnail}
                title={video.title}
              />
            );
          })} */}
          {videosData.map((video) => {
            return (
              <Card
                key={video.id}
                id={video.id}
                type="sm"
                onClick={() => handleVideoChange(video.URL)}
                vid={video.URL}
                duration={video.Duration}
                // thumbnail={video.thumbnail}
                title={video.Title}
              />
            );
          })}

          {/* <Card type="sm" onClick={handleVideoChange} />
          <Card type="sm" onClick={handleVideoChange} />
          <Card type="sm" onClick={handleVideoChange} /> */}
          {/* <Card type="sm" onClick={handleVideoChange} />
          <Card type="sm" onClick={handleVideoChange} />
          <Card type="sm" onClick={handleVideoChange} />
          <Card type="sm" onClick={handleVideoChange} />
          <Card type="sm" onClick={handleVideoChange} />
          <Card type="sm" onClick={handleVideoChange} />
          <Card type="sm" onClick={handleVideoChange} />
          <Card type="sm" onClick={handleVideoChange} />
          <Card type="sm" onClick={handleVideoChange} />
          <Card type="sm" onClick={handleVideoChange} />
          <Card type="sm" onClick={handleVideoChange} />
          <Card type="sm" onClick={handleVideoChange} />
          <Card type="sm" onClick={handleVideoChange} />
          <Card type="sm" onClick={handleVideoChange} /> */}
        </Playlist>
      </Container>
    </>
  );
};

export default Watch;

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
  display: flex;
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
  display: flex;
  flex-direction: column;
  /* background-color: red; */
`;

const ChannelName = styled.span`
  font-weight: 500;
`;

const Description = styled.p`
  font-size: 14px;
`;
