import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Home from "./Pages/Home";
import Menu from "./Pages/Menu";
import { items } from "./data.js"

function App() {
  return (
    <Router>
      <div className="app">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu items={ items } />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
