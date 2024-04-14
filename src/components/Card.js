import React from "react";
import "./Card.css";

const Card = (props) => {
  // const [upVotes, setUpVotes] = useState(0);
  // const updateUpVotes = () => {
  //   setUpVotes((upVotes) => upVotes + 1);
  // };

  return (
    <div className="card">
      <p className="posted-ago">Posted {}</p>
      <h3 className="title">{props.title}</h3>
      <p>{props.upVotes} upvotes</p>
    </div>
  );
};

export default Card;
