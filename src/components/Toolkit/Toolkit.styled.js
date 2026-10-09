import styled, { keyframes } from 'styled-components';
import { screens } from '../../styles/variables';

const slide = keyframes`
  to {
    transform: translateX(calc(-100% - var(--mgap)));
  }
`;

const fade =
  'linear-gradient(to right, transparent, #000 12%, #000 88%, transparent)';

// one moving line of skills
export const ToolkitTile = styled.section`
  display: grid;
  gap: 1.25rem;
  align-items: center;
  padding-block: 1.25rem;
  @media ${screens.tablet} {
    grid-template-columns: auto minmax(0, 1fr);
    gap: 2rem;
    padding-right: 0;
  }
  .kit-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1.5rem;
    h2 {
      font-family: var(--display);
      font-weight: 700;
      font-size: 1.5rem;
      letter-spacing: -0.02em;
      line-height: 1.15;
    }
  }
  .pause {
    font: 500 0.75rem var(--mono);
    letter-spacing: 0.06em;
    text-transform: uppercase;
    padding: 0.5rem 0.8rem;
    min-height: 2rem;
    border-radius: 999px;
    border: 1px solid var(--line);
    background: var(--bg);
    color: var(--ink);
    cursor: pointer;
    &:hover {
      border-color: var(--gold);
    }
  }
  .marquee {
    --mgap: 0.6rem;
    display: flex;
    gap: var(--mgap);
    overflow: hidden;
    min-width: 0;
    padding-block: 0.25rem;
    -webkit-mask-image: ${fade};
    mask-image: ${fade};
    ul {
      display: flex;
      gap: var(--mgap);
      flex: none;
      animation: ${slide} 38s linear infinite;
    }
    &:hover ul,
    &.paused ul {
      animation-play-state: paused;
    }
    li {
      flex: none;
      padding: 0.55rem 1rem;
      border: 1px solid var(--line);
      border-radius: 999px;
      font-size: 0.9375rem;
      font-weight: 500;
      background: var(--bg);
      white-space: nowrap;
    }
  }
  /* without motion the line becomes plain wrapped chips */
  @media ${screens.reducedMotion} {
    padding-right: var(--pad);
    .marquee {
      -webkit-mask-image: none;
      mask-image: none;
      ul {
        animation: none;
        flex-wrap: wrap;
        flex: 1;
      }
      ul[aria-hidden='true'] {
        display: none;
      }
    }
    .pause {
      display: none;
    }
  }
`;
