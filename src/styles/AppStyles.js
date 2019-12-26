import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
     transform: rotate(0deg);
  }
  to {
     transform: rotate(360deg);
  }
`;

export const AppDiv = styled.div`
  width: 1000px;
  margin: .5rem auto;
  @media (max-width: 500px){
    width: 450px;
    margin: .5rem auto;
  }
`;

export const AppHeader = styled.header`
   width: 100%;
   display: flex;
   flex-direction: column;
   height: 100vh;
   div:last-child {
      margin: auto 0;
      text-align: center;
      color: white;
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
      animation: ${rotate} 8s linear infinite;
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
      @media (max-width: 500px) {
         width: 50%;
      }
   }
`;