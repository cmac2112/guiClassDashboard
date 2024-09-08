import React from 'react'
import Layout from '../Layout'
import './Dashboard.css'
import graph1 from "../../assets/graph-placeholder.jpg"
import { useNavigate } from 'react-router-dom'
const Dashboard = () => {
    const Navigate = useNavigate();
  return (
    <div>
        <Layout headchildren={
            <div className='head'>
                <h1>Dashboard</h1>
                <button className='logout' onClick={() => Navigate('/')}>Logout</button>
            </div>
            }>
            <div className="income-expense">
                <p className='income-expense'>Income This Month</p>
                <p className='income'>$1000</p>
                <p className='income-expense'>Expenses This Month</p>
                <p className='expense'>$500</p>
                </div>
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
            <div className='export-container'>
            <button className='export' onClick={() => alert('nothing to download yet')}>Export as .CSV</button>
            </div>
            <div className="transaction-history-container">
                
                <p className="transaction-history-title">Transaction History</p>
                <div className="transaction-history">
                    <ol>
                        <li>Transaction 1</li>
                        <li>Transaction 2</li>
                        <li>Transaction 3</li>
                        <li>Transaction 4</li>
                        <li>Transaction 5</li>
                    </ol>
                </div>
            </div>
        </Layout>
    </div>
  )
}

export default Dashboard