import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Datainput from './components/DataInput';
import Graphs from './components/Graphs';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/data-input' element={<Datainput />} />
        <Route path='/graphs' element={<Graphs />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
