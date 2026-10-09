import { AboutTile } from './About.styled';

const About = () => {
  return (
    <AboutTile
      className="tile"
      style={{ '--d': 6, '--t': 3 }}
      aria-labelledby="about-h"
    >
      <h2 id="about-h">About</h2>
      <p className="big">
        I care about the half-second between a tap and a response, and about the
        team that has to maintain the code afterwards.
      </p>
      <p className="sub">
        I trained as an electronics and computer engineer and started out
        building interactive websites for clients. Away from the keyboard I will
        happily talk art, music, science or technology.
      </p>
    </AboutTile>
  );
};

export default About;
