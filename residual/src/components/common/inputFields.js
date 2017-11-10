import React from "react";

const InputField = props => {
  return (
    <div className="form-group">
      <label className="control-label">{props.name}</label>
      <input className="form-control" type="text" onChange={props.onChange} placeholder="username.."/>
    </div>
  );
};

export default InputField;
