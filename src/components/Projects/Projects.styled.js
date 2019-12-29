import styled from 'styled-components';

import theme from '../../styles/Theme';
import { beat } from './../../styles/Animations';

export const ProjectDiv = styled.div`
  margin-top: 10rem;
  padding-top: 3rem;
  padding-bottom: 10rem;
  div .active {
    background: rgba(255,255,255,0.3);
    cursor: grabbing;
    cursor: -webkit-grabbing;
    transform: scale(1);
  }
  div {
    width: 100%;
    height: 60vh;
    cursor: grab;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    &::-webkit-scrollbar {
      display: none;
    }
    div {
      background: ${theme.primaryLight};
      border-radius: .5rem;
      width: 30%;
      height: 58vh;
      margin: 0 .5rem;
      padding-bottom: 2rem;
      align-items: flex-start;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      flex: 0 0 auto;
      @media ${theme.mobile} {
        display: flex;
        width: 87%;
      }
      img {
        width: 100%;
      }
      i {
        font-size: 1.6rem;
        color: ${theme.gold};
        margin: .5rem 0;
      }
      h4, p, span {
        padding: 0 1rem;
      }
      h4 {
        animation: ${beat} 2s ease infinite;
      }
      span {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        p {
          margin: 0 .8rem 0 0;
        }
      }
    }
  }
`;