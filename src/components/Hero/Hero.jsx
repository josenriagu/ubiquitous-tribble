import avatar from '../../assets/avatar.webp';
import useNow from '../../hooks/useNow';
import { yearsLabel } from '../../utils/experience';
import ThemeToggle from '../ThemeToggle';
import { HeroTile } from './Hero.styled';

function Hero() {
  const now = useNow();

  return (
    <HeroTile className="tile" style={{ '--d': 8 }} aria-labelledby="hero-h">
      <div>
        <div className="hero-top">
          <p className="label">
            Full stack software engineer · Frontend focused
          </p>
          <div className="hero-tools">
            <ThemeToggle />
            <img
              className="avatar"
              src={avatar}
              alt=""
              width="48"
              height="48"
            />
          </div>
        </div>
        <h1 id="hero-h">
          Josemaria Nriagu.{' '}
          <span>I build the part of the product people actually touch.</span>
        </h1>
      </div>
      <p className="lede">
        <span data-testid="years">{yearsLabel(now)}</span> of shipping web
        products with React and TypeScript, from the first conversation with a
        user to the release and everything after it. Co-founder of two live
        products, and before that a core maintainer of an open-source framework
        for five years.
      </p>
    </HeroTile>
  );
}

export default Hero;
