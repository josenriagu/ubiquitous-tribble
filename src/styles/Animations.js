import { keyframes } from 'styled-components';

export const rotate = keyframes`
  from {
     transform: rotate(0deg);
   }
  to {
     transform: rotate(360deg);
  }
`;

export const bounce = keyframes`
   0% {
      top: 83%;
   }
   50% {
      top: 85%;
   }
   100% {
      top: 83%;
   }
`;

export const beat = keyframes`
   0% {
      transform: scale(.75);
   }
   20% {
      transform: scale(1);
   }
   40% {
      transform: scale(.75);
   }
   60% {
      transform: scale(1);
   }
   80% {
      transform: scale(.75);
   }
   100% {
      transform: scale(.75);
   }
`;
