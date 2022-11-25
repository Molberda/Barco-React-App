import { BrowserRouter as Router, Route,  Routes } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Home from './Pages/Home';

function App() {
  return (
    <Router>
      <Nav/>
      <Routes>
        <Route to="/" element={<Home/>}/>
      </Routes>
    </Router>
  );
}

export default App;
