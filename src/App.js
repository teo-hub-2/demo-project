import React from "react";
import logo from "./logo.svg";
import "./App.css";
// or less ideally
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "./me.jpg";
function App() {
  return (
    <div className="App">
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
        integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
        crossorigin="anonymous"
      />
      <nav class="navbar bg-dark navbar-expand-lg navbar-dark">
        <a class="navbar-brand" href="">
          ProjectName
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <a class="nav-link" href="">
                Button
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="">
                Button
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="">
                Button
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="container">
        <h1 className="auto">Theo Carnat</h1>
        <img className="auto" src={Image} alt="Me" />
        <h5 className="auto">A Software Engineer</h5>
        <p>
          Let's get started with the coding Delete me and start coding using
          <br />
          React , Bootstrap ,JS and NodeJs
        </p>
      </div>
    </div>
  );
}

export default App;
