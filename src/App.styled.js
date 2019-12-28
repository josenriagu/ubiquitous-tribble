import styled from 'styled-components';
import theme, { sizes } from './styles/Theme';

export const AppDiv = styled.div`
  width: ${sizes.desktop};
  margin: 0 auto;
  @media ${theme.mobile} {
    width: ${sizes.mobileRes};
    margin: .5rem auto;
  }
`;