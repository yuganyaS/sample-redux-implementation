import React, { Component } from "react";
import { connect } from "react-redux";
import propTypes from "prop-types";
import { fetchPosts } from "../actions/postactions";
import CreatePost from "./createpost";

class PostForm extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }
  componentWillReceiveProps = nextProps => {
    if (nextProps.newposts) {
      this.props.posts.unshift(nextProps.newposts);
    }
  };
  render() {
    const postList = this.props.posts.map(post => (
      <div key={post.id} className="mt-2 shadow p-3 mb-5 bg-white rounded">
        <h3 className="capitalize">{post.title}</h3>
        <div className="capitalize tab-space">{post.body}</div>
      </div>
    ));
    return (
      <React.Fragment>
        <div className="container">
          <h1 className="TitleText">Posts</h1>
          <CreatePost />
        </div>
        <div className="container-fluid post-container p-3 mt-3 ">
          {postList}
        </div>
      </React.Fragment>
    );
  }
}
PostForm.propType = {
  fetchPosts: propTypes.func.isRequired,
  posts: propTypes.array.isRequired,
  newposts: propTypes.object
};
const mapStateToProps = state => ({
  posts: state.posts.items,
  newposts: state.posts.item
});
export default connect(
  mapStateToProps,
  { fetchPosts }
)(PostForm);
