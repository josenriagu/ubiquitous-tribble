import useNow from '../../hooks/useNow';
import useHydrated from '../../hooks/useHydrated';
import { worldMap } from './worldMap';
import { LocationTile } from './Location.styled';

// current time in Abuja, falling back to the bare offset
const localTime = (now) => {
  try {
    return new Intl.DateTimeFormat('en-GB', {
      hour: '2-digit',
      minute: '2-digit',
      timeZone: 'Africa/Lagos',
    }).format(now);
  } catch {
    return 'UTC+1';
  }
};

function Location() {
  const now = useNow();
  // the prerendered markup cannot know what time the visitor opens it
  const clock = useHydrated() ? localTime(now) : 'UTC+1';
  const { width, height, abuja, dots } = worldMap;

  return (
    <LocationTile className="tile" aria-labelledby="loc-h">
      <svg
        className="map"
        viewBox={`0 0 ${width} ${height}`}
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
        focusable="false"
      >
        <path className="dots" d={dots} />
        <circle className="ping" cx={abuja.x} cy={abuja.y} r="1.1" />
        <circle className="here" cx={abuja.x} cy={abuja.y} r="1.1" />
      </svg>
      <div className="loc-top">
        <span className="pin" aria-hidden="true">
          <svg viewBox="0 0 24 24">
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
        </span>
        <div>
          <h2 id="loc-h">Location</h2>
          <p>Abuja, Nigeria</p>
        </div>
      </div>
      <div>
        <p className="clock">
          <span data-testid="clock">{clock}</span>
          <small>WAT</small>
        </p>
        <p className="sub">Working remotely with global teams.</p>
      </div>
    </LocationTile>
  );
}

export default Location;
