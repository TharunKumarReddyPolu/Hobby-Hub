import "./App.css";
import React from "react";
import { useRoutes } from "react-router-dom";
import ReadPosts from "./pages/ReadPosts";
import CreatePost from "./pages/CreatePost";
import EditPost from "./pages/EditPost";
import DetailPost from "./pages/DetailPost";
import { Link } from "react-router-dom";
import { usePosts } from './pages/PostContext';

const App = () => {
  const { posts } = usePosts();

  const handleSearch = (event) => {
    console.log("search clicked");
  };

  // Sets up routes
  let element = useRoutes([
    {
      path: "/",
      element: <ReadPosts />,
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
