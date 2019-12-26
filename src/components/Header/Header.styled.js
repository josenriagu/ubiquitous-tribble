import styled from 'styled-components';

import { jump } from '../../styles/Animations';

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
    color: white;
    margin-bottom: 20rem;
    img {
      width: 2rem;
      position: absolute;
      animation: ${jump} 1s linear infinite;
    }
  }
`;
