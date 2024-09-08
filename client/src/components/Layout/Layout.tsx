import React from 'react'
import Sidebar from '../sidebar'
import Footer from '../Footer'
import Header from '../Header'
import { SidebarProvider } from '../../context/SidebarContext'
import './Layout.css'

interface LayoutProps {
    children: React.ReactNode
    headchildren: React.ReactNode
    }

const Layouts: React.FC<LayoutProps> = ({children, headchildren}) => {
  return (
    <div className="layout-container">
        <div className="header-container-layout">
            <Header>
                {headchildren}
            </Header>
        </div>
        <div className="layout-content">
            <Sidebar />
               {children}
            </div>
        <div className="footer">
            <Footer />
        </div>
    </div>
  )
}

const Layout : React.FC<LayoutProps> = ({children, headchildren}) => {
    return(
        <SidebarProvider>
            <Layouts headchildren={headchildren}>
                {children}
            </Layouts>
        </SidebarProvider>
    )
}

export default Layout;