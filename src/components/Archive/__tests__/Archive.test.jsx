import { render, cleanup } from '@testing-library/react';
import Archive from '../Archive';

afterEach(cleanup);

describe('Test suite for Archive', () => {
  it('renders the four earlier builds', () => {
    const { getAllByRole } = render(<Archive />);
    const names = getAllByRole('listitem').map(
      (item) => item.querySelector('a').firstChild.textContent,
    );
    expect(names).toEqual([
      'Naija Works',
      'Pluto',
      'Refugee Stories',
      'Charge screen',
    ]);
  });

  it('keeps the description and the stack tag in separate spans', () => {
    const { getAllByRole } = render(<Archive />);
    getAllByRole('listitem').forEach((item) => {
      expect(item.querySelectorAll(':scope > span')).toHaveLength(2);
      expect(item.querySelectorAll(':scope > span.stack')).toHaveLength(1);
    });
  });

  it('opens each build in a new tab and says so', () => {
    const { getAllByRole } = render(<Archive />);
    getAllByRole('link').forEach((link) => {
      expect(link.href).toMatch(/^https:\/\/github\.com\//);
      expect(link).toHaveAttribute('target', '_blank');
      expect(link).toHaveTextContent('(opens in a new tab)');
    });
  });
});
