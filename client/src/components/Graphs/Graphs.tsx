import React from 'react'
import Layout from '../Layout'
import {useNavigate} from 'react-router-dom'
import './Graphs.css'
import graph1 from "../../assets/graph-placeholder.jpg"
const Graphs = () => {
  const Navigate = useNavigate();
  return (
    <div>
        <Layout headchildren={<div className='head'>
          <h1 className='data-title'>Graphs</h1>
          <button className='logout' onClick={() => Navigate('/')}>Logout</button>
          </div>}>
          <div className="graph-display">
                <div className="grid-item">
                <p className='graph-title'>Monthly Spending(placeholder)</p>
                <img src={graph1} alt="tutorial1" className="graph-image" height="50%" width="50%"/>
                </div>
                <div className="grid-item">
                <p className="graph-title">Monthly Income(placeholder)</p>
                <img src={graph1} alt="tutorial1" className="graph-image" height="50%" width="50%"/>
                </div>
            </div>
            <p>other functionality such as filtering and hovering over graphs to view data is not implemented, this is just placeholder</p>
            </Layout>
    </div>
  )
}

export default Graphs