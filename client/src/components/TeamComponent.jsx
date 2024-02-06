import TheTeamBox from './TheTeamBox';
import TheTeamTitle from './TheTeamTitle';
import ProjectDescriptionContainer from './ProjectDescriptionContainer';
import './TeamComponent.scss';

const TeamComponent = () => {
  return (
    <section className='frame-section'>
      <TheTeamBox />
      <TheTeamTitle />
      <ProjectDescriptionContainer />
    </section>
  );
};

export default TeamComponent;
