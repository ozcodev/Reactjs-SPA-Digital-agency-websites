import React from 'react';
import { Navbar, Footer } from './components';

import RoutesAnimation from './utils/animationRoutes';
import { BrowserRouter as Router } from 'react-router-dom';

const App = () => (
  <div>
    <Router>
      <Navbar />
      <RoutesAnimation />
      <Footer />
    </Router>
  </div>
);

export default App;
