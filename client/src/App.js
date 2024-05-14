import logo from './logo.svg';
import Home from "../src/Pages/Home/Home.js";
import { BrowserRouter as Router, Route, Routes, useParams, useLocation } from "react-router-dom";
import './App.css';

function App() {
  return (
    <>
      <Router>
        <div className="main-container">
          <Routes>
            <Route  path="/"  element={<Home />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
