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

  it('links to the issue tracker', () => {
    const { getByRole } = render(<Footer />);
    expect(getByRole('link')).toHaveAttribute(
      'href',
      'https://github.com/josenriagu/ubiquitous-tribble/issues/new/choose',
    );
  });
});
