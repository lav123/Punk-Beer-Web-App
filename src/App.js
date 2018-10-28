import React, { Component } from 'react';
import './App.css';
import Content from './Content';
import axios from 'axios';

class App extends Component {
  constructor(props){
    super(props);
    //this.state={inputfield: "no value"};   
    this.handleClick = this.handleClick.bind(this);
    this.updateInputValue = this.updateInputValue.bind(this);
    this.state = {
      posts: []
    };
   }

   handleClick(){
    console.log("value of input field : "+this.state.inputfield);
    axios.get(`https://api.punkapi.com/v2/beers?beer_name=`+this.state.inputfield)
    .then(res => {
      const posts = res.data.map(obj => obj);
      if(posts[0].name==this.state.inputfield){
        alert("Your Searching Query :" +posts[0].name +  "  "+ "tagline :" +posts[0].tagline);
      }else{
        alert("Oooopps Your Searching query not matched plz try again");
      }
       console.log("data: ", posts[0]);
      this.setState({
        posts
      });
    })
    .catch(err => {
      this.setState({
        loading: false,
        error: err
      });
      alert(err);
    });
   }
   Upload(){
    alert("upload");

   }
   Create(){
alert("create");

   }
   Loginon(){
  alert("Login");
   }
   updateInputValue(evt){
     //console.log("input field updated with "+evt.target.value);
     this.state={inputfield: evt.target.value};   
 
   }

  render() {
    return (
      <div className="container is-fullhd">
    <nav className="navbar is-primary" role="navigation" aria-label="main navigation">
  <div className="navbar-brand">
    <a className="navbar-item" href="#">
    Beans Love Beer
    </a>
    <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" className="navbar-menu">
    <div className="navbar-start">
      <a className="navbar-item">
        Home
      </a>

      <a className="navbar-item">
        Favourite
      </a>

      <div className="navbar-item has-dropdown is-hoverable">
        <a className="navbar-link">
          
        </a>

        <div className="navbar-dropdown">
          <a className="navbar-item">
            xxxxxx
          </a>
          <a className="navbar-item">
            xxxxxx
          </a>
          <a className="navbar-item">
            xxxxxxx
          </a>
        </div>
      </div>
    </div>

    <div className="navbar-end">
      <div className="navbar-item">
        <div className="buttons">
          <a className="button is-info"  onClick={this.Upload}>
            <strong>Upload</strong>
          </a>
          <a className="button is-info"  onClick={this.Create}>
            Create
          </a>
          <a className="button is-light" onClick={this.Loginon} >
            Log in
          </a>
        </div>
      </div>
    </div>
  </div>
</nav><br/>
<div className="box">
                <div className="field has-addons">
                    <div className="control is-expanded">
                        <input className="input has-text-centered"  onChange={this.updateInputValue} type="search" placeholder="search............"/>
                    </div>
                    <div className="control">
                        <a className="button is-info"  value="Alert the text input"
                          onClick={this.handleClick}>Search</a>
                    </div>
                </div>
            </div>
      <Content/>
      </div>  
    );
  }
}

export default App;
