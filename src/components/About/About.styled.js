import styled from 'styled-components';

export const AboutTile = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
  .big {
    font-family: var(--display);
    font-size: clamp(1.25rem, 2vw, 1.5rem);
    line-height: 1.3;
    letter-spacing: -0.015em;
    text-wrap: balance;
  }
`;
