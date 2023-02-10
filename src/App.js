import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'

import Header from './components/Header';
import News from './components/News';
import About from './components/About';
import Advantages from './components/Advantages';
import Download from './components/Download';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
        <Header />
        <News />
        <About />
        <Advantages />
        <Download />
        <Footer />
    </div>
  );
}

export default App;
