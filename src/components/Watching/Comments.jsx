import React, { useEffect, useState } from "react";
import styled from "styled-components/macro";
import av1 from "../../designAssets/WatchVideo/av1.png";
import Comment from "./Comment";
import { db } from "../../firebase";
import firebase from "firebase/compat/app";

// const Comments = ({ comments, classId, setCommentsData, }) => {
const Comments = ({
  comments,
  classId,
  setCommentsData,
  userName,
  userEmail,
  classData,
}) => {
  const [commentContent, setCommentContent] = useState("");

  useEffect(() => {
    if (classData) {
      // console.log("in videos query");
      db.collection("Classes")
        .doc(classId)
        .collection("Comments")
        .orderBy("dateCreated", "desc")
        .get()
        .then((querySnapshot) => {
          const comments = [];
          querySnapshot.forEach((doc) => {
            comments.push({ id: doc.id, ...doc.data() });
          });
          setCommentsData(comments);
        })
        .catch((error) => {
          console.log("Error getting documents: ", error);
        });
    }
  }, [classData]);

  function addComment(content, userName, userEmail) {
    db.collection("Classes")
      .doc(classId)
      .collection("Comments")
      .add({
        content,
        dateCreated: firebase.firestore.Timestamp.now(),
        userName,
        userEmail,
      })
      .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
        setCommentsData((prev) => [
          ...prev,
          {
            id: docRef.id,
            content,
            userName,
            userEmail,
            dateCreated: firebase.firestore.Timestamp.now(),
          },
        ]);
        console.log("added comment", commentContent);
        setCommentContent("");
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  }

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      addComment(event.target.value, userName, userEmail);
      // alert(`${commentContent}, ${userName}, ${userEmail}`);
    }
  }

  return (
    <Container>
      <NewComment>
        {/* <Avatar src={av1} /> */}

        <Input
          onKeyDown={handleKeyDown}
          value={commentContent}
          onChange={(e) => setCommentContent(e.target.value)}
          placeholder="Add a comment..."
        />
      </NewComment>
      {comments.map((comment) => (
        <Comment
          key={comment?.id}
          id={comment?.id}
          dateCreated={comment?.dateCreated}
          comment={comment?.content}
          classId={classId}
          userName={comment?.userName}          
        />
      ))}
      {/* <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment /> */}
    </Container>
  );
};

export default Comments;

const Container = styled.div``;

const NewComment = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;
const Input = styled.input`
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.soft};
  background-color: transparent;
  outline: none;
  padding: 25px;
  width: 1000px;
`;
