import chune from '../../assets/work/chune-1000.webp';
import chuneSmall from '../../assets/work/chune-600.webp';
import fraqshares from '../../assets/work/fraqshares-640.webp';
import fraqsharesSmall from '../../assets/work/fraqshares-420.webp';
import akasha from '../../assets/work/akasha-1000.webp';
import akashaSmall from '../../assets/work/akasha-600.webp';
import readeo from '../../assets/work/readeo-1000.webp';
import readeoSmall from '../../assets/work/readeo-600.webp';

// A screenshot fills its card, so the width it is drawn at follows the card's
// height as well as its width. These are the drawn widths per layout.
const wideSizes = '(min-width: 1060px) 50rem, (min-width: 700px) 92vw, 37rem';
const narrowSizes = '37rem';

// wide cards span eight of the twelve desktop columns, the others four
export const projectList = [
  {
    id: 'chune',
    title: 'Chune',
    description: "Be an early backer for your favorite artists' releases.",
    tags: ['React', 'Vite', 'Tailwind CSS', 'React Native'],
    links: [{ href: 'https://beta.chune.xyz', text: 'beta.chune.xyz' }],
    wide: true,
    shot: {
      src: chune,
      srcSet: `${chuneSmall} 600w, ${chune} 1000w`,
      sizes: wideSizes,
      width: 1000,
      height: 625,
      position: '0 78%',
      alt: "Chune's home screen, showing top artists, new drops with their cover art, and suggested accounts to follow.",
    },
  },
  {
    id: 'fraq',
    title: 'Fraqshares',
    description: 'Co-investing in real estate for reduced barrier of entry.',
    tags: ['Nuxt', 'Laravel', 'MySQL'],
    links: [{ href: 'https://app.fraqshares.com', text: 'app.fraqshares.com' }],
    wide: false,
    shot: {
      src: fraqshares,
      srcSet: `${fraqsharesSmall} 420w, ${fraqshares} 640w`,
      sizes: '(min-width: 1060px) 26rem, (min-width: 700px) 50vw, 100vw',
      width: 640,
      height: 800,
      alt: "Fraqshares' sign-in page, headed Real Estate Investing, Fractionalized.",
    },
  },
  {
    id: 'akasha',
    title: 'AKASHA World',
    description: 'Self-organise and build distributed apps in communities.',
    tags: ['React', 'TypeScript', 'Storybook', 'Open source'],
    links: [
      {
        href: 'https://github.com/josenriagu/akasha-core',
        text: 'Code on GitHub',
      },
      {
        href: 'https://web.archive.org/web/20260204210216/https://akasha.org/world/',
        text: 'Archived site',
      },
    ],
    wide: false,
    shot: {
      src: akasha,
      srcSet: `${akashaSmall} 600w, ${akasha} 1000w`,
      sizes: narrowSizes,
      width: 1000,
      height: 625,
      alt: 'The AKASHA World site, showing the social app on two phones.',
    },
  },
  {
    id: 'readeo',
    title: 'Readeo BookChat',
    description: 'Read picture books together with your little ones.',
    tags: ['React', 'TypeScript'],
    links: [{ href: 'https://www.readeo.com', text: 'readeo.com' }],
    wide: true,
    shot: {
      src: readeo,
      srcSet: `${readeoSmall} 600w, ${readeo} 1000w`,
      sizes: wideSizes,
      width: 1000,
      height: 553,
      alt: "Readeo's home page, showing a BookChat call on a tablet: a picture book open beneath two video feeds.",
    },
  },
];
