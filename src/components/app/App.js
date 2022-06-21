import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MainComponent from '../Main/Main';
import './main.css';

function App() {
  return (
    <div className='App'>
      {/* <Header/> */}
      <MainComponent/>
      <Footer/>
    </div>
  );
}

export default App;
