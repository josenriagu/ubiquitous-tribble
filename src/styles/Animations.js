import { keyframes } from 'styled-components';

export const xdBounce = keyframes`
   100% {
      transform: translateX(calc(100rem - 5rem));
   }
`;

export const xmBounce = keyframes`
   100% {
      transform: translateX(calc(34.5rem - 5rem));
   }
`;

export const yBounce = keyframes`
   100% {
      transform: translateY(calc(60vh - 5rem));
   }
`;

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
      transform: scale(.9);
   }
   20% {
      transform: scale(1);
   }
   40% {
      transform: scale(.9);
   }
   60% {
      transform: scale(1);
   }
   80% {
      transform: scale(.9);
   }
   100% {
      transform: scale(.9);
   }
`;
