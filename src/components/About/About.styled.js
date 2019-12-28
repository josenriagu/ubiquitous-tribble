import styled from 'styled-components';

import theme from '../../styles/Theme';

export const AboutDiv = styled.div`
  margin-top: 10rem;
  padding-top: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media ${theme.mobile} {
    display: flex;
    flex-direction: column-reverse;
  }
  div:nth-child(1) {
    border-radius: 20%;
    width: 48%;
    height: 80vh;
    position: relative;
    @media ${theme.mobile} {
      width: 100%;
      height: 50vh;
    }
    img {
      border-radius: 3%;
      width: 100%;
      height: 100%;
    }
  }
  div:nth-child(2){
    width: 40%;
    @media ${theme.mobile} {
      width: 100%;
    }
    h1 {
      font-size: 4rem;
    }
  }
`;