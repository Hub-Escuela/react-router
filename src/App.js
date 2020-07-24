import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Routes from './router/Routes';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        <Routes />
      </div>
    </Router>
  );
}

export default App;
