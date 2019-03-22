import React from "react";
import "./Post.css";
const $ = window.$;
const Tweet = (props)=>(
    <>
    <div className="p-2 content mb-3">
        <div className="cardImg"></div>
        <div className="cardcontent ml-3">
            <div className="carddetails">
                <div className="m-1"><a><strong>polu</strong></a></div>
                <div className="m-1"><a>@Polu</a></div>
                <div className="m-1">{$.timeago(props.tweet.time)}</div>
                <div className="spacer m-1"></div>
                <div className="m-1"><i class="fas fa-chevron-down"></i></div>
            </div>
            <div className="cardcontentdetails">
                {props.tweet.text}
            </div>
<div className="cardoptions">
    <div className="mr-4"><i class="fas fa-comments"></i></div>
    <div className="mr-4"><i class="fas fa-retweet"></i></div>
    <div className="mr-4"><i class="far fa-heart"></i></div>
    <div className="mr-4"><i class="far fa-envelope"></i></div>
</div>
        </div>
    </div>
</>
);

export default Tweet;