import Home from "../src/Pages/Home/Home.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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
