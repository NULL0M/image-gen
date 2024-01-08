// /src/components/Card.jsx

import './Card.scss';

import { download } from '../assets'; //
import { downloadImage } from '../utils';

// Functional component definition for the Card.
const Card = ({ _id, name, prompt, photo }) => (
  <div className='card'>
    <img className='card-image' src={photo} alt={prompt} />

    <div className='group-hover-container'>
      {/* Paragraph displaying the prompt */}
      <p className='prompt'>{prompt}</p>

      <div className='user-details-container'>
        {/* Avatar element displaying the first character of the user's name */}
        <div className='user-avatar'>{name[0]}</div>

        <p className='user-name'>{name}</p>
      </div>

      {/* Button for downloading the image */}
      <button
        type='button'
        onClick={() => downloadImage(_id, photo)}
        className='download-button'>
        <img src={download} alt='download' className='download-icon' />
      </button>
    </div>
  </div>
);

// Exporting the Card component as the default export for use in other parts of the application.
export default Card;
