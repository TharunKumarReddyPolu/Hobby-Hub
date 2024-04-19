import React from "react";
import { Link, useParams } from "react-router-dom";
import "./DetailPost.css";
import { supabase } from "../supabaseClient";
import { usePosts } from "./PostContext";
import likeButton from "../components/like-button.png";
import editButton from "../components/edit-button.png";
import deleteButton from "../components/delete-button.png";

const DetailPost = () => {
  const { id } = useParams();
  const { posts, fetchPosts } = usePosts();

  let post = {};
  for (let i = 0; i < posts.length; i++) {
    if (posts[i].id === parseInt(id)) {
      post = posts[i];
      break;
    }
  }

  const handleLike = async (event) => {
    const updatedPost = {
      title: post.title,
      content: post.content,
      imageURL: post.imageURL,
      upVotes: post.upVotes + 1,
    };
    
    const { data, error } = await supabase
      .from("hobbyhub")
      .update(updatedPost)
      .eq("id", id);

    if (error) {
      console.log("Error", error);
    } else {
      console.log("data", data);
      fetchPosts();
    }
  };

  const handleDelete = async (event) => {
    const { data, error } = await supabase
    .from("hobbyhub")
    .delete()
    .eq("id", id);

    if (error) {
      console.log("Error", error);
    } else {
      console.log("data", data);
      alert("Post deleted successfully!");
      fetchPosts();
    }
    window.location = "/";
  };


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
      <div className="post-detail">
        <p>Posted {timeSince(post.created_at)}</p>
        <h2>{post.title}</h2>
        <p>{post.content}</p>
        <img className="post-img" src={post.imageURL} alt={post.title} />
        <div className="updates">
            <img className="updates-btn-left" src={likeButton} onClick={handleLike} alt="like button"/> {post.upVotes} upvotes
            <Link to={`/edit/${post.id}`}>
            <img className="updates-btn-right1" src={editButton} alt="edit button"/>
            </Link>
            <img className="updates-btn-right2" src={deleteButton} onClick={handleDelete} alt="delete button"/>
        </div>
        <div className="comment-section">
          <h3>Comments</h3>
          {/* {
            post.comments.map((comment, index) => (
              <div key={index}>
                <p>{comment.content}</p>
              </div>
            ))
          } */}
        </div>
      </div>
    </div>
  );
};

export default DetailPost;
