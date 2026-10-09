import { render, cleanup } from '@testing-library/react';
import Footer from '../Footer';

afterEach(cleanup);

describe('Test suite for Footer', () => {
  it('renders the footer with the current year', () => {
    const { getByTestId } = render(<Footer />);
    expect(getByTestId('footer')).toHaveTextContent(
      `© ${new Date().getFullYear()} Josemaria Nriagu`,
    );
  });

  it('has nothing to click', () => {
    const { getByTestId } = render(<Footer />);
    expect(getByTestId('footer').querySelectorAll('a, button')).toHaveLength(0);
  });
});
