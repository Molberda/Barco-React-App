import { BrowserRouter as Router, Route,  Routes } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';

function App() {
  return (
    <Router>
      <Nav/>
      <Routes>
        <Route to=""/>
      </Routes>
    </Router>
  );
}

export default App;
