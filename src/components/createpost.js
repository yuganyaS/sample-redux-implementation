import React, { Component } from "react";
import { connect } from "react-redux";
import { createPost } from "../actions/postactions";
import propTypes from "prop-types";

class CreatePost extends Component {
  constructor() {
    super();
    this.handlerchangeText = this.handlerchangeText.bind(this);
    this.handlerSubmit = this.handlerSubmit.bind(this);
  }
  state = {
    title: "",
    body: ""
  };
  handlerSubmit(e) {
    e.preventDefault();
    const postdata = {
      title: this.state.title,
      body: this.state.body
    };
    this.props.createPost(postdata);
  }
  handlerchangeText(e) {
    this.setState({
      [e.target.id]: e.target.value
    });
  }
  render() {
    return (
      <form
        onSubmit={this.handlerSubmit}
        className="shadow bg-white rounded p-5"
      >
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            placeholder="Enter title"
            className="form-control"
            id="title"
            onChange={this.handlerchangeText}
            value={this.state.value}
          />
        </div>
        <div className="form-group">
          <label htmlFor="body">Body</label>
          <textarea
            placeholder="Enter body text"
            className="form-control"
            id="body"
            onChange={this.handlerchangeText}
            value={this.state.body}
            rows="3"
          />
        </div>
        <button type="submit" className="btn btn-primary btn-md">
          Submit
        </button>
      </form>
    );
  }
}
CreatePost.propTypes = {
  createPost: propTypes.func.isRequired
};
export default connect(
  null,
  { createPost }
)(CreatePost);
