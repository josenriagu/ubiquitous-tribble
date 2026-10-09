import ExternalLink from '../ExternalLink';
import { archiveList } from './archiveList';
import { ArchiveList } from './Archive.styled';

const Archive = () => {
  return (
    <section
      className="tile"
      style={{ '--d': 6, '--t': 3 }}
      aria-labelledby="arch-h"
    >
      <h2 id="arch-h">Earlier builds</h2>
      <ArchiveList>
        {archiveList.map((project) => (
          <li key={project.title}>
            <b>
              <ExternalLink href={project.href}>{project.title}</ExternalLink>
            </b>
            <span>{project.description}</span>
            <span className="stack">{project.stack}</span>
          </li>
        ))}
      </ArchiveList>
    </section>
  );
};

export default Archive;
