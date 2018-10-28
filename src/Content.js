import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';


class Content extends Component{
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      loading: true,
      error: null
    };
  }

  componentDidMount() {
    axios.get(`https://api.punkapi.com/v2/beers`)
      .then(res => {
        const posts = res.data.map(obj => obj);
         console.log("data: ", posts);
        this.setState({
          posts,
          loading: false,
          error: null
        });
      })
      .catch(err => {
        this.setState({
          loading: false,
          error: err
        });
      });
  }
     ReadMore(){
    alert("chillax dude, what is worth having is worth waiting for");
     }
  renderPosts() {
    if(this.state.error) {
      return this.renderError();
    }
    return (
      <div className="row columns is-multiline">
     {this.state.posts.map(post =>
      <div className="column is-one-third">
    <div className="card large">
    <div className="card-content">
        <div className="media">
            <div className="media-left">
                <figure className="image is-32x32">
                    <img src={post.image_url} alt="Image"/>
                </figure>
            </div>
            <div className="media-content">
                <p className="title is-4 no-padding">{post.name}</p>
                <p><span className="title is-6"><a href="#">{post.name}</a></span></p>
                <p className="subtitle is-6">{post.description.substring(0,72)+'...'}<a onClick={this.ReadMore}>Read More</a></p>
            </div>
        </div>
    </div>
    </div>
    </div>
        )}
        </div>
    );
  }
render() {
   return (
     <div>
    {this.renderPosts()}
    </div>
     );
}
}

export default Content;

