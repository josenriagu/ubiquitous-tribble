import styled from 'styled-components';

import { screens, colors } from '../../styles/variables';

export const ProjectDiv = styled.div`
  margin-top: 10rem;
  padding-top: 3rem;
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
      background: ${props => props.theme.project};
      border-radius: .8rem;
      width: 30%;
      height: 58vh;
      margin: 0 .5rem;
      padding-bottom: 2rem;
      align-items: flex-start;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      flex: 0 0 auto;
      @media ${screens.mobile} {
        display: flex;
        width: 87%;
      }
      img {
        width: 100%;
        border-radius: .8rem .8rem 0 0;
        border: ${(props) => props.checker === 'light' ? `.1rem solid ${colors.gold}` : 'none'} ;
        border-bottom: none;
      }
      i {
        font-size: 1.6rem;
        color: ${colors.gold};
        margin: .5rem 0;
      }
      h4, p, span {
        padding: 0 1rem;
      }
      h4 {
        text-decoration: underline;
      }
      span {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        img {
          width: 2rem;
        }
        p {
          margin: 0 .8rem 0 0;
        }
      }
    }
  }
`;