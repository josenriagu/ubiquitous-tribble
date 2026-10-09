import { render, cleanup } from '@testing-library/react';
import About from '../About';

afterEach(cleanup);

describe('Test suite for About', () => {
  it('renders both paragraphs as written', () => {
    const { getByText } = render(<About />);
    expect(
      getByText(
        'I care about the half-second between a tap and a response, and about the team that has to maintain the code afterwards.',
      ),
    ).toBeInTheDocument();
    expect(
      getByText(
        'I trained as an electronics and computer engineer and started out building interactive websites for clients. Away from the keyboard I will happily talk art, music, science or technology.',
      ),
    ).toBeInTheDocument();
  });

  it('has nothing to click', () => {
    const { container, getByRole } = render(<About />);
    expect(getByRole('heading')).toHaveTextContent('About');
    expect(container.querySelectorAll('button, a')).toHaveLength(0);
  });
});
