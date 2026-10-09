import styled from 'styled-components';
import { screens } from '../../styles/variables';

/* The screenshot fills the tile and the words sit on a glass panel, never
   directly on the image. Leave the tile's own background and border light and
   add no gradient over the screenshot: both leave a muddy grey edge around a
   white screenshot in the light theme. */
export const ProjectTile = styled.article`
  --ring: var(--dark-gold);
  background: var(--surface);
  color: var(--dark-fg);
  border-color: var(--proj-line);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1.5rem;
  min-height: 23rem;
  /* a card and its screenshot wait until they near the screen */
  content-visibility: auto;
  contain-intrinsic-size: auto 23rem;
  padding: 1.1rem;
  .pshot {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -2;
    max-width: 100%;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: left top;
    filter: var(--shot-filter);
    transition: transform 0.9s var(--ease);
  }
  &:hover .pshot,
  &:focus-within .pshot {
    transform: scale(1.06);
  }
  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem;
    flex: none;
    li {
      font: 500 0.6875rem var(--mono);
      letter-spacing: 0.08em;
      text-transform: uppercase;
      padding: 0.35rem 0.7rem;
      border: 1px solid var(--dark-line);
      border-radius: 999px;
      color: var(--dark-fg);
      background: var(--pill);
      -webkit-backdrop-filter: blur(8px);
      backdrop-filter: blur(8px);
    }
  }
  .pbody {
    background: var(--glass);
    -webkit-backdrop-filter: blur(14px) saturate(1.4);
    backdrop-filter: blur(14px) saturate(1.4);
    border: 1px solid var(--dark-line);
    border-radius: 1.2rem;
    padding: 1.1rem 1.2rem;
    min-width: 0;
    flex: none;
    h2 {
      font-family: var(--display);
      font-weight: 700;
      font-size: 1.5rem;
      letter-spacing: -0.02em;
      line-height: 1.15;
    }
  }
  .what {
    color: var(--dark-muted);
    margin-top: 0.25rem;
  }
  .plinks {
    display: flex;
    flex-wrap: wrap;
    gap: 0 1.25rem;
    margin-top: 0.5rem;
    font-weight: 600;
    font-size: 0.9375rem;
    a {
      display: inline-block;
      padding-block: 0.5rem;
      text-decoration-color: var(--dark-gold);
      &:hover {
        color: var(--dark-gold);
      }
    }
  }
  @media ${screens.desktop} {
    &.wide .pbody {
      max-width: 27rem;
    }
  }
  @media ${screens.reducedMotion} {
    .pshot {
      transition: none;
    }
    &:hover .pshot,
    &:focus-within .pshot {
      transform: none;
    }
  }
`;
