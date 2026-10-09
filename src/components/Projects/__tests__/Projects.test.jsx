import { render, cleanup } from '@testing-library/react';
import Projects from '../Projects';

afterEach(cleanup);

const within = (article) => ({
  title: article.querySelector('h2').textContent,
  what: article.querySelector('.what').textContent,
  tags: Array.from(article.querySelectorAll('.tags li')).map(
    (li) => li.textContent,
  ),
  links: Array.from(article.querySelectorAll('a')).map((a) => [
    a.firstChild.textContent,
    a.getAttribute('href'),
  ]),
});

describe('Test suite for Projects', () => {
  it('renders Chune with its approved copy', () => {
    const { getAllByRole } = render(<Projects />);
    expect(within(getAllByRole('article')[0])).toEqual({
      title: 'Chune',
      what: "Be an early backer for your favorite artists' releases.",
      tags: ['React', 'Vite', 'Tailwind CSS', 'React Native'],
      links: [['beta.chune.xyz', 'https://beta.chune.xyz']],
    });
  });

  it('renders Fraqshares with its approved copy', () => {
    const { getAllByRole } = render(<Projects />);
    expect(within(getAllByRole('article')[1])).toEqual({
      title: 'Fraqshares',
      what: 'Co-investing in real estate for reduced barrier of entry.',
      tags: ['Nuxt', 'Laravel', 'MySQL'],
      links: [['app.fraqshares.com', 'https://app.fraqshares.com']],
    });
  });

  it('renders AKASHA World with links that still resolve', () => {
    const { getAllByRole } = render(<Projects />);
    const akasha = within(getAllByRole('article')[2]);
    expect(akasha).toEqual({
      title: 'AKASHA World',
      what: 'Self-organise and build distributed apps in communities.',
      tags: ['React', 'TypeScript', 'Storybook', 'Open source'],
      links: [
        ['Code on GitHub', 'https://github.com/josenriagu/akasha-core'],
        [
          'Archived site',
          'https://web.archive.org/web/20260204210216/https://akasha.org/world/',
        ],
      ],
    });
    akasha.links.forEach(([, href]) => {
      expect(new URL(href).hostname).not.toBe('akasha.world');
    });
  });

  it('renders Readeo BookChat with its approved copy', () => {
    const { getAllByRole } = render(<Projects />);
    expect(within(getAllByRole('article')[3])).toEqual({
      title: 'Readeo BookChat',
      what: 'Read picture books together with your little ones.',
      tags: ['React', 'TypeScript'],
      links: [['readeo.com', 'https://www.readeo.com']],
    });
  });

  it('labels each card by its heading', () => {
    const { getAllByRole } = render(<Projects />);
    getAllByRole('article').forEach((article) => {
      expect(article).toHaveAttribute(
        'aria-labelledby',
        article.querySelector('h2').id,
      );
    });
  });

  it('gives every card a described screenshot in two sizes', () => {
    const { getAllByRole } = render(<Projects />);
    const shots = getAllByRole('img');
    expect(shots).toHaveLength(4);
    shots.forEach((shot) => {
      expect(shot.alt.length).toBeGreaterThan(20);
      expect(shot.getAttribute('srcset')).toMatch(
        /\.webp \d+w, .*\.webp \d+w$/,
      );
      expect(shot).toHaveAttribute('sizes');
      expect(shot).toHaveAttribute('width');
      expect(shot).toHaveAttribute('height');
    });
  });

  it('tells assistive technology that links open in a new tab', () => {
    const { getAllByRole } = render(<Projects />);
    const links = getAllByRole('link');
    expect(links).toHaveLength(5);
    links.forEach((link) => {
      expect(link).toHaveAttribute('target', '_blank');
      expect(link).toHaveTextContent('(opens in a new tab)');
      expect(link.querySelector('[aria-hidden="true"]')).toHaveTextContent('↗');
    });
  });
});
