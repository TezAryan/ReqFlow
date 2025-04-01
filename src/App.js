import './App.css';

import { Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Navbar from './components/Navbar';
import Hero from './components/Hero';


function App() {
  return (
    <div>
     
      
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/Hero" element={<Hero />} />
        
        
      </Routes>
      
      
 
      
    </div>
  );
}

export default App;
