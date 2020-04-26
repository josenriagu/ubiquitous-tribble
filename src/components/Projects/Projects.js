import React, { useEffect } from 'react';

import { projectList } from './projectList';
import { ProjectDiv } from './Projects.styled';

const Projects = ({ theme }) => {
  useEffect(() => {
    const wrapper = document.querySelector('.projects-wrapper');
    let isDown = false;
    let startX;
    let scrollLeft;

    wrapper.addEventListener('mousedown', e => {
      isDown = true;
      wrapper.classList.add('active');
      startX = e.pageX - wrapper.offsetLeft;
      scrollLeft = wrapper.scrollLeft;
    });
    wrapper.addEventListener('mouseleave', () => {
      isDown = false;
      wrapper.classList.remove('active');
    });
    wrapper.addEventListener('mouseup', () => {
      isDown = false;
      wrapper.classList.remove('active');
    });
    wrapper.addEventListener('mousemove', e => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - wrapper.offsetLeft;
      // to scroll faster, add a multiplier e.g. (x- startX) * 5
      const walk = x - startX;
      wrapper.scrollLeft = scrollLeft - walk;
    });
  }, []);

  return (
    <ProjectDiv id="projects" checker={theme}>
      <h2>Projects</h2>
      <p>
        I spend a couple hours (maybe more{' '}
        <span role="img" aria-label="face with tears of joy">
          😂
        </span>
        ) with my team, on the keyboard, in front of the screen. Hours translate
        to days, then weeks, months even before reality takes over these
        projects
      </p>
      <div data-testid="projects-wrapper" className="projects-wrapper">
        {projectList.map((project, idx) => {
          return (
            <div key={idx}>
              <img src={project.src} alt={project.title} />
              <a href={project.href} target="_blank" rel="noopener noreferrer">
                <h4>{project.title}</h4>
              </a>
              <p>{project.description}</p>
              <p>{project.stack}</p>
              <span>
                <i className="fas fa-project-diagram"></i>
                <p>{project.role}</p>
                <i className="far fa-clock"></i>
                <p>{project.duration}</p>
                <i className="fas fa-users"></i>
                <p>{project.team}</p>
                <i className="devicon-git-plain"></i>
                {project.codebase !== '' ? (
                  <a
                    href={project.codebase}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p>Codebase</p>
                  </a>
                ) : (
                  <p>Private</p>
                )}
                {project.mobileReady === true ? (
                  <i className="fas fa-mobile-alt"></i>
                ) : (
                  <i className="fas fa-mobile"></i>
                )}
                {project.mobileReady && <p>Mobile ready</p>}
              </span>
            </div>
          );
        })}
      </div>
    </ProjectDiv>
  );
};

export default Projects;
