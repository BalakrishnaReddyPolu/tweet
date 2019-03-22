import React from "react";
import Input from "./Input";
import Tweet from "./Tweet";
import "./Post.css";
import { connect } from "react-redux";
class Post extends React.Component {
    constructor(props) {
        super(props);       
        this.onInputChange = this.onInputChange.bind(this);
        this.postTweet = this.postTweet.bind(this);
    }

    onInputChange(e) {
       this.props.changeTweetText(e.target.value);
    }

    postTweet() {
        if(this.props.tweetText){
            this.props.changeTweetText('');  
            this.props.addComment(this.props.tweetText); 
        }
    }
   
    render() {
        return (
            <div className="postWrapper">
            <div className="postContainer">
             <Input type="text" onChange={this.onInputChange} value={this.props.tweetText}/>
                <div className="wrapper">
	                <a href="#" className="fancy-button  bg-gradient1" onClick={this.postTweet}>
                        <span>Tweet</span></a>
                </div>
            </div>
                {
                    this.props.comments && this.props.comments.length ? this.props.comments.map((item,index) => {
                        return (<Tweet key={`tweet_${index}`} tweet={item}/>)
                    }) : <div className="justifyCenter p-2 content mb-3">No Tweets</div>
                }
            </div>
        );
    }
}

let mapStateToProps = (state) => ({
    comments: state.comments,
    tweetText: state.tweetText
})

let mapDispatchToProps = (dispatch) => ({
    addComment: (text) => dispatch({ type: "Add", data: {text:text,time:new Date()} }),
    changeTweetText: (text) => dispatch({ type: "ChangeTweetText", data: text })
})

export default connect(mapStateToProps, mapDispatchToProps)(Post);