import React from "react";
import Button from "muicss/lib/react/button";

const SubmitButton = props => {
  return (
    <div>
      <Button
        className="btn btn-primary btn-lg"
        type="submit"
        value={props.value}
        variant="raised"
        color="primary"
      >
        Login
      </Button>
    </div>
  );
};

export default SubmitButton;
