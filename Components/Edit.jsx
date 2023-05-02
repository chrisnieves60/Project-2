import { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { Navigate } from "react-router";
import "../Styles/Edit.css";
const Edit = () => {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [redirect, setRedirect] = useState(false);

  const getPost = async () => {
    setLoading(true);
    console.log("function runs");
    try {
      const response = await axios.get(
        `http://localhost:3001/v1/api/posts/${id}`
      );
      console.log(response);
      setTitle(response.data.title);
      setContent(response.data.content);
    } catch (err) {
      setError("Error loading data");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.patch(
        `http://localhost:3001/v1/api/posts/${id}`,
        {
          title,
          content,
        }
      );
      console.log(response.data);
      setRedirect(true);
    } catch (err) {
      setError("Error updating post");
    }
  };

  useEffect(() => {
    getPost();
  }, [id]);

  if (redirect) {
    return <Navigate to={`/posts/${id}`} />;
  }
  return (
    <div className="edit-page-container">
      <form className="edit-page-form" onSubmit={handleSubmit}>
        <label className="edit-page-label" htmlFor="title">
          Title:
        </label>
        <input
          className="edit-page-input"
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label className="edit-page-label" htmlFor="content">
          Content:
        </label>
        <textarea
          className="edit-page-textarea"
          id="content"
          name="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <h1>hey</h1>

        {error && <p className="edit-page-error">{error}</p>}

        <button className="edit-page-submit" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Edit;
