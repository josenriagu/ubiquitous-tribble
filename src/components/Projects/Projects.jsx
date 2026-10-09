import ExternalLink from '../ExternalLink';
import { projectList } from './projectList';
import { ProjectTile } from './Projects.styled';

const Projects = () => {
  return (
    <>
      {projectList.map((project) => (
        <ProjectTile
          key={project.id}
          className={project.wide ? 'tile wide' : 'tile'}
          style={project.wide ? { '--d': 8 } : { '--d': 4, '--t': 6 }}
          aria-labelledby={`${project.id}-h`}
        >
          <ul className="tags">
            {project.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
          <div className="pbody">
            <h2 id={`${project.id}-h`}>{project.title}</h2>
            <p className="what">{project.description}</p>
            <p className="plinks">
              {project.links.map((link) => (
                <ExternalLink key={link.href} href={link.href} arrow>
                  {link.text}
                </ExternalLink>
              ))}
            </p>
          </div>
          <img
            className="pshot"
            style={{ objectPosition: project.shot.position }}
            src={project.shot.src}
            srcSet={project.shot.srcSet}
            sizes={project.shot.sizes}
            alt={project.shot.alt}
            width={project.shot.width}
            height={project.shot.height}
            loading="lazy"
            decoding="async"
          />
        </ProjectTile>
      ))}
    </>
  );
};

export default Projects;
