import styled from 'styled-components';

import { bounce, beat } from '../../styles/Animations';
import { screens } from '../../styles/variables';

export const AppHeader = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 85vh;
  margin-top: .5rem;
  padding: 1rem;
  div:last-child {
    text-align: center;
    margin-bottom: 20rem;
    img#mouse {
      width: 2rem;
      position: absolute;
      animation: ${bounce} 1.3s ease infinite;
    }
    img#scroll {
      display: none;
      width: 4rem;
      bottom: 2rem;
      right: 2rem;
      position: fixed;
      z-index: 999;
      opacity: .4;
      animation: ${beat} 3s ease infinite;
      :hover {
        opacity: 1;
      }
      @media ${screens.mobile} {
        display: none !important;
      }
    }
  }
`;
