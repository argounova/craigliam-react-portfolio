import React from 'react';
import './App.css';

// Pages //
import Home from './pages/Home/component';

// Components //
import Navbar from './components/Navbar/component';
import Footer from './components/Footer/component';

const App = () => {
    return (
    <div>
        <Navbar />
        <Home />
        <Footer/>
    </div>
    );
}

export default App;