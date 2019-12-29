import styled from 'styled-components';

import theme from '../../styles/Theme';

export const AppFooter = styled.footer`
  margin-top: 10rem;
  padding: 3rem 0 5rem 0;
  a {
    color: ${theme.gold};
  }
  text-align: center;
  h5 {
    a {
      font-size: 1.4rem;
    }
  }
  div {
    display: flex;
    justify-content: space-around;
    margin: 0 auto;
    width: 80%;
    @media ${theme.mobile} {
      width: 100%;
      justify-content: center;
      flex-wrap: wrap;
      h5:nth-child(2){
        display: none;
      }
      h5:nth-child(3){
        text-decoration: underline;
      }
    }
  }
`;