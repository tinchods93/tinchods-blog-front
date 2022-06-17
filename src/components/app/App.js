import React from 'react';
import NavBar from '../NavBar/Navbar';
import Topbar from '../Topbar/Topbar';
import './main.css';

function App() {
  return (
    <div className='App'>
      <header>
        <Topbar />
        <NavBar />
      </header>
      <main>
        main body
      </main>
      <footer>
        footer
      </footer>
    </div>
  );
}

export default App;
