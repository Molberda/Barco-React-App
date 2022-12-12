import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Menu from "./Pages/Menu";
import { items } from "./data.js"
import Burger from "./ui/Burger";

function App() {
  return (
    <Router>
      <Burger/>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu items={ items } />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
