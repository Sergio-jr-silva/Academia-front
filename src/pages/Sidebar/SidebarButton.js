import React from "react";
import { AiOutlineMenu } from 'react-icons/ai';

const SidebarButton = ({ onClick }) => {
  return (
    <button className="sidebar_button" onClick={onClick}>
      <AiOutlineMenu/>
    </button>
  );
};

export default SidebarButton;