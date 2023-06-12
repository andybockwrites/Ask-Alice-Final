import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SearchResults from './pages/SearchResults';
import Error from './pages/Error';
import Header from './components/header';
import Footer from './components/footer';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Header/>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/searchresults" element={<SearchResults />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </div>
      </div>
    </Router>
      );
}

      export default App;
