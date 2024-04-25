import "./App.css";
import React, { useState } from "react";
import { useRoutes } from "react-router-dom";
import ReadPosts from "./pages/ReadPosts";
import CreatePost from "./pages/CreatePost";
import EditPost from "./pages/EditPost";
import DetailPost from "./pages/DetailPost";
import { Link } from "react-router-dom";
import { usePosts } from './pages/PostContext';

const App = () => {
  const { posts } = usePosts();
  const [searchTitle, setSearchTitle] = useState("");

  const handleSearch = (event) => {
    const query = event.target.value;
    setSearchTitle(query);
  };

  const filteredPosts = posts.filter((post) => {
    return post.title.toLowerCase().includes(searchTitle.toLowerCase());
  });

  // Sets up routes
  let element = useRoutes([
    {
      path: "/",
      element: <ReadPosts posts={filteredPosts} searchTitle={searchTitle} />,
    },
    {
      path: "/detail/:id",
      element: <DetailPost />,
    },
    {
      path: "/edit/:id",
      element: <EditPost />,
    },
    {
      path: "/new",
      element: <CreatePost />,
    },
  ]);

  return (
    <div className="App">
      <div className="header">
        <h2>Hobby Hub</h2>
        <input
          type="text"
          placeholder="Search"
          className="searchBar"
          onClick={handleSearch}
        />
        <Link to="/">
          <button className="headerBtn">Home</button>
        </Link>
        <Link to="/new">
          <button className="headerBtn"> Create New Post </button>
        </Link>
      </div>
      <div>{element}</div>
    </div>
  );
};

export default App;
