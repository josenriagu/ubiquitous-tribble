import { render, cleanup } from '@testing-library/react';
import Talk, { contactEmail } from '../Talk';

afterEach(cleanup);

describe('Test suite for Talk', () => {
  it('renders the invitation as written', () => {
    const { getByRole, getByText } = render(<Talk />);
    expect(getByRole('heading')).toHaveTextContent("Let's talk.");
    expect(
      getByText(
        'Need a hand on an interesting product? I usually reply within a few hours.',
      ),
    ).toBeInTheDocument();
  });

  it('opens a new email from the one button', () => {
    const { getAllByRole } = render(<Talk />);
    const links = getAllByRole('link');
    expect(links).toHaveLength(1);
    expect(links[0]).toHaveTextContent('Say hello');
    expect(contactEmail).toMatch(/^[^@\s]+@[^@\s]+\.[^@\s]+$/);
    expect(links[0]).toHaveAttribute('href', `mailto:${contactEmail}`);
  });

  it('keeps the address out of the visible text', () => {
    const { container } = render(<Talk />);
    expect(container.innerHTML).toContain(contactEmail);
    expect(container).not.toHaveTextContent(contactEmail);
  });
});
