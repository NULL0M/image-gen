import { memo } from 'react';
import './ProjectDescriptionContainer.scss';

const ProjectDescriptionContainer = memo(() => {
  return (
    <p className='corem-ipsum-dolor'>
      Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
      libero et velit interdum, ac aliquet odio mattis. Class aptent taciti
      sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
      Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur
      neque. Ut diam quam, semper iaculis condimentum ac, vestibulum eu nisl.
    </p>
  );
});

export default ProjectDescriptionContainer;
