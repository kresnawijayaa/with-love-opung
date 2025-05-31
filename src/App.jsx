import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import AppRoutes from './routes';

const App = () => {
  return (
    <Router>
      {/* <nav>
        <Link to="/">Home</Link>  |  
        <Link to="/about">About</Link>  |  
        <Link to="/contact">Contact</Link>  |  
        <Link to="/template1">Template1</Link>
      </nav> */}
      
      <AppRoutes />
    </Router>
  );
};

export default App;
