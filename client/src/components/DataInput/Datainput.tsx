import React from 'react'
import Layout from '../Layout'
import { useNavigate } from 'react-router-dom'
import './Datainput.css'
export const Datainput = () => {
  const Navigate = useNavigate();
  return (
    <div>
        <Layout headchildren={
          <div className='head'>
          <h1 className='data-title'>Data Input</h1>
          <button className='logout' onClick={() => Navigate('/')}>Logout</button>
          </div>
      }>
            <div className="data-input-container">
                <div className="data-input">
                    <p className="data-input-title">Enter Expenses</p>
                    <div className="data-input-form">
                        <input type="text" placeholder="Enter Transaction"/>
                        <input type="text" placeholder="Enter Amount"/>
                        <input type="text" placeholder="Enter Date"/>
                        <button onClick={() => alert('mock submit')}  className="logout">Submit</button>
                    </div>
                </div>
                <div className="data-input">
                    <p className="data-input-title">Enter Misc Income</p>
                    <div className="data-input-form">
                        <input type="text" placeholder="Enter Transaction"/>
                        <input type="text" placeholder="Enter Amount"/>
                        <input type="text" placeholder="Enter Date"/>
                        <button onClick={() => alert('mock submit')} className="logout">Submit</button>
                    </div>
                </div>
            </div>
            </Layout>
    </div>
  )
}

export default Datainput;