import React, { useState, useEffect } from 'react';
import Hero from './Hero/Hero';

import { PortfolioProvider } from '../context/context';


function App() {
  const [hero, setHero] = useState({});

  return (
    <PortfolioProvider value={{ hero }}>
      <Hero />
    </PortfolioProvider>
  );
}

export default App;
