
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Add this import

const RepositoriesList = () => {
  const [repos, setRepos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchRepos = async (page) => {
    const url = `https://api.github.com/users/Demedia27/repos?page=${page}&per_page=10`;
    const response = await axios.get(url);
    setRepos(response.data);
  };

  useEffect(() => {
    fetchRepos(currentPage);
  }, [currentPage]);

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
    alert("404, Page not found. Check later.")
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className='repo'>
      {repos.map(repo => (
        <div className='cta-button' key={repo.id}>
          {/* Link to the individual repository */}
          <Link to={`/${repo.name}`}>{repo.name}</Link>
        </div>
      ))}
      <button onClick={prevPage}>Previous Page</button>
      <button onClick={nextPage}>Next Page</button>
    </div>
  );
};

export default RepositoriesList;
