import React, { useState } from "react";

const Settings = () => {
  const [showGoodbyeMessage, setShowGoodbyeMessage] = useState(false);

  // Event handler to show the "Goodbye" message
  const handleSignOutClick = () => {
    setShowGoodbyeMessage(true);

    // You can perform the sign-out logic here.
    // For this example, we'll just show the message.
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
