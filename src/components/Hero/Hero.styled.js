import styled from 'styled-components';

export const HeroTile = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: clamp(2.5rem, 8vw, 6rem);
  .hero-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
  }
  .hero-tools {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    flex: none;
  }
  .avatar {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    border: 2px solid var(--line);
    flex: none;
  }
  h1 {
    font-family: var(--display);
    font-weight: 800;
    font-size: clamp(2.125rem, 5.4vw, 4rem);
    line-height: 1.02;
    letter-spacing: -0.035em;
    text-wrap: balance;
    margin-top: 1.5rem;
    span {
      display: block;
      color: var(--muted);
      margin-top: 0.4em;
      font-size: 0.82em;
      letter-spacing: -0.03em;
    }
  }
  .lede {
    max-width: 36rem;
    font-size: 1.125rem;
  }
`;
