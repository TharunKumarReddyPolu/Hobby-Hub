import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import "./EditPost.css";
import { supabase } from "../supabaseClient";
import { usePosts } from "../pages/PostContext";

const EditPost = () => {
  const { id } = useParams();
  const { posts, fetchPosts } = usePosts();
  
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
    upVotes: post.upVotes,
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

  const handleUpdate = async (event) => {
    event.preventDefault();
    const { data, error } = await supabase
      .from("hobbyhub")
      .update({
        title: updatedPost.title,
        content: updatedPost.content,
        imageURL: updatedPost.imageURL,
        upVotes: updatedPost.upVotes,
      })
      .eq("id", id);

    if (error) {
      alert("Error updating post");
    } else {
      console.log("data", data);
      alert("Post updated successfully!");
      fetchPosts();
    }
    window.location = "/"
  }

  return (
    <div className="main">
      <div className="edit-form">
        <h1>Edit your Hobby!</h1>
        <form>
          <input
            className="input"
            type="text"
            id="title"
            name="title"
            placeholder="Title"
            value={updatedPost.title}
            onChange={handleChange}
          />
          <br />
          <br />

          <textarea
            className="input"
            rows="10"
            cols="60"
            id="content"
            name="content"
            placeholder="Content (Optional)"
            value={updatedPost.content}
            onChange={handleChange}
          ></textarea>
          <br />
          <input
            className="input"
            type="text"
            id="imageURL"
            placeholder="Image URL (Optional)"
            value={updatedPost.imageURL}
            name="imageURL"
            onChange={handleChange}
          />
          <br />
          <button className="update-btn" onClick={handleUpdate}>Update Post</button>
        </form>
      </div>
    </div>
  );
};

export default EditPost;
