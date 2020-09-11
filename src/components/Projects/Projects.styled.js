import styled from 'styled-components';

import { screens, colors } from '../../styles/variables';

export const ProjectDiv = styled.div`
  margin-top: 10rem;
  padding-top: 3rem;
  div .active {
    cursor: grabbing;
    cursor: -webkit-grabbing;
  }
  div {
    width: 100%;
    cursor: grab;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    overflow: auto;
    /* add specific browser support for overflow */
    -ms-overflow-style: none; /* IE 11 */
    scrollbar-width: none; /* Firefox 64 */
    -webkit-overflow-scrolling: touch;
    &::-webkit-scrollbar {
      display: none;
    }
    div {
      border: 0.05rem solid gray;
      border-radius: 0.8rem;
      width: 30%;
      height: 58vh;
      margin: 3rem 0.5rem;
      padding-bottom: 2rem;
      align-items: flex-start;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      flex: 0 0 auto;
      /* make hover transforms a bit slower */
      transition: transform 1s;
      :hover {
        -webkit-transform: scale(1.0025);
        -ms-transform: scale(1.0025);
        transform: scale(1.0025);
        border: 0.05rem solid ${colors.gold};
        box-shadow: ${(props) => props.theme.boxShadow};
      }
      @media ${screens.mobile} {
        display: flex;
        width: 87%;
      }
      img {
        width: 100%;
        border-radius: 0.8rem 0.8rem 0 0;
        border-bottom: none;
      }
      i {
        font-size: 1.6rem;
        color: ${colors.gold};
        margin: 0.5rem 0;
      }
      h4,
      p,
      span {
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
          padding: 0 0.83rem;
          margin: 0 0.8rem 0 0;
        }
      }
    }
  }
`;
