import { BrowserRouter as Router, Route,  Routes } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Home from './Pages/Home';
import Menu from './Pages/Menu';

function App() {
  return (
    <Router>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/menu" element={<Menu/>}/>
      </Routes>
    </Router>
  );
}

export default App;
