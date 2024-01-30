// src/components/DiscoverTheAIContainer.jsx
import React, { useEffect, useState } from 'react';
import Card from './Card';
import { ButtonStartCreating } from './ButtonStartCreating';
import './DiscoverTheAIContainer.scss';

// Custom reusable component to render list of Card components
const RenderCards = ({ data, title }) => {
  const getPositionInGrid = (index) => {
    return (index % 21) + 1; // Considering a grid of 21 columns
  };

  if (data?.length > 0) {
    return data.map((post, index) => (
      <Card
        key={post._id}
        {...post}
        positionInGrid={getPositionInGrid(index)}
      />
    ));
  }
  return <h2 className='mt-5'>{title}</h2>;
};

const DiscoverTheAIContainer = () => {
  const [loading, setLoading] = useState(true);
  const [allPosts, setAllPosts] = useState(null);
  const [searchedResults, setSearchedResults] = useState(null);
  const [searchText, setSearchText] = useState('');

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
    if (e.target.value === '') {
      setSearchedResults(null);
    } else {
      console.log('Search text:', e.target.value);
      console.log('All posts:', allPosts);
  
      const results = allPosts?.filter((post) => {
        const lowercasedTitle = post.prompt?.toLowerCase();
        const lowercasedSearchText = e.target.value.toLowerCase();
      
        // Check if lowercasedTitle is defined before using includes
        return lowercasedTitle !== undefined && lowercasedTitle.includes(lowercasedSearchText);
      });
      
      console.log('Search results:', results);
      setSearchedResults(results);
    }
  };

  const fetchPosts = async () => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:8090/api/v1/post', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const result = await response.json();
        if (result.data) {
          setAllPosts(result.data.reverse());
        } else {
          console.error('Data is undefined or null in the API response');
        }
      }
    } catch (err) {
      alert(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  // Calculate the number of grids needed based on the number of photos
  const numGrids = Math.ceil((allPosts?.length || 0) / 21);

  // Create an array of grid indices to map over
  const gridIndices = Array.from({ length: numGrids }, (_, index) => index);

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
          onChange={(e) => handleSearchChange(e)}
        />
      </div>

      <div className='imagesContainer'>
        {gridIndices.map((gridIndex) => (
          <React.Fragment key={gridIndex}>
            {gridIndex > 0 && (
              <h2 className='showingResults'>Next Set of Photos</h2>
            )}
            <div className='grid-container'>
              <RenderCards
                data={searchText ? searchedResults : allPosts}
                title={searchText ? 'No matching posts' : `No Posts Yet in Grid ${gridIndex + 1}`}
              />
            </div>
          </React.Fragment>
        ))}
      </div>

      <ButtonStartCreating />
    </section>
  );
};

export default DiscoverTheAIContainer;
