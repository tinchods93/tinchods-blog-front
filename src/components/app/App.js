import React, { useState, useEffect, createContext } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MainComponent from '../Main/Main';
import './main.css';

const SizeContext = createContext({ width: 0, height: 0 });

function App() {
  const [windowDimension, detectHW] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const detectSize = () => {
    detectHW({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener('resize', detectSize);

    return () => {
      window.removeEventListener('resize', detectSize);
    };
  }, [windowDimension]);

  return (
    <div className='App'>
      <SizeContext.Provider value={windowDimension}>
        <Header context={SizeContext}/>
        <MainComponent />
        <Footer />
      </SizeContext.Provider>
    </div>
  );
}

export default App;
