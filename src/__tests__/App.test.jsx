import { render, cleanup } from '@testing-library/react';
import App from '../App';
import { contactEmail } from '../components/Talk/Talk';

afterEach(cleanup);

describe('Test suite for App', () => {
  it('renders exactly one top-level heading, name first', () => {
    const { container } = render(<App />);
    const headings = container.querySelectorAll('h1');
    expect(headings).toHaveLength(1);
    expect(headings[0]).toHaveTextContent(
      'Josemaria Nriagu. I build the part of the product people actually touch.',
    );
  });

  it('gives every tile an h2 and nothing deeper', () => {
    const { container } = render(<App />);
    const levels = Array.from(
      container.querySelectorAll('h1, h2, h3, h4, h5, h6'),
    ).map((el) => el.tagName);
    expect(levels).toEqual(['H1', ...Array(10).fill('H2')]);
  });

  it('labels every section and article by its own heading', () => {
    const { container } = render(<App />);
    const blocks = Array.from(container.querySelectorAll('section, article'));
    expect(blocks).toHaveLength(11);
    blocks.forEach((block) => {
      const id = block.getAttribute('aria-labelledby');
      expect(id).toBeTruthy();
      expect(block.querySelector(`#${id}`)).toBeInTheDocument();
    });
  });

  it('lays the tiles out in the approved order', () => {
    const { getByRole } = render(<App />);
    const order = Array.from(getByRole('main').querySelectorAll('h1, h2')).map(
      (heading) => heading.firstChild.textContent.trim(),
    );
    expect(order).toEqual([
      'Josemaria Nriagu.',
      'Location',
      'Toolkit',
      'Chune',
      'Fraqshares',
      'AKASHA World',
      'Readeo BookChat',
      'Experience',
      "Let's talk.",
      'About',
      'Earlier builds',
    ]);
  });

  it('has no top navigation', () => {
    const { container, getAllByRole } = render(<App />);
    expect(getAllByRole('link').length).toBeGreaterThan(0);
    expect(container.querySelector('nav')).toBeNull();
  });

  it('never shows the contact address as text', () => {
    const { container } = render(<App />);
    expect(container.innerHTML).toContain(`mailto:${contactEmail}`);
    expect(container).not.toHaveTextContent(contactEmail);
    expect(container).not.toHaveTextContent('@');
  });

  it('points the glow at the pointer within the tile under it', () => {
    const { getByRole } = render(<App />);
    const tile = getByRole('main').querySelector('.tile');
    tile.getBoundingClientRect = () => ({ left: 100, top: 40 });
    tile.dispatchEvent(
      new MouseEvent('pointermove', {
        bubbles: true,
        clientX: 130,
        clientY: 90,
      }),
    );
    expect(tile.style.getPropertyValue('--mx')).toBe('30px');
    expect(tile.style.getPropertyValue('--my')).toBe('50px');
  });
});
