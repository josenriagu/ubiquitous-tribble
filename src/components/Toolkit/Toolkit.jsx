import { useState } from 'react';

import { toolkit } from './toolkitList';
import { ToolkitTile } from './Toolkit.styled';

const Toolkit = () => {
  const [paused, setPaused] = useState(false);

  // drawn twice so the line can loop without a gap; the copy is decoration
  const skills = (copy) => (
    <ul aria-hidden={copy ? 'true' : undefined}>
      {toolkit.map((skill) => (
        <li key={skill}>{skill}</li>
      ))}
    </ul>
  );

  return (
    <ToolkitTile className="tile" style={{ '--d': 12 }} aria-labelledby="kit-h">
      <div className="kit-top">
        <div>
          <h2 id="kit-h">Toolkit</h2>
          <p className="sub">What I reach for most.</p>
        </div>
        <button
          className="pause"
          type="button"
          aria-pressed={paused}
          onClick={() => setPaused(!paused)}
        >
          {paused ? 'Play' : 'Pause'}
        </button>
      </div>
      <div className={paused ? 'marquee paused' : 'marquee'}>
        {skills(false)}
        {skills(true)}
      </div>
    </ToolkitTile>
  );
};

export default Toolkit;
