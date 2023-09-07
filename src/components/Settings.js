import React, { useState } from "react";

const Settings = () => {
  const [showGoodbyeMessage, setShowGoodbyeMessage] = useState(false);

  
  const handleSignOutClick = () => {
    setShowGoodbyeMessage(true);

 
  };

  return (
    <div className="settings">
      {showGoodbyeMessage ? (
        <h2>Goodbye.</h2>
      ) : (
        <h2 onClick={handleSignOutClick}>Sign Out</h2>
      )}
    </div>
  );
};

export default Settings;
