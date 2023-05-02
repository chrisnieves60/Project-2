import React, { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import axios from "axios";
import "../Styles/Blog.css";
import { Link } from "react-router-dom";
const Blog = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [blog, setBlog] = useState([]);
  const [redirect, setRedirect] = useState(false);

  const getBlog = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `http://localhost:3001/v1/api/posts/${id}`
      );
      console.log(response);
      setBlog([response.data]);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };
  useEffect(() => {
    getBlog();
  }, [id]);

  const Delete = async () => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      setRedirect(true);
      try {
        await axios.delete(`http://localhost:3001/v1/api/posts/${id}`);
        // redirect to the home page or display a message indicating success
      } catch (error) {
        console.log(error);
        // display an error message to the user
      }
    }
  };

  if (redirect) {
    return <Navigate to="/" />;
  }
  return (
    <div className="individual-blog-container">
      {blog.map((post) => {
        return (
          <>
            <div className="individual-blog-post" key={post.id}>
              <div className="individual-blog-header">
                <h1 className="individual-blog-title">{post.title}</h1>
                <span className="individual-blog-date">
                  Originally posted:{" "}
                  {new Date(post.originally_published).toLocaleString()}
                </span>
                <span className="individual-blog-date">
                  Last updated: {new Date(post.last_updated).toLocaleString()}
                </span>
              </div>
              <div className="individual-blog-content">
                <p>{post.content}</p>
              </div>
            </div>
            <Link className="edit-button" to={`/posts/${id}/edit`}>
              Edit
            </Link>
            <Link className="delete-button" onClick={Delete}>
              Delete
            </Link>
          </>
        );
      })}
    </div>
  );
};

export default Blog;
