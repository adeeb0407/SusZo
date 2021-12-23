import React, { createElement, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Comment, Tooltip, Avatar, Divider, Popconfirm, message } from "antd";
import { deleteReply } from "../../actions/replies";
import {fetchUsersById} from '../../actions/getUsers'
import moment from "moment";
import { Empty } from "antd";
import "../../styles/replies.css";
import {
  DislikeOutlined,
  LikeOutlined,
  DislikeFilled,
  LikeFilled,
  DeleteOutlined,
} from "@ant-design/icons";

const Replies = ({ replies, userId, verifyId }) => {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [action, setAction] = useState(null);
  const dispatch = useDispatch();
  const [deleteReplyer, setdeleteReplyer] = useState(false);

  function cancel(e) {
    console.log(e);
    setdeleteReplyer(false)
    
    message.error("Reply deletion rejected");
  }

  const like = () => {
    setLikes(1);
    setDislikes(0);
    setAction("liked");
  };

  const dislike = () => {
    setLikes(likes + 1);
    setDislikes(dislikes + 1);
    setAction("disliked");
  };

  const actions = [
    <>
      <Tooltip key="comment-basic-like" title="Like">
        <span onClick={like}>
          {createElement(action === "liked" ? LikeFilled : LikeOutlined)}
          <span className="comment-action">{likes}</span>
        </span>
      </Tooltip>
      ,
      <Tooltip key="comment-basic-dislike" title="Dislike">
        <span onClick={dislike}>
          {React.createElement(
            action === "disliked" ? DislikeFilled : DislikeOutlined
          )}
          <span className="comment-action">{dislikes}</span>
        </span>
      </Tooltip>
      ,<span key="comment-basic-reply-to">Reply to</span>
    </>,
  ];

  if (replies?.length === 0) {
    return <Empty />;
  } else {
    return (
      <div className="replies box-replies">
        {replies?.map((data) =>
          data.map((repliesData) => 
            <>
              <Comment
                actions={actions}
                author={<a>Visitor</a>}
                avatar={
                  <Avatar
                    src="https://joeschmoe.io/api/v1/random"
                    alt="Han Solo"
                  />
                }
                content={<p>{repliesData.reply}</p>}
                datetime={
                  <Tooltip title={moment(repliesData.createdAt).format("YYYY-MM-DD HH:mm:ss")}>
                    <span>{moment(repliesData.createdAt).fromNow()}</span>
                    {userId === verifyId && (
                      <>
                        <Popconfirm
                          title="Are you sure to delete this Reply?"
                          onConfirm={function confirm() {
                            setdeleteReplyer((prevData) => !prevData);
                            dispatch(deleteReply(repliesData._id));
                            dispatch(fetchUsersById(userId));
                            message.success("Reply was deleted Sucessfully");
                          }}
                          onCancel={cancel}
                          okText="Yes"
                          cancelText="No"
                        >
                          <DeleteOutlined className="deleteIcon" />
                        </Popconfirm>
                      </>
                    )}
                  </Tooltip>
                }
              />
              <Divider />
            </>
            )
        )}
        {/* <Comment
          actions={actions}
          author={<a>Han Solo</a>}
          avatar={
            <Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />
          }
          content={
            <p>
              We supply a series of design principles, practical patterns and
              high quality design resources (Sketch and Axure), to help people
              create their product prototypes beautifully and efficiently.
            </p>
          }
          datetime={
            <Tooltip title={moment().format("YYYY-MM-DD HH:mm:ss")}>
              <span>{moment().fromNow()}</span>
            </Tooltip>
          }
        /> */}
      </div>
    );
  }
};

export default Replies;
