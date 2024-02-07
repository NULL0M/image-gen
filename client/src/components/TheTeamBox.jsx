import { memo, useCallback } from 'react';
import './TheTeamBox.scss';

const TheTeamBox = memo(() => {
  const onMan11ImageClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='frameContainer']");
    if (anchor) {
      anchor.scrollIntoView({ block: 'start', behavior: 'smooth' });
    }
  }, []);

  return (
    <div className='man-1-1-parent'>
      <img
        className='man-1-1-icon'
        alt=''
        src='/man-1-1@2x.png'
        onClick={onMan11ImageClick}
      />
      <img className='man-1-2-icon' alt='' src='/man-1-2@2x.png' />
      <img className='man-1-2-icon' alt='' src='/man-1-3@2x.png' />
      <img className='man-1-2-icon' alt='' src='/man-1-4@2x.png' />
    </div>
  );
});

export default TheTeamBox;
