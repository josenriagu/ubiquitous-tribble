import styled from 'styled-components';

export const ArchiveList = styled.ul`
  display: grid;
  margin-top: 1rem;
  li {
    display: grid;
    grid-template-columns: minmax(0, 1fr) auto;
    gap: 0.1rem 1rem;
    padding-block: 0.7rem;
    border-top: 1px solid var(--line);
    align-items: baseline;
    &:first-child {
      border-top: 0;
      padding-top: 0;
    }
  }
  b {
    font-weight: 600;
  }
  li > span {
    color: var(--muted);
    font-size: 0.9375rem;
  }
  /* :not(.stack) keeps the description from landing on top of the stack tag */
  li > span:not(.stack) {
    grid-column: 1 / -1;
    grid-row: 2;
  }
  li > .stack {
    font: 400 0.75rem var(--mono);
    white-space: nowrap;
  }
`;
