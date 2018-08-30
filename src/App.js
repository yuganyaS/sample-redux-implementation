import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import PostForm from "./components/postform";
import SocialCard from "./components/socialcard";

const routes = [
  { path: "/posts", component: PostForm },
  {
    path: "/socialcard",
    component: SocialCard
    // routes: [{ path: "/socialcard/detail", component: SocialDetail }]
  }
];
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header shadow bg-dark ">
            <img src={logo} className="App-logo" alt="logo" />
            <ul className="nav mt-2">
              <li className="nav-item">
                <Link className="link-item px-2" to="/posts">
                  Posts
                </Link>
              </li>
              <li className="nav-item">
                <Link className="link-item px-2" to="/socialcard">
                  SocialCard
                </Link>
              </li>
            </ul>
            <h1 className="App-title">
              Simple React with Redux Implementation
            </h1>
          </header>
          <div className="main-content">
            {routes.map(route => (
              <Route
                key={route.path}
                path={route.path}
                component={route.component}
              />
            ))}
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
