import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import "./EditPost.css";
import { supabase } from "../supabaseClient";
import { usePosts } from "../pages/PostContext";

const EditPost = ({ data }) => {
  const { id } = useParams();
  const { posts, setPosts } = usePosts();
  let post = {};

  for (let i = 0; i < posts.length; i++) {
    if (posts[i].id === parseInt(id)) {
      post = posts[i];
      break;
    }
  }

  const [updatedPost, setUpdatedPost] = useState({
    title: post.title,
    content: post.content,
    imageURL: post.imageURL,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUpdatedPost((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  return (
    <div>
      <form>
        <input
          type="text"
          id="title"
          name="title"
          placeholder="Title"
          value={updatedPost.title}
          onChange={handleChange}
        />
        <br />
        <br />

        <input
          type="text"
          id="content"
          name="content"
          placeholder="Content (Optional)"
          value={updatedPost.author}
          onChange={handleChange}
        />
        <br />
        <br />

        <input
          type="text"
          id="imageURL"
          placeholder="Image URL (Optional)"
          value={updatedPost.imageURL}
          name="imageURL"
          onChange={handleChange}
        />
        <br />
        <button className="update-btn">Update Post</button>
      </form>
    </div>
  );
};

export default EditPost;
