//src/components/DiscoverTheAIContainer.jsx
import React from 'react';

import { useEffect, useState } from 'react';
import Card from './Card';
import Loader from './Loader';

import './DiscoverTheAIContainer.scss';
import { ButtonStartCreating } from './ButtonStartCreating';

const RenderCards = ({ data, title }) => {
  if (data?.length > 0) {
    return data.map((post) => <Card key={post._id} {...post} />);
  }
  return <h2 className='mt-5'>{title}</h2>;
};

const DiscoverTheAIContainer = () => {
  // State variables for managing loading state, fetched posts, search text, and results.
  const [loading, setLoading] = useState(true);
  const [allPosts, setAllPosts] = useState(null);
  const [searchText, setSearchText] = useState('');
  const [searchTimeout, setSearchTimeout] = useState(null);
  const [searchedResults, setSearchedResults] = useState(null);

  // Function to fetch posts from the API and handle loading states.
  const fetchPosts = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        // "https://dalle-arbb.onrender.com/api/v1/post",
        'http://localhost:8080/api/v1/dalle',
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.ok) {
        const result = await response.json();
        // Updating state with reversed data if available, else logging an error.
        if (result.data) {
          setAllPosts(result.data.reverse());
        } else {
          console.error('Data is undefined or null in the API response');
        }
      }
    } catch (err) {
      // Displaying an alert for any fetch error.
      alert(err);
    } finally {
      setLoading(false);
    }
  };

  // useEffect hook to fetch posts on component mount.
  useEffect(() => {
    fetchPosts();
  }, []);

  // Function to handle search text changes and filter posts accordingly.
  const handleSearchChange = (e) => {
    clearTimeout(searchTimeout);
    setSearchText(e.target.value);

    // Setting a timeout for a delayed search to avoid frequent API calls.
    setSearchTimeout(() => {
      const searchResult = allPosts.filter(
        (item) =>
          item.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
          item.prompt.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setSearchedResults(searchResult);
    }, 1000);
  };

  return (
    <section className='discovertheai'>
      <div className='discovertheai1'>
        <h2 className='discover-the-ai'>Discover the AI</h2>
      </div>

      <div className='form-search '>
        <input
          type='text'
          className='describe-search '
          placeholder='Search something...'
          value={searchText}
          onChange={handleSearchChange}
        />
      </div>

      <div className='imagesContainer'>
        {loading ? (
          <div className='loaderSearch'>
            <Loader />
          </div>
        ) : (
          <>
            {searchText && (
              <h2 className='showingResults'>
                Showing Results for: <span className='text'>{searchText}</span>
              </h2>
            )}
            <div className='grid-container'>
              {searchText ? (
                <RenderCards
                  data={searchedResults}
                  title='No Search Results Found'
                />
              ) : (
                <RenderCards data={allPosts} title='No Posts Yet' />
              )}
            </div>
          </>
        )}
      </div>

      <ButtonStartCreating />
    </section>
  );
};

export default DiscoverTheAIContainer;
