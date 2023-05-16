import React from "react";
import { useNavigate } from "react-router";

const RedirectButton = ({ className, redirectPath, children }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(redirectPath);
  };

  return (
    <button className={className} onClick={handleClick}>
      {children}
    </button>
  );
};

export default RedirectButton;
