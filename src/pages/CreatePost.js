import React from "react";
import { useState } from "react";
import "./CreatePost.css";
import { supabase } from "../supabaseClient";
import { usePosts } from "./PostContext";

const CreatePost = () => {
  const [post, setPost] = useState({
    title: "",
    content: "",
    imageURL: "",
    upVotes: 0,
    comments: [],
  });
  const { posts, setPosts } = usePosts();

  const handleChange = (event) => {
    console.log(post);
    const { name, value } = event.target;
    setPost((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleCreate = async () => {
    window.event.preventDefault();
    console.log(post);
    const { title, content, imageURL, upVotes } = post;
    if (!title) {
      alert("Title is required");
      return;
    }

    const { data, error } = await supabase
      .from("hobbyhub")
      .insert([{ title, content, imageURL, upVotes }]);

    if (error) {
      console.log("Error creating post: " + error.message);
    } else {
      console.log(data);
      alert("Post created successfully");
      setPosts([...posts, ...data]);
    }

    window.location = "/";
  };

  return (
    <div className="main">
      <div className="create-form">
        <h1> Create a Hobby!</h1>
        <form>
          <input
            className="input"
            type="text"
            id="title"
            name="title"
            placeholder="Title"
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
            onChange={handleChange}
          ></textarea>
          <br />
          <input
            className="input"
            type="text"
            id="imageURL"
            name="imageURL"
            placeholder="Image URL (Optional)"
            onChange={handleChange}
          />
          <br />
          <br />
          <button className="create-btn" onClick={handleCreate}>
            {" "}
            Create Post{" "}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
