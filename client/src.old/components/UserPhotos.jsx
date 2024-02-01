// image-gen/client/src/components/UserPhotos.jsx
import React, { useEffect, useState } from 'react';
import Card from './Card';
import './UserPhotos.scss';

const UserPhotos = () => {
  const [allPosts, setAllPosts] = useState(null);
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

  // Calculate the number of grids needed based on the number of photos
  const numGrids = Math.ceil((allPosts?.length || 0) / 21);

  // Create an array of grid indices to map over
  const gridIndices = Array.from({ length: numGrids }, (_, index) => index);

  return (
    <div className='userPhotosContainer'>
      <h2>My My generated photos</h2>
      <div className='imagesContainer'>
        {gridIndices.map((gridIndex) => (
          <React.Fragment key={gridIndex}>
            {gridIndex > 0 && (
              <h2 className='showingResults'>
                Be curious and continue to see the amazing photos generated by
                our application
              </h2>
            )}
            <div className='grid-container'>
              <RenderCards
                data={allPosts?.slice(gridIndex * 21, (gridIndex + 1) * 21)}
                title={`No Posts Yet in Grid ${gridIndex + 1}`}
              />
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default UserPhotos;