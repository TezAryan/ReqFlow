import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import Features from "./Features";
import Navbar from "./Navbar";

const Home = () => {
  const navigate = useNavigate();

  return (
    <section>
    <div><Navbar/></div>

    <section className="home">
      
      <h1>
        <span className="highlight">Welcome To</span> ReqFlow
      </h1>
      <h2>
        AI <span className="highlight">Powered</span>{" "}
        <span className="highlight-alt">Requirement Automation</span>
      </h2>
      <p>
        ReqFlow simplifies analysis by extracting key points, generating <br />
        workflows, and visualizing insights instantly!
      </p>
      <button className="get-started" onClick={() => navigate("/Hero")}>
        GET STARTED
      </button>
      <div className="features"><Features /></div>
      
    </section>
    </section>  
  );
};

export default Home;
