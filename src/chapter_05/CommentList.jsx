import React from "react";
import Comment from "./Comment";

const comments = [
  {
    name: "이인제",
    comment: "안녕하세요, 소플입니다.",
  },
  {
    name: "강민경",
    comment: "헬로우",
  },
  {
    name: "이해리",
    comment: "하이에브리원",
  },
];

function CommentList(props) {
  return (
    <div>
      {comments.map((comment) => {
        return (
          <Comment name={comment.name} comment={comment.comment}></Comment>
        );
      })}
    </div>
  );
}

export default CommentList;
