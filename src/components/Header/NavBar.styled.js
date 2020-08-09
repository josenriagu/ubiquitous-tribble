import styled from 'styled-components';

import { rotate, beat } from '../../styles/Animations';
import { screens } from '../../styles/variables';

const animations = [rotate, beat];
const randAnimation = animations[Math.floor(Math.random() * animations.length)];

export const HeaderDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  div:nth-of-type(1) {
    border-radius: 50%;
    width: 5rem;
    height: 5rem;
    position: relative;
    overflow: hidden;
    animation: ${randAnimation} ${randAnimation === rotate ? '8s' : '2s'} linear
      infinite;
    cursor: pointer;
    img {
      max-width: 100%;
      max-height: 100%;
      position: absolute;
    }
  }
  nav:nth-of-type(1) {
    width: 40%;
    display: flex;
    justify-content: space-between;
    @media ${screens.mobile} {
      display: none !important;
    }
  }
`;

export const MobileNav = styled.nav`
  display: none;
  @media ${screens.mobile} {
    width: 100%;
    border-top: 0.05rem solid ${(props) => props.theme.text};
    padding: 1rem 2.5rem;
    position: fixed;
    background-color: ${(props) => props.theme.body};
    display: flex;
    justify-content: space-between;
    bottom: 0;
    left: 0;
    z-index: 99;
    a {
      display: flex;
      flex-direction: column;
      text-align: center;
      font-size: 1rem;
      i {
        font-size: 1.6rem;
      }
    }
  }
`;
