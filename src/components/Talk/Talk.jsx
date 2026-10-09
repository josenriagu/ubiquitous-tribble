import { TalkTile } from './Talk.styled';

// Where "Say hello" sends mail. Set VITE_CONTACT_EMAIL to change it without
// touching the code. The address is only ever a link target, never shown.
export const contactEmail =
  import.meta.env.VITE_CONTACT_EMAIL || 'upriver-brooms.9p@icloud.com';

const Talk = () => {
  return (
    <TalkTile
      className="tile"
      style={{ '--d': 4, '--t': 6 }}
      aria-labelledby="talk-h"
    >
      <div>
        <h2 id="talk-h">Let's talk.</h2>
        <p>
          Need a hand on an interesting product? I usually reply within a few
          hours.
        </p>
      </div>
      <a className="btn" href={`mailto:${contactEmail}`}>
        Say hello
      </a>
    </TalkTile>
  );
};

export default Talk;
