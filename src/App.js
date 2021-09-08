import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import { API_KEY, BASE_URL } from "./constants";

function App() {

  const [pic, getPic] = useState('https://www.elegantthemes.com/blog/wp-content/uploads/2019/10/loading-screen-featured-image.jpg')

  useEffect(() => {
    axios.get(`${BASE_URL}${API_KEY}`)
      .then(res => {
        getPic(res.data.url);
      })
  })

  return (
    <div className="App">
      <h1>NASA PIC</h1>
      <p>
        <img src={pic} alt='nasa pic'></img>
      </p>
    </div>
  );
}

export default App;
