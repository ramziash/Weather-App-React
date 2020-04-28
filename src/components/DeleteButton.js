import React from "react";

const DeleteButton = ({ handleOnClick, item }) => {
  return (
    <button className="delete-button" onClick={() => handleOnClick(item.id)}>
      &#215;
    </button>
  );
};

export default DeleteButton;