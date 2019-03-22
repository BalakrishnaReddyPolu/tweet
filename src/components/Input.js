import React from "react";

const Input = (props)=>(
    <>
      <div className=" content mb-3  inputbackground">
      <div   className=" profileroundcard_dimension"/>
       <textarea  onChange={props.onChange} value={props.value} placeholder="What's happening?" className="inputfield" />        
      </div>
    
    </>
);

export default Input