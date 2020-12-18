import './App.css';

import { BrowserRouter as Router } from 'react-router-dom'

import Nav from './layout/Nav'
import Main from './layout/Main'


function App() {
  return (
    <Router>
      <div className="app-cnt">
        <Nav />
        <Main />
      </div>
    </Router>
  );
}

export default App;
