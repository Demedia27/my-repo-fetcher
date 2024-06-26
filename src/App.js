
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Link } from 'react-router-dom';
import RepositoriesList from './RepositoriesList';
import Repository from './Repository';
import ErrorBoundary from './ErrorBoundary';
import './App.css';

const NotFound = () => {
  let location = useLocation();

  return (
    <div>
      <h3>No match for <code>{location.pathname}</code></h3>
    </div>
  );
};

const App = () => {
  return (
    <Router>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to='https://github.com/Demedia27'>GitHub Acount</Link></li>
            <li>Udeme Inwang: Portfolio</li>
          </ul>
        </nav>
        <h2>List of my Repositories</h2>
      <main className="container">
        <ErrorBoundary>
          <Routes>
            <Route path="/" element={<RepositoriesList />} />
            <Route path="/:repoName" element={<Repository />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </ErrorBoundary>
      </main>
      <footer>
        <p>&copy; 2024 <a href="https://www.linkedin.com/in/udeme-udo-b0841b165/">DemsyCoda. </a>All Rights Reserved.</p>
      </footer>
    </Router>
  );
};

export default App;

