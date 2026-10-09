import styled from 'styled-components';
import { screens } from './styles/variables';

// the location tile and the profile links, stacked beside the hero
export const Side = styled.div`
  display: grid;
  gap: var(--gap);
  min-width: 0;
  @media ${screens.tablet} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media ${screens.desktop} {
    grid-template-columns: minmax(0, 1fr);
    grid-template-rows: auto 1fr;
  }
`;
