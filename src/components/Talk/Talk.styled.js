import styled from 'styled-components';
import { screens } from '../../styles/variables';

// dark in both themes, so its focus ring switches to gold to stay visible
export const TalkTile = styled.section`
  --ring: var(--dark-gold);
  background: var(--dark);
  border-color: var(--dark-line);
  color: var(--dark-fg);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;
  h2 {
    font-style: italic;
    font-size: 2rem;
  }
  p {
    color: var(--dark-muted);
    margin-top: 0.75rem;
  }
  .btn {
    align-self: flex-start;
    display: inline-block;
    font: 600 0.9375rem/1 var(--body);
    padding: 0.9rem 1.4rem;
    border-radius: 999px;
    background: var(--dark-fg);
    color: #1c1326;
    text-decoration: none;
    transition: transform 0.15s ease;
    &:hover {
      color: #1c1326;
      transform: translateY(-2px);
    }
  }
  @media ${screens.reducedMotion} {
    .btn {
      transition: none;
      &:hover {
        transform: none;
      }
    }
  }
`;
