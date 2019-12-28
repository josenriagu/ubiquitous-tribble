import styled from 'styled-components';

import { xdBounce, xmBounce, yBounce } from '../../styles/Animations';
import theme from '../../styles/Theme';

export const style = {
  "font-size": "5rem"
}

export const StackDiv = styled.div`
  padding-bottom: 10rem;
  margin-top: 10rem;
  padding-top: 3rem;
  h2, p {
    text-align: right;
  }
  div {
    position: relative;
    height: 60vh;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    span {
      position: absolute;
      width: 5rem;
      height: 5rem;
    }
    span:nth-child(1) {
      animation: ${xdBounce} 17s ease-in-out infinite alternate;
      @media ${theme.mobile} {
        animation: ${xmBounce} 14s ease-in-out infinite alternate;
      }
      i {
        animation: ${yBounce} 4s ease-in-out infinite alternate;
      }
    }
    span:nth-child(2) {
      animation: ${xdBounce} 16.5s ease-in-out infinite alternate;
      @media ${theme.mobile} {
        animation: ${xmBounce} 13.5s ease-in-out infinite alternate;
      }
      i {
        animation: ${yBounce} 4.5s ease-in-out infinite alternate;
      }
    }
    span:nth-child(3) {
      animation: ${xdBounce} 16s ease-in-out infinite alternate;
      @media ${theme.mobile} {
        animation: ${xmBounce} 13s ease-in-out infinite alternate;
      }
      i {
        animation: ${yBounce} 5s ease-in-out infinite alternate;
      }
    }
    span:nth-child(4) {
      animation: ${xdBounce} 15.5s ease-in-out infinite alternate;
      @media ${theme.mobile} {
        animation: ${xmBounce} 12.5s ease-in-out infinite alternate;
      }
      i {
        animation: ${yBounce} 5.5s ease-in-out infinite alternate;
      }
    }
    span:nth-child(5) {
      animation: ${xdBounce} 15s ease-in-out infinite alternate;
      @media ${theme.mobile} {
        animation: ${xmBounce} 12s ease-in-out infinite alternate;
      }
      i {
        animation: ${yBounce} 6s ease-in-out infinite alternate;
      }
    }
    span:nth-child(6) {
      animation: ${xdBounce} 14.5s ease-in-out infinite alternate;
      @media ${theme.mobile} {
        animation: ${xmBounce} 11.5s ease-in-out infinite alternate;
      }
      img {
        animation: ${yBounce} 6.5s ease-in-out infinite alternate;
      }
    }
    span:nth-child(7) {
      animation: ${xdBounce} 14s ease-in-out infinite alternate;
      @media ${theme.mobile} {
        animation: ${xmBounce} 11s ease-in-out infinite alternate;
      }
      img {
        animation: ${yBounce} 7s ease-in-out infinite alternate;
      }
    }
    span:nth-child(8) {
      animation: ${xdBounce} 13.5s ease-in-out infinite alternate;
      @media ${theme.mobile} {
        animation: ${xmBounce} 10.5s ease-in-out infinite alternate;
      }
      i {
        animation: ${yBounce} 7.5s ease-in-out infinite alternate;
      }
    }
    span:nth-child(9) {
      animation: ${xdBounce} 13s ease-in-out infinite alternate;
      @media ${theme.mobile} {
        animation: ${xmBounce} 10s ease-in-out infinite alternate;
      }
      i {
        animation: ${yBounce} 8s ease-in-out infinite alternate;
      }
    }
    span:nth-child(10) {
      animation: ${xdBounce} 12.5s ease-in-out infinite alternate;
      @media ${theme.mobile} {
        animation: ${xmBounce} 9.5s ease-in-out infinite alternate;
      }
      img {
        animation: ${yBounce} 8.5s ease-in-out infinite alternate;
      }
    }
    span:nth-child(11) {
      animation: ${xdBounce} 12s ease-in-out infinite alternate;
      @media ${theme.mobile} {
        animation: ${xmBounce} 9s ease-in-out infinite alternate;
      }
      img {
        animation: ${yBounce} 9s ease-in-out infinite alternate;
      }
    }
    span:nth-child(12) {
      animation: ${xdBounce} 11.5s ease-in-out infinite alternate;
      @media ${theme.mobile} {
        animation: ${xmBounce} 8.5s ease-in-out infinite alternate;
      }
      i {
        animation: ${yBounce} 9.5s ease-in-out infinite alternate;
      }
    }
    span:nth-child(13) {
      animation: ${xdBounce} 11s ease-in-out infinite alternate;
      @media ${theme.mobile} {
        animation: ${xmBounce} 8s ease-in-out infinite alternate;
      }
      i {
        animation: ${yBounce} 10s ease-in-out infinite alternate;
      }
    }
    span:nth-child(14) {
      animation: ${xdBounce} 10.5s ease-in-out infinite alternate;
      @media ${theme.mobile} {
        animation: ${xmBounce} 7.5s ease-in-out infinite alternate;
      }
      img {
        animation: ${yBounce} 10.5s ease-in-out infinite alternate;
      }
    }
    span:nth-child(15) {
      animation: ${xdBounce} 10s ease-in-out infinite alternate;
      @media ${theme.mobile} {
        animation: ${xmBounce} 7s ease-in-out infinite alternate;
      }
      i {
        animation: ${yBounce} 11s ease-in-out infinite alternate;
      }
    }
    span:nth-child(16) {
      animation: ${xdBounce} 9.5s ease-in-out infinite alternate;
      @media ${theme.mobile} {
        animation: ${xmBounce} 6.5s ease-in-out infinite alternate;
      }
      i {
        animation: ${yBounce} 11.5s ease-in-out infinite alternate;
      }
    }
    span:nth-child(17) {
      animation: ${xdBounce} 9s ease-in-out infinite alternate;
      @media ${theme.mobile} {
        animation: ${xmBounce} 6s ease-in-out infinite alternate;
      }
      i {
        animation: ${yBounce} 12s ease-in-out infinite alternate;
      }
    }
    span:nth-child(18) {
      animation: ${xdBounce} 8.5s ease-in-out infinite alternate;
      @media ${theme.mobile} {
        animation: ${xmBounce} 5.5s ease-in-out infinite alternate;
      }
      i {
        animation: ${yBounce} 12.5s ease-in-out infinite alternate;
      }
    }
    span:nth-child(19) {
      animation: ${xdBounce} 8s ease-in-out infinite alternate;
      @media ${theme.mobile} {
        animation: ${xmBounce} 5s ease-in-out infinite alternate;
      }
      img {
        animation: ${yBounce} 13s ease-in-out infinite alternate;
      }
    }
    span:nth-child(20) {
      animation: ${xdBounce} 7.5s ease-in-out infinite alternate;
      @media ${theme.mobile} {
        animation: ${xmBounce} 4.5s ease-in-out infinite alternate;
      }
      i {
        animation: ${yBounce} 13.5s ease-in-out infinite alternate;
      }
    }
    img, i {
      position: absolute;
      width: 5rem;
      height: 5rem;
    }
  }
`;
