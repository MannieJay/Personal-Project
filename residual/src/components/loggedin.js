import React from "react";
import Button from "muicss/lib/react/button";

const Welcome = ({ user, onSignOut }) => {
  return (
    <div>
      Welcome <strong>{user.username}</strong>!
      <Button variant="raised" color="danger" onClick={onSignOut}>
        Logout
      </Button>
    </div>
  );
};

export default Welcome;
