import './App.css';

import { BrowserRouter as Router } from 'react-router-dom'

import { GlobalContextProvider } from './context/GlobalContext'

import Nav from './layout/Nav'
import Main from './layout/Main'


function App() {
  return (
    <Router>
      <GlobalContextProvider>
        <div className="app-cnt">
          <Nav />
          <Main />
        </div>
      </GlobalContextProvider>
    </Router>
  );
}

export default App;
