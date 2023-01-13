import React from "react";

const CardTextBox = ({ text, place = "header" }) => {
  const divClass = place === "header" ? "header-class" : "footer-class";

  return (
    <div className={`${divClass} card-text-box`}>
      {text.substring(0, 50)}
      {text.length > 50 && "..."}
    </div>
  );
};

export default CardTextBox;
