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
    // console.log('what is in data', data[0]);
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
      const results = allPosts?.filter((post) => {
        const lowercasedTitle = post.prompt?.toLowerCase();
        const lowercasedSearchText = e.target.value.toLowerCase();
        return (
          lowercasedTitle !== undefined &&
          lowercasedTitle.includes(lowercasedSearchText)
        );
      });
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
        // console.log('result of post', result.data);
        if (result.data) {
          setAllPosts(result.data.reverse());
        } else {
          console.error('Data is undefined or null in the API response');
        }
      }
    } catch (err) {
      alert(err);
      s;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const dataToUse = searchText ? searchedResults : allPosts;
  const numGrids = Math.ceil((dataToUse?.length || 0) / 21);

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
        {Array.from({ length: numGrids }, (_, index) => index).map(
          (gridIndex) => (
            <div className='grid-container' key={gridIndex}>
              <RenderCards
                data={dataToUse.slice(gridIndex * 21, (gridIndex + 1) * 21)}
                title={
                  dataToUse.length === 0
                    ? 'No matching posts'
                    : `No Posts Yet in Grid ${gridIndex + 1}`
                }
              />
            </div>
          )
        )}
      </div>

      <ButtonStartCreating />
    </section>
  );
};

export default DiscoverTheAIContainer;
