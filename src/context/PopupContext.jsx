import React, { createContext, useState } from "react";

export const PopupContext = createContext();

function PopupProvider({ children }) {
  const [show, setShow] = useState(false);
  const [videoId, setVideoId] = useState(null);

  const hidePopup = () => {
    setShow(false);
    setVideoId(null);
  };

  const showPopup = (id) => {
    setShow(true);
    if (id) {
      setVideoId(id);
    }
  };

  return (
    <PopupContext.Provider value={{ show, videoId, hidePopup, showPopup }}>
      {children}
    </PopupContext.Provider>
  );
}

export default PopupProvider;
