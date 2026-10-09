import { useRef, useSyncExternalStore } from 'react';

import useNow from '../../hooks/useNow';
import { yearsLabel } from '../../utils/experience';
import { firstYear, roles } from './roles';
import { Timeline } from './Experience.styled';

// number of years on the axis: from the first year to the current one
export const axisYears = (today) =>
  Math.max(1, today.getFullYear() - firstYear + 1);

const monthIndex = ([year, month]) => (year - firstYear) * 12 + (month - 1);

// where a role's bar starts and how wide it is, as a share of the axis
export const span = (role, today) => {
  const total = axisYears(today) * 12;
  const first = monthIndex(role.start);
  const last = monthIndex(
    role.end || [today.getFullYear(), today.getMonth() + 1],
  );
  const percent = (months) => `${((months / total) * 100).toFixed(2)}%`;
  return { '--s': percent(first), '--w': percent(last - first + 1) };
};

// label every year when there is room, otherwise every second or third, so
// the labels never collide; an unknown width labels them all
export const labelStep = (width, years) =>
  width > 0 ? Math.max(1, Math.ceil(40 / (width / years))) : 1;

const onResize = (onChange) => {
  window.addEventListener('resize', onChange);
  return () => window.removeEventListener('resize', onChange);
};

const Experience = () => {
  const today = useNow();
  const grid = useRef(null);
  const width = useSyncExternalStore(
    onResize,
    () => (grid.current ? grid.current.clientWidth : 0),
    () => 0,
  );
  const years = axisYears(today);
  const step = labelStep(width, years);

  return (
    <section className="tile" style={{ '--d': 8 }} aria-labelledby="exp-h">
      <h2 id="exp-h">Experience</h2>
      <p className="sub">
        <span data-testid="years">{yearsLabel(today)}</span>, all remote. Drawn
        to scale.
      </p>
      <Timeline>
        <div
          className="grid"
          ref={grid}
          style={{ gridTemplateColumns: `repeat(${years}, minmax(0, 1fr))` }}
          aria-hidden="true"
        >
          {Array.from({ length: years }, (_, i) => (
            <span key={i}>{i % step === 0 ? firstYear + i : ''}</span>
          ))}
        </div>
        <ul className="rows">
          {roles.map((role) => (
            <li className="row" key={role.company} style={span(role, today)}>
              <p>
                <b>{role.company}</b>
                {` · ${role.title} `}
                <span>{role.period}</span>
              </p>
              <div className="track" aria-hidden="true">
                <div className={role.end ? 'bar' : 'bar now'}></div>
              </div>
            </li>
          ))}
        </ul>
      </Timeline>
    </section>
  );
};

export default Experience;
