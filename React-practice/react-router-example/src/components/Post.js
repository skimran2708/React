import React from "react";
import { useLocation, useParams } from "react-router-dom";

function Post() {

  const {id} = useParams();

  const query = new URLSearchParams(useLocation().search);

  return(
    <div>
      <h2>Details Page</h2>
      <p>First Name: {query.get("first")} </p>
      <p>Last Name: {query.get("last")} </p>
    </div>
  );
}

export default Post;