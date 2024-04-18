import React from "react";
import { Link, useParams } from "react-router-dom";
import "./DetailPost.css";
import { usePosts } from "./PostContext";
import likeButton from "../components/like-button.png";
import editButton from "../components/edit-button.png";
import deleteButton from "../components/delete-button.png";

const DetailPost = () => {
  const { id } = useParams();
  const { posts } = usePosts();

  let post = {};
  for (let i = 0; i < posts.length; i++) {
    if (posts[i].id === parseInt(id)) {
      post = posts[i];
      break;
    }
  }

  const timeSince = (date) => {
    const seconds = Math.floor((new Date() - new Date(date)) / 1000);
    let interval = seconds / 31536000;
    if (interval > 1) {
      return Math.floor(interval) + " years ago";
    }
    interval = seconds / 2592000;
    if (interval > 1) {
      return Math.floor(interval) + " months ago";
    }
    interval = seconds / 86400;
    if (interval > 1) {
      return Math.floor(interval) + " days ago";
    }
    interval = seconds / 3600;
    if (interval > 1) {
      return Math.floor(interval) + " hours ago";
    }
    interval = seconds / 60;
    if (interval > 1) {
      return Math.floor(interval) + " minutes ago";
    }
    return Math.floor(seconds) + " seconds ago";
  };

  return (
    <div className="main">
      <div>
        <p>`Posted ${timeSince(post.created_at)}`</p>
        <h4>{post.title}</h4>
        <p>{post.content}</p>
        <img src={post.imageURL} alt={post.title} />
        <div className="updates">
            <img src={likeButton} alt="like button"/>
            <img src={editButton} alt="edit button"/>
            <img src={deleteButton} alt="delete button"/>
        </div>
        <div>
          {
            post.comments.map((comment, index) => (
              <div key={index}>
                <p>{comment.content}</p>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default DetailPost;
