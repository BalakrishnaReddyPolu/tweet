(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,a,t){},23:function(e,a,t){e.exports=t.p+"static/media/Background.91b53a01.jpg"},26:function(e,a,t){e.exports=t(41)},31:function(e,a,t){},32:function(e,a,t){},35:function(e,a,t){},38:function(e,a,t){},40:function(e,a,t){},41:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(21),l=t.n(c),m=(t(31),t(6)),s=t(7),i=t(11),o=t(8),d=t(12),u=(t(32),t(43)),p=t(44),E=t(45),v=function(){return r.a.createElement(u.a,{color:"light",light:!0,expand:"md"},r.a.createElement(p.a,{className:"border0 navbar navbar-expand-lg navbar-light bg-light mr-2 crusor-pointer",navbar:!0},r.a.createElement(E.a,{className:"mr-2"},r.a.createElement("i",{className:"mr-1 fas fa-home"}),"Home")),r.a.createElement(p.a,{className:"border0 navbar navbar-expand-lg navbar-light bg-light mr-2 crusor-pointer",navbar:!0},r.a.createElement(E.a,{className:"mr-2"},r.a.createElement("i",{className:"mr-1 fas fa-bolt"}),"Moments")),r.a.createElement(p.a,{className:"border0 navbar navbar-expand-lg navbar-light bg-light mr-2 crusor-pointer",navbar:!0},r.a.createElement(E.a,{className:"mr-2"},r.a.createElement("i",{className:"mr-1 far fa-envelope"}),"Notifications")),r.a.createElement("div",{style:{flexGrow:"1"}}),r.a.createElement("form",{onSubmit:function(e){return e.preventDefault()},className:"form-inline my-2 my-lg-0"},r.a.createElement("input",{className:"form-control mr-sm-2",type:"text",placeholder:"Search"}),r.a.createElement("button",{className:"btn btn-secondary my-2 my-sm-0"},"Search")))},f=(t(35),t(23)),h=t.n(f),b=t(10),g=function(e){function a(){return Object(m.a)(this,a),Object(i.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"profileCard"},r.a.createElement("div",null,r.a.createElement("img",{src:h.a,alt:"backgroundImage",className:"imgCard"})),r.a.createElement("div",null,r.a.createElement("div",{className:"displayflex"},r.a.createElement("div",{className:"profileroundcard"}),r.a.createElement("div",{className:" mb-1 ml-1"},r.a.createElement("div",{className:"displayname spacer"},"Balakrishna Reddy"),r.a.createElement("div",{className:"displayId spacer"},"@Polu"))),r.a.createElement("div",{className:"displayflex cardinfo mb-3"},r.a.createElement("div",null,r.a.createElement("div",{className:"cardinfo_header"},"Tweets"),r.a.createElement("div",{className:"cardinfo_content"},this.props.comments.length)),r.a.createElement("div",null,r.a.createElement("div",{className:"cardinfo_header"},"Retweet"),r.a.createElement("div",{className:"cardinfo_content"},"0")),r.a.createElement("div",null,r.a.createElement("div",{className:"cardinfo_header"},"following"),r.a.createElement("div",{className:"cardinfo_content"},"0"))))))}}]),a}(r.a.Component),N=Object(b.b)(function(e){return{comments:e.comments}},void 0)(g),w=t(5),y=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:" content mb-3  inputbackground"},r.a.createElement("div",{className:" profileroundcard_dimension"}),r.a.createElement("textarea",{onChange:e.onChange,value:e.value,placeholder:"What's happening?",className:"inputfield"})))},O=(t(20),window.$),x=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"p-2 content mb-3"},r.a.createElement("div",{className:"cardImg"}),r.a.createElement("div",{className:"cardcontent ml-3"},r.a.createElement("div",{className:"carddetails"},r.a.createElement("div",{className:"m-1"},r.a.createElement("a",null,r.a.createElement("strong",null,"Balakrishna Reddy"))),r.a.createElement("div",{className:"m-1"},r.a.createElement("a",null,"@Polu")),r.a.createElement("div",{className:"m-1"},O.timeago(e.tweet.time)),r.a.createElement("div",{className:"spacer m-1"}),r.a.createElement("div",{className:"m-1"},r.a.createElement("i",{class:"fas fa-chevron-down"}))),r.a.createElement("div",{className:"cardcontentdetails"},e.tweet.text),r.a.createElement("div",{className:"cardoptions"},r.a.createElement("div",{className:"mr-4"},r.a.createElement("i",{class:"fas fa-comments"})),r.a.createElement("div",{className:"mr-4"},r.a.createElement("i",{class:"fas fa-retweet"})),r.a.createElement("div",{className:"mr-4"},r.a.createElement("i",{class:"far fa-heart"})),r.a.createElement("div",{className:"mr-4"},r.a.createElement("i",{class:"far fa-envelope"}))))))},T=function(e){function a(e){var t;return Object(m.a)(this,a),(t=Object(i.a)(this,Object(o.a)(a).call(this,e))).onInputChange=t.onInputChange.bind(Object(w.a)(Object(w.a)(t))),t.postTweet=t.postTweet.bind(Object(w.a)(Object(w.a)(t))),t}return Object(d.a)(a,e),Object(s.a)(a,[{key:"onInputChange",value:function(e){this.props.changeTweetText(e.target.value)}},{key:"postTweet",value:function(){this.props.tweetText&&(this.props.changeTweetText(""),this.props.addComment(this.props.tweetText))}},{key:"render",value:function(){return r.a.createElement("div",{className:"postWrapper"},r.a.createElement("div",{className:"postContainer"},r.a.createElement(y,{type:"text",onChange:this.onInputChange,value:this.props.tweetText}),r.a.createElement("div",{className:"wrapper"},r.a.createElement("a",{href:"#",className:"fancy-button  bg-gradient1",onClick:this.postTweet},r.a.createElement("span",null,"Tweet")))),this.props.comments&&this.props.comments.length?this.props.comments.map(function(e,a){return r.a.createElement(x,{key:"tweet_".concat(a),tweet:e})}):r.a.createElement("div",{className:"justifyCenter p-2 content mb-3"},"No Tweets"))}}]),a}(r.a.Component),j=Object(b.b)(function(e){return{comments:e.comments,tweetText:e.tweetText}},function(e){return{addComment:function(a){return e({type:"Add",data:{text:a,time:new Date}})},changeTweetText:function(a){return e({type:"ChangeTweetText",data:a})}}})(T),_=(t(38),function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"commentsWrapper"},r.a.createElement(j,null)))}),C=function(e){function a(){return Object(m.a)(this,a),Object(i.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(v,null),r.a.createElement("div",{className:"contenwrapper ml-5 mr-5 mt-2"},r.a.createElement(N,null),r.a.createElement(_,null)))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(39),t(40);var k=t(14),I=t(25),S=Object(k.b)({comments:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"Add":var t=a.data;return Object(I.a)(e).concat({text:t.text,time:t.time});default:return e}},tweetText:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ChangeTweetText":return a.data;default:return e}}}),D=Object(k.c)(S,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());l.a.render(r.a.createElement(b.a,{store:D},r.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[26,1,2]]]);
//# sourceMappingURL=main.3c1db808.chunk.js.map