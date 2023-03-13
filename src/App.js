import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Pages //
import Home from './pages/Home/component';

// Components //
import Navigation from './components/Navbar/component';
import Footer from './components/Footer/component';
import Work from './components/Work/component';
import About from './components/About/component';
import Inquire from './components/Inquire/component';

const App = () => {
    return (
        <>
            <Router>
                <Navigation/>
                    <Routes>
                        <Route
                            path="/"
                            element={ <Home /> }
                        />
                        <Route
                            path="/work"
                            element={ <Work /> }
                        />
                        <Route
                            path="/about"
                            element={ <About /> }
                        />
                        <Route
                            path="/inquire"
                            element={ <Inquire /> }
                        />
                    </Routes>
                <Footer/>
            </Router>
        </>
    );
}

export default App;