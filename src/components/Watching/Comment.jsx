import React from "react";
import styled from "styled-components/macro";
import av1 from "../../designAssets/WatchVideo/av1.png";

import moment from "moment";

const Comment = ({
  id,
  userName,
  dateCreated,
  comment,
  classId,
  userEmail,
  setCommentsData,
}) => {
  const date = dateCreated.toDate();
  const timeAgo = moment(date).fromNow();

  return (
    <Container>
      {" "}
      {/* <Avatar src={av1} /> */}
      {/* <Details>
        <Name>
          Leila <Date>1 day ago</Date>
        </Name>
        <Text>
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus
          tristique eros, eu tempor nisi consectetur a. Integer mollis sapien
          vel dolor viverra, vel blandit velit lacinia. Nulla quis ante at ante
          fringilla tincidunt.
        </Text>
      </Details> */}
      <Details>
        <Name>
          {userName} <Date>{timeAgo}</Date>
          {/* {userName} <Date>1 day ago</Date> */}
        </Name>
        <Text> {comment}</Text>
      </Details>
    </Container>
  );
};

export default Comment;

const Container = styled.div`
  display: flex;
  gap: 10px;
  margin: 30px 0px;
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: ${({ theme }) => theme.text};
`;

const Name = styled.span`
  font-size: 13px;
  font-family: "Century Gothic Bold";
`;

const Date = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.textSoft};
  margin-left: 5px;
`;

const Text = styled.span`
  font-size: 14px;
`;
