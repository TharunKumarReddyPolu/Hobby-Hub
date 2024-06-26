import React, { useEffect } from "react";
import { useState } from "react";
import "./ReadPosts.css";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import EmptyPosts from "./EmptyPosts";

const ReadPosts = ({ posts, searchTitle}) => {
  const [sortedPosts, setSortedPosts] = useState(posts);

  useEffect(() => {
    setSortedPosts(posts);
  }, [posts]);

  useEffect(() => {
    const filteredPosts = posts.filter((post) => {
      return post.title.toLowerCase().includes(searchTitle.toLowerCase());
    });
    setSortedPosts(filteredPosts);
  }, [searchTitle, posts]);

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
                videoURL={post.videoURL}
                upVotes={post.upVotes}
                comments={post.comments}
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
