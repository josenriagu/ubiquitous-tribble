import styled, { keyframes } from 'styled-components';
import { screens } from '../../styles/variables';

const ping = keyframes`
  from {
    transform: scale(1);
    opacity: 0.9;
  }
  to {
    transform: scale(5);
    opacity: 0;
  }
`;

// the same motion under a second name, so hovering can start it again
const pingAgain = keyframes`
  from {
    transform: scale(1);
    opacity: 0.9;
  }
  to {
    transform: scale(5);
    opacity: 0;
  }
`;

export const LocationTile = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 3.5rem;
  .map {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }
  .dots {
    fill: none;
    stroke: var(--bar);
    stroke-opacity: 0.5;
    stroke-width: 0.56;
    stroke-linecap: round;
  }
  .here {
    fill: var(--gold);
  }
  /* pulses three times on load, and twice more whenever the tile is hovered */
  .ping {
    fill: none;
    stroke: var(--gold);
    stroke-width: 0.4;
    opacity: 0;
    transform-box: fill-box;
    transform-origin: center;
    animation: ${ping} 1.5s ease-out 0.8s 3 backwards;
  }
  &:hover .ping {
    animation: ${pingAgain} 1.5s ease-out 2;
  }
  .loc-top {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 1rem;
    div {
      text-align: right;
    }
    h2 {
      font: 500 0.75rem var(--mono);
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: var(--muted);
    }
  }
  .pin {
    display: grid;
    place-items: center;
    width: 2.75rem;
    height: 2.75rem;
    border-radius: 0.9rem;
    background: var(--bg);
    color: var(--ink);
    svg {
      width: 1.5rem;
      height: 1.5rem;
      fill: none;
      stroke: currentColor;
      stroke-width: 1.75;
      stroke-linecap: round;
      stroke-linejoin: round;
    }
  }
  .clock {
    font-family: var(--display);
    font-weight: 700;
    font-size: 2.5rem;
    line-height: 1;
    letter-spacing: -0.03em;
    font-variant-numeric: tabular-nums;
    small {
      font-size: 0.4em;
      font-weight: 600;
      color: var(--muted);
      letter-spacing: 0;
      margin-left: 0.2em;
    }
  }
  @media ${screens.reducedMotion} {
    .ping,
    &:hover .ping {
      animation: none;
      opacity: 0;
    }
  }
`;
