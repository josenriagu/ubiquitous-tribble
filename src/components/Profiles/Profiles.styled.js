import styled from 'styled-components';
import { screens } from '../../styles/variables';

export const ProfileList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: var(--gap);
  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    min-height: 8rem;
    height: 100%;
    padding: 1rem 0.5rem;
    background: var(--surface);
    border: 1px solid var(--line);
    border-radius: var(--radius);
    box-shadow: var(--shadow);
    text-decoration: none;
    font: 500 0.75rem var(--mono);
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--muted);
    transition:
      transform 0.35s var(--ease),
      box-shadow 0.35s ease,
      color 0.2s ease,
      border-color 0.2s ease;
    &:hover {
      transform: translateY(-5px);
      box-shadow: var(--shadow-up);
      color: var(--ink);
      border-color: var(--gold);
    }
    &:hover svg {
      transform: scale(1.18) rotate(-6deg);
    }
  }
  svg {
    width: 1.5rem;
    height: 1.5rem;
    fill: none;
    stroke: currentColor;
    stroke-width: 1.75;
    stroke-linecap: round;
    stroke-linejoin: round;
    transition: transform 0.35s var(--ease);
  }
  @media ${screens.reducedMotion} {
    a,
    svg {
      transition: none;
    }
    a:hover,
    a:hover svg {
      transform: none;
    }
  }
`;
