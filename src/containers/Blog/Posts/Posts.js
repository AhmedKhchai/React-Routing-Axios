import React, { Component } from "react";
import axios from "../../../axios";
import Post from "../../../components/Post/Post";
import "./Posts.css";
import { Route, Link } from "react-router-dom";
import FullPost from "../FullPost/FullPost";
class Posts extends Component {
  state = {
    posts: [],
    // selectedPostId: null,
    // error: false,
  };
  componentDidMount() {
    console.log(this.props);
    axios
      .get("/posts")
      .then((Response) => {
        const posts = Response.data.slice(0, 4);
        const updatedposts = posts.map((post) => {
          return {
            ...post,
            author: "Max",
          };
        });
        this.setState({ posts: updatedposts });
        // console.log(Response);
      })
      .catch((error) => {
        console.log(error);
        //this.setState({ error: true });
      });
  }
  postSelectedHandler = (id) => {
    this.setState({ selectedPostId: id });
  };

  render() {
    let posts = <p style={{ textAlign: "center" }}>Something is wrong !</p>;
    if (!this.state.error) {
      posts = this.state.posts.map((post) => {
        return (
          <Link to={"/posts/" + post.id} key={post.id}>
            <Post
              title={post.title}
              author={post.author}
              clicked={() => this.postSelectedHandler(post.id)}
            />
          </Link>
        );
      });
    }
    return (
      <div>
        <section className="Posts">{posts}</section>;
        <Route
          path={"/posts/:id"}
          // path={this.props.match.url + "/:id"}
          exact
          component={FullPost}
        ></Route>
      </div>
    );
  }
}

export default Posts;
