import styled from 'styled-components';
import { rotate, jump, beat } from './Animations';
import screen, { sizes } from './screens';

const animations = [rotate, beat];

const randAnimation = animations[Math.floor(Math.random() * animations.length)];

export const AppDiv = styled.div`
  width: ${ sizes.desktop};
  margin: 0 auto;
@media ${screen.mobile} {
    width: ${ sizes.mobileRes};
    margin: .5rem auto;
  }
`;

export const AppHeader = styled.header`
   /* border: 1px solid red; */
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

export const HeaderDiv = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   div:nth-of-type(1){
      border-radius: 50%;
      width: 6rem;
      height: 6rem;
      position: relative;
      overflow: hidden;
      animation: ${randAnimation} ${randAnimation === rotate ? "8s" : "2s"} linear infinite;
      cursor: pointer;
      img {
         max-width: 100%;
         max-height: 100%;
         position: absolute;
      }
   }
   nav:nth-of-type(1){
      width: 40%;
      display: flex;
      justify-content: space-between;
      @media ${screen.mobile} {
         width: 70%;
      }
   }
`;