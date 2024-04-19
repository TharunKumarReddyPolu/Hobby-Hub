import React from "react";
import "./ReadPosts.css";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import EmptyPosts from "./EmptyPosts";
import { usePosts } from "./PostContext";

const ReadPosts = () => {
  const { posts } = usePosts();

  const handleNewest = () => {};

  const handleMostPopular = () => {};

  return (
    <div className="read-posts">
      <div className="order-by">
        <h3>Order by: </h3>
        <button className="order-by-btn" onClick={handleNewest}>
          Newest
        </button>
        <button className="order-by-btn" onClick={handleMostPopular}>
          Most Popular
        </button>
      </div>
      <div className="posts">
        {posts && posts.length > 0 ? (
          posts.map((post, index) => (
            <Link key={post.id} to={`/detail/${post.id}`}>
              <Card
                id={post.id}
                title={post.title}
                content={post.content}
                imageURL={post.imageURL}
                upVotes={post.upVotes}
              />
            </Link>
          ))
        ) : (
          <EmptyPosts />
        )}
      </div>
    </div>
  );
};

export default ReadPosts;
