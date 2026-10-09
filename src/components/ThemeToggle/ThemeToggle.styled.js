import styled from 'styled-components';
import { screens } from '../../styles/variables';

export const ToggleButton = styled.button`
  display: grid;
  place-items: center;
  width: 3rem;
  height: 3rem;
  padding: 0;
  border-radius: 50%;
  border: 1px solid var(--line);
  background: var(--bg);
  color: var(--ink);
  cursor: pointer;
  transition:
    transform 0.35s var(--ease),
    border-color 0.2s ease;
  &:hover {
    transform: rotate(18deg) scale(1.06);
    border-color: var(--gold);
  }
  svg {
    width: 1.25rem;
    height: 1.25rem;
    fill: none;
    stroke: currentColor;
    stroke-width: 1.75;
    stroke-linecap: round;
    stroke-linejoin: round;
  }
  @media ${screens.reducedMotion} {
    &:hover {
      transform: none;
    }
  }
`;
