import { BrowserRouter as Router, Route,  Routes } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing';
import Nav from './components/Nav';

function App() {
  return (
    <Router>
      <Nav/>
      <Routes>
        <Route to="/" element={<Landing/>}/>
      </Routes>
    </Router>
  );
}

export default App;
