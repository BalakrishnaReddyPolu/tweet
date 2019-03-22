import React from "react";
import "./ProfileImageCard.css"
import ProfileImg from "../images/Background.jpg"
import { connect } from "react-redux";
class ProfileImageCard extends React.Component {
render() {
    return (
    <>
        <div className="profileCard">
            <div >
               <img src={ProfileImg} alt="backgroundImage" className="imgCard"/>
           </div>
            <div>
              <div className="displayflex">
                  <div className="profileroundcard">
                  </div>
                  <div className=" mb-1 ml-1">
                    <div className="displayname spacer">Balakrishna Reddy</div>
                    <div className="displayId spacer">@Polu</div>
                  </div>
              </div>
              <div className="displayflex cardinfo mb-3">
                <div>
                    <div className="cardinfo_header">Tweets</div>
                    <div className="cardinfo_content">{this.props.comments.length}</div>
                </div>
                <div>
                    <div className="cardinfo_header">Retweet</div>
                    <div className="cardinfo_content">0</div>
                </div>
                <div>
                    <div className="cardinfo_header">following</div>
                    <div className="cardinfo_content">0</div>
                </div>
              </div>
           </div>
        </div>
    </>
    )
}
}

let mapStateToProps = (state) => ({
    comments: state.comments
})

export default connect(mapStateToProps, undefined)(ProfileImageCard);