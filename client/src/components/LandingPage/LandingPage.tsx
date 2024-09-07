import "./LandingPage.css";
import { useNavigate } from 'react-router-dom';
import bgimage from "../../assets/finance.jpg"
import tutorial1 from "../../assets/tutorial1.jpg"
import tutorial3 from "../../assets/tutorial3.jpg"
import Footer from "../Footer"
const LandingPages = () => {
  const Naviagte = useNavigate();
  return (
    <div className="landing-page">
      <div className="image-container">
        <div className="bg-gradient" />
        <img src={bgimage} alt="Background Image" className="bg-image" />
        <div className="header1">
        <h2 className="title">Your New Best Budget Tracking App</h2>
        <div className="button-container">
          <button onClick={() => Naviagte('/login/')} className="search-button">
            Register
          </button>
          <button onClick={() => Naviagte('/login/')} className="search-button">
            Login
            </button>
          </div>
        </div>
        </div>
        <div className="text-container">
        <div className="area-1">
        <div className="text-1">
          <h1 className="tutorial-header">Track Your Personal Finances Easier!</h1>
          <ul className="bullet-list">
          <li><p>Interactive graphs help track spending </p></li>
          <li><p>Graphs can also help track non regular income</p></li>
          </ul>
        </div>
        <img src={tutorial3} alt="tutorial1" className="tutorial-image" height="50%" width="50%"/>
        </div>

        <div className="area-1">
          <img src={tutorial1} alt="tutorial1" className="tutorial-image" height="50%" width="50%"/>
        <div className="text-1">
          <h1 className="tutorial-header">Finance Made Fast And Easy</h1>
          <ul className="bullet-list">
          <li><p>Quick data collection</p></li>
          <li><p>And many other features to use</p></li>
          </ul>
        </div>
        </div>
        <div className="area-1">
        <div className="text-1">
          <h1 className="tutorial-header">Get Stared Today</h1>
          <div className="button-container">
          <button onClick={() => Naviagte('/login/')} className="search-button">
            Register
          </button>
          <button onClick={() => Naviagte('/login/')} className="search-button">
            Login
            </button>
          </div>
          <Footer />
          
        </div>
        </div>
      </div>
      </div>
  );
};
//leftover from sidebar context, delete later
const LandingPage = () => {
  return (
      <LandingPages />
  );
};

export default LandingPage;
