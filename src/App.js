import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header";
import ProfileImageCard from "./components/ProfileImageCard";
import Comments from "./components/Comments";

class App extends Component {
  render() {
    return (
        <React.Fragment>
        <Header/>
        <div className="contenwrapper ml-5 mr-5 mt-2">
        <ProfileImageCard/>
        <Comments/>
        </div>
        </React.Fragment>
    );
  }
}

export default App;
