import "./App.css";
import React from "react";
import { useRoutes } from "react-router-dom";
import ReadPosts from "./pages/ReadPosts";
import CreatePost from "./pages/CreatePost";
import EditPost from "./pages/EditPost";
import DetailPost from "./pages/DetailPost";
import { Link } from "react-router-dom";

const App = () => {
  const posts = [
    {
      id: "1",
      title: "Cartwheel in Chelsea 🤸🏽‍♀️",
      author: "Harvey Milian",
      description: "",
    },
    {
      id: "2",
      title: "Love Lock in Paris 🔒",
      author: "Beauford Delaney",
      description: "",
    },
    {
      id: "3",
      title: "Wear Pink on Fridays 🎀",
      author: "Onika Tonya",
      description: "",
    },
    {
      id: "4",
      title: "Adopt a Dog 🐶",
      author: "Denise Michelle",
      description: "",
    },
  ];

  const handleSearch = () => {
    console.log("Search clicked");
  };

  // Sets up routes
  let element = useRoutes([
    {
      path: "/",
      element: <ReadPosts data={posts} />,
    },
    {
      path: "/detail/:id",
      element: <DetailPost data={posts} />,
    },
    {
      path: "/edit/:id",
      element: <EditPost data={posts} />,
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
