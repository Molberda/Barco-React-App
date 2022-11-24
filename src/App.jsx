import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';

function App() {
  return (
    <Router>
      <Nav/>
      <Routes>
        <Route />
      </Routes>
    </Router>
  );
}

export default App;
