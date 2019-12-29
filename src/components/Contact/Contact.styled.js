import styled from 'styled-components';

import { screens } from '../../styles/variables';
import { beat } from './../../styles/Animations';

export const ContactDiv = styled.div`
  margin-top: 10rem;
  padding-top: 3rem;
  h2 {
    text-align: right;
  }
  div {
    width: 20%;
    display: flex;
    justify-content: space-between;
    @media ${screens.mobile} {
      width: 55%;
    }
    span {
      :hover {
        animation: ${beat} 2s ease infinite;
      }
      img {
        width: 3rem;
      }
    }
  }
`;
