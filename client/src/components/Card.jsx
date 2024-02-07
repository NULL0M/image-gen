// image-gen/client/src/components/Card.jsx
import { useContext } from 'react';
import { download } from '../assets';
import { downloadImage } from '../utils';

import './Card.scss';

import { MyContext } from '../contexts/context';
const Card = ({ _id, prompt, userID, photo, positionInGrid }) => {
  // const { post } = useContext(MyContext);
  // console.log(post);
  return (
    <div className={`card ${getImageClass(positionInGrid)}`}>
      <img className='card-image' src={photo} alt={prompt} />

      <div className='group-hover-container'>
        <p className='prompt'>{prompt}</p>

        <div className='user-details-container'>
          <div className='user-avatar'></div>
          <p className='user-name'>{userID ? userID.user : 'no data'}</p>
        </div>

        <button
          type='button'
          onClick={() => downloadImage(_id, photo)}
          className='download-button'>
          <img src={download} alt='download' className='download-icon' />
        </button>
      </div>
    </div>
  );
};
const getImageClass = (positionInGrid) => {
  switch (positionInGrid) {
    case 1:
      return 'Img1';
    case 2:
      return 'Img2';
    case 3:
      return 'Img3';
    case 4:
      return 'Img4';
    case 5:
      return 'Img5';
    case 6:
      return 'Img6';
    case 7:
      return 'Img7';
    case 8:
      return 'Img8';
    case 9:
      return 'Img9';
    case 10:
      return 'Img10';
    case 11:
      return 'Img11';
    case 12:
      return 'Img12';
    case 13:
      return 'Img13';
    case 14:
      return 'Img14';
    case 15:
      return 'Img15';
    case 16:
      return 'Img16';
    case 17:
      return 'Img17';
    case 18:
      return 'Img18';
    case 19:
      return 'Img19';
    case 20:
      return 'Img20';
    case 21:
      return 'Img21';

    default:
      return '';
  }
};

export default Card;
