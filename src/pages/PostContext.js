import React, { createContext, useState, useEffect, useContext } from "react";
import { supabase } from "../supabaseClient";

const PostContext = createContext();
export const usePosts = () => useContext(PostContext);

export const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const { data, error } = await supabase.from("hobbyhub").select("*");
    if (error) console.error("error", error);
    else setPosts(data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const value = {
    posts,
    setPosts,
    fetchPosts,
  };

  return <PostContext.Provider value={value}>{children}</PostContext.Provider>;
};
