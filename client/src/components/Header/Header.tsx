import React from 'react'
import './Header.css'

interface HeaderProps {
    children: React.ReactNode
}
const Header:React.FC<HeaderProps> = ({children}) => {
  return (
    <div className="header-container">
        <div className="header-content">
            {children}
        </div>
    </div>
  )
}

export default Header