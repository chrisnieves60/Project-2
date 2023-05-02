import { useState, useNavigate } from "react";
import axios from "axios";
import "../Styles/Create.css";
import { Navigate } from "react-router";
const Create = () => {
  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const [id, setId] = useState("");
  const handleSubmit = async () => {
    ///v1/api/posts
    axios
      .post("", {
        title: title,
        content: content,
      })
      .then((response) => {
        setId(response.data.id);
        if (response.status == 201) {
          console.log("successful post");
          setIsSubmitted(true);
          setTimeout(() => {
            setRedirect(true);
          }, 2000); //timeout so user can see welcome tag
        }
      })
      .catch((error) => {
        if (error.response.status == 400) {
          console.log(error.response.data.error);
        }
        if (error.response.status == 404) {
          console.log(error.response.data.error);
        }
        if (error.response.status == 500) {
          console.log(error.response.data.error);
        }
      });
  };

  if (redirect) {
    return <Navigate to={`/posts/${id}`} />; //redirect to home upon correct login
  }
  return (
    <>
      {isSubmitted ? (
        <div className="success-message">Submit successful!</div>
      ) : (
        <div className="create-form">
          <input
            className="create-form__title-input"
            placeholder="Title"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <br></br>
          <textarea
            className="create-form__content-input"
            placeholder="Content"
            onChange={(e) => {
              setContent(e.target.value);
            }}
          />
          <button className="create-form__submit-button" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      )}
    </>
  );
};
export default Create;
