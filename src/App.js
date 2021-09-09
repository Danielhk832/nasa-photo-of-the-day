import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import { API_KEY, BASE_URL } from "./constants";
import styled, { keyframes } from "styled-components";
import gsap from "gsap";

function App() {
  const [pic, getPic] = useState(null);
  const [title, getTitle] = useState(null);
  const [explanation, getExplanation] = useState(null);

  useEffect(() => {
    axios.get(`${BASE_URL}${API_KEY}`).then((res) => {
      getPic(res.data.hdurl);
      getTitle(res.data.title);
      getExplanation(res.data.explanation);
      gsap.from(".pic", { duration: 2.25, opacity: 0, y: 150 });
      gsap.from(".text", { duration: 2.25, opacity: 0, y: -150 });
    });
  }, []);

  const loadingStyle = {
    width: "60%",
    height: "40%",
    margin: "0",
    zIndex: "999",
  };

  const parentStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
  };

  const Styling = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    flex-flow: flex-column;
    align-items: center;
    height: 100vh;

    .pic {
      border-radius: 2rem;
      max-width: 100%;
      height: auto;
      display: block;
      margin-left: auto;
      margin-right: auto;
      width: 35%;
    }
    .text {
      width: 50%;
      padding: 5%;
      color: #4f4f4f;
    }
    h1 {
      font-size: 5rem;
    }
    p {
      font-size: 1.5rem;
      line-height: 1.5;
    }
  `;

  return (
    <div style={parentStyle} className="parent">
      {pic === null && (
        <img
          style={loadingStyle}
          className="loading"
          src="https://www.elegantthemes.com/blog/wp-content/uploads/2019/10/loading-screen-featured-image.jpg"
        ></img>
      )}
      <Styling className="container">
        <div className="text">
          <h1>{title}</h1>
          <p>{explanation}</p>
        </div>
        <img className="pic" src={pic} alt="nasa pic"></img>
      </Styling>
    </div>
  );
}

export default App;
