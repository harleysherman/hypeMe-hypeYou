/* eslint-disable react/prop-types */
import { useState } from "react";
// import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";

import { ADD_ACHIEVEMENT } from "../../utils/mutations";

// Cloudinary imports
import CloudinaryUploadWidget from "../CloudinaryUploadWidget/CloudinaryUploadWidget";

// import Auth from "../../utils/auth";

const AchievementForm = () => {
  const [titleAchievement, setTitleAchievement] = useState("");
  const [achievementText, setAchievementText] = useState("");
  const [characterCount, setCharacterCount] = useState(0);

  const [addAchievement, { error }] = useMutation(ADD_ACHIEVEMENT);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      // eslint-disable-next-line no-unused-vars
      const { data } = await addAchievement({
        variables: {
          titleAchievement,
          body: achievementText,
        },
      });

      setAchievementText("");
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "achievementText" && value.length <= 280) {
      setAchievementText(value);
      setCharacterCount(value.length);
    } else if (name === "titleAchievement") {
      setTitleAchievement(value);
    }
  };

  return (
    <div>
      <h3>What is your current achievement?</h3>

      {/* Cloudinary widget */}
      <div className="App">
        <h5>Upload Your Achievement Photo</h5>
        <CloudinaryUploadWidget />
      </div>

      {/* {Auth.loggedIn() ? ( */}
      <>
        <p
          className={`m-0 ${
            characterCount === 280 || error ? "text-danger" : ""
          }`}
        >
          Character Count: {characterCount}/280
          {error && <span className="ml-2">{error.message}</span>}
        </p>
        <form
          className="flex-row justify-center justify-space-between-md align-center"
          onSubmit={handleFormSubmit}
        >
           <div className="col-12 col-lg-9">
            <input
              name="titleAchievement"
              placeholder="Add your achievement: "
              value={ titleAchievement }
              className="form-input w-100"
              style={{ lineHeight: "1.5", resize: "vertical" }}
              onChange={handleChange}
            ></input>
          </div>
          <div className="col-12 col-lg-9">
            <textarea
              name="achievementText"
              placeholder="Add your achievement: "
              value={ achievementText }
              className="form-input w-100"
              style={{ lineHeight: "1.5", resize: "vertical" }}
              onChange={handleChange}
            ></textarea>
          </div>

          <div className="col-12 col-lg-3">
            <button className="btn btn-primary btn-block py-3" type="submit">
              Add Achievement
            </button>
          </div>
        </form>
      </>
      {/* ) : (
        <p>
          You need to be logged in to share your achievements. Please{" "}
          <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
        </p>
      )} */}
    </div>
  );
};

export default AchievementForm;
