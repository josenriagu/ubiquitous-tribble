import styled from 'styled-components';
import { screens, sizes } from './styles/variables';

export const AppDiv = styled.div`
  width: ${sizes.desktop};
  margin: 0 auto;
  @media ${screens.mobile} {
    width: ${sizes.mobileRes};
    margin: .5rem auto;
  }
`;