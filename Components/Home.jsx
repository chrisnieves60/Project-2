import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../Styles/Home.css";
const Home = () => {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  const getAllPosts = async () => {
    setLoading(true);
    const request = await axios.get("http://localhost:3001/v1/api/posts");
    setLoading(false);
    setPosts(request.data);
  };

  useEffect(() => {
    getAllPosts();
  }, []);

  console.log(posts);

  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="blog-posts">
          {posts.map((post) => {
            console.log(post.title);
            return (
              <Link key={post.id} to={`/posts/${post.id}`}>
                <div className="blog-post">
                  <p className="blog-post-id">ID: {post.id}</p>
                  <h2 className="blog-post-title">Title: {post.title}</h2>
                  <p className="blog-post-time">
                    Originally Published:{" "}
                    {new Date(post.originally_published).toLocaleString()}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Home;
