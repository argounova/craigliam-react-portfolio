import React, { useState } from 'react';
import './App.css';

// Pages //
import Home from './pages/Home/index';
import About from './pages/About/index';
import Resume from './pages/Resume/index';
import Inquire from './pages/Inquire/index';
import Work from './pages/Work/index';

// Components //
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
    const [currentPage, setCurrentPage] = useState('Home');

    const renderPage = () => {
    if (currentPage === 'Home') {
        return <Home />;
    }
    if (currentPage === 'About') {
        return <About />;
    }
    if (currentPage === 'Resume') {
        return <Resume />;
    }
    if (currentPage === 'Work') {
        return <Work />;
    }
    return <Inquire />;
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
    <div>
        <Navbar currentPage={currentPage} handlePageChange={handlePageChange}/>
        {renderPage()}
        <Footer/>
    </div>
    );
}

export default App;