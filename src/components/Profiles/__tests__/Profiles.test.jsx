import { render, cleanup } from '@testing-library/react';
import Profiles from '../Profiles';

afterEach(cleanup);

describe('Test suite for Profiles', () => {
  it('renders the three profile links in a labelled list', () => {
    const { getByLabelText } = render(<Profiles />);
    const links = Array.from(getByLabelText('Profiles').querySelectorAll('a'));
    expect(links.map((link) => link.href)).toEqual([
      'https://github.com/josenriagu',
      'https://twitter.com/josenriagu',
      'https://linkedin.com/in/josemarianriagu',
    ]);
  });

  it('names each link in text and hides its icon', () => {
    const { getAllByRole } = render(<Profiles />);
    const names = ['GitHub', 'Twitter', 'LinkedIn'];
    getAllByRole('link').forEach((link, idx) => {
      expect(link).toHaveTextContent(`${names[idx]} (opens in a new tab)`);
      expect(link).toHaveAttribute('target', '_blank');
      expect(link.querySelector('svg')).toHaveAttribute('aria-hidden', 'true');
    });
  });
});
