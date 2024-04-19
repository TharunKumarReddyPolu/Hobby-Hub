import React, { useEffect } from "react";
import { useState } from "react";
import "./ReadPosts.css";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import EmptyPosts from "./EmptyPosts";
import { usePosts } from "./PostContext";

const ReadPosts = () => {
  const { posts } = usePosts();
  const [sortedPosts, setSortedPosts] = useState(posts);

  useEffect(() => {
    setSortedPosts(posts);
  }, [posts]);

  const handleNewest = () => {
    const sortedByNewest = [...posts].sort((a, b) => {
      return new Date(b.created_at) - new Date(a.created_at);
    });
    setSortedPosts(sortedByNewest);
  };

  const handleMostPopular = () => {
    const sortedByMostPopular = [...posts].sort((a, b) => {
      return b.upVotes - a.upVotes;
    });
    setSortedPosts(sortedByMostPopular);
  };

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
        {sortedPosts && sortedPosts.length > 0 ? (
          sortedPosts.map((post, index) => (
            <Link key={post.id} to={`/detail/${post.id}`}>
              <Card
                id={post.id}
                title={post.title}
                content={post.content}
                imageURL={post.imageURL}
                upVotes={post.upVotes}
                created_at={post.created_at}
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
