import React, { useState } from 'react';
import './sidebar.css';
import SidebarButton from './SidebarButton';

const Sidebar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div class="menu">
      <SidebarButton onClick={handleSidebarToggle} />
      {isSidebarOpen && <div className="sidebar">
        <li><a href='/home'>Home</a></li>
        <li><a href='#'>Treinos</a></li>
        <li><a href='#'>Agenda</a></li>
        <li><a href='#'>Contato</a></li>
        
        </div>}
    </div>
  );
};

export default Sidebar;