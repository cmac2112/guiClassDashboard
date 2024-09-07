import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSidebar } from '../../context/SidebarContext';
import './sidebar.css'
const Sidebar = () => {
  const navigate = useNavigate();
  const { isHidden, toggleSidebar } = useSidebar();

  
  return (
    <>
    <div className={`sidebar ${isHidden ? 'hidden' : '' /*teneary operator */}`} id="sidebar-main"> 
        <img onClick={() => navigate('/courseSearch/')}className="logo" alt="logo" />
      <div className="sidebar-title">
        <h1>Navigation</h1>
      </div>
      <div className="icon" onClick={toggleSidebar}></div>
      <div className="sidebar-item">
        <span className="sidebar-clickable" onClick={() => navigate('/courseSearch/search')}>Dashboard</span>
      </div>
      <div className="sidebar-item">
        <span className="sidebar-clickable" onClick={() => navigate('/courseSearch/howTo')}>Data Analytics</span>
        </div>  
      <div className="sidebar-item">
        <span className="sidebar-clickable" onClick={() => navigate('/courseSearch/about')}>Graphs</span>
      </div>
      <div className="icon" onClick={toggleSidebar}>
        <div className="text-icon">{isHidden? '>' : '<'}</div>
        </div>
    </div>
    </>
  )
}

export default Sidebar