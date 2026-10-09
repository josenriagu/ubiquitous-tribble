import styled, { keyframes } from 'styled-components';
import { screens } from '../../styles/variables';

const grow = keyframes`
  from {
    transform: scaleX(0);
  }
`;

// the timeline, drawn to scale from January of the first year to the end of the current one
export const Timeline = styled.div`
  position: relative;
  padding-top: 1.75rem;
  margin-top: 1.25rem;
  .grid {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: grid;
    pointer-events: none;
    span {
      border-left: 1px solid var(--line);
      font: 400 0.75rem var(--mono);
      color: var(--muted);
      padding-left: 0.2rem;
      font-variant-numeric: tabular-nums;
      white-space: nowrap;
    }
  }
  .rows {
    position: relative;
    display: grid;
    gap: 1.1rem;
    padding-block: 0.75rem 0.5rem;
  }
  .row {
    display: grid;
    gap: 0.4rem;
    p {
      font-size: 0.9375rem;
      line-height: 1.35;
      b {
        font-weight: 600;
      }
      span {
        color: var(--muted);
        font-family: var(--mono);
        font-size: 0.75rem;
        white-space: nowrap;
      }
    }
  }
  .track {
    position: relative;
    height: 0.75rem;
  }
  .bar {
    position: absolute;
    left: var(--s);
    width: var(--w);
    top: 0;
    bottom: 0;
    background: var(--bar);
    border-radius: 999px;
    transform-origin: left;
    animation: ${grow} 0.9s 0.5s var(--ease) backwards;
    &.now {
      background: var(--gold);
    }
  }
  @media ${screens.reducedMotion} {
    .bar {
      animation: none;
    }
  }
`;
