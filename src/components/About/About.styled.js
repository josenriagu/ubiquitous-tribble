import styled from 'styled-components';

import { screens } from '../../styles/variables';

export const AboutDiv = styled.div`
  margin-top: 10rem;
  padding-top: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media ${screens.mobile} {
    display: flex;
    flex-direction: column-reverse;
  }
  div:nth-child(1) {
    display: flex;
    width: 50%;
    height: 80vh;
    align-items: center;
    @media ${screens.mobile} {
      width: 100%;
      height: 50vh;
    }
    img {
      border-radius: 3%;
      max-width: 100%;
    }
  }
  div:nth-child(2) {
    width: 40%;
    @media ${screens.mobile} {
      width: 100%;
      margin-bottom: 3rem;
    }
  }
`;
