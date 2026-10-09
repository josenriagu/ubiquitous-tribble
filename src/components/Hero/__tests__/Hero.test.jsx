import { render, cleanup } from '@testing-library/react';
import Hero from '../Hero';
import { yearsLabel } from '../../../utils/experience';

afterEach(cleanup);

describe('Test suite for Hero', () => {
  it('renders the headline role', () => {
    const { getByText } = render(<Hero />);
    expect(
      getByText('Full stack software engineer · Frontend focused'),
    ).toBeInTheDocument();
  });

  it('puts the tagline on its own line inside the heading', () => {
    const { getByRole } = render(<Hero />);
    expect(getByRole('heading').querySelector('span')).toHaveTextContent(
      'I build the part of the product people actually touch.',
    );
  });

  it('opens the intro with the years of experience so far', () => {
    const { getByTestId } = render(<Hero />);
    expect(getByTestId('years')).toHaveTextContent(yearsLabel(new Date()));
    expect(getByTestId('years').parentElement).toHaveTextContent(
      /years of shipping web products with React and TypeScript.*for five years\.$/,
    );
  });

  it('treats the avatar as decoration', () => {
    const { container } = render(<Hero />);
    expect(container.querySelector('img.avatar')).toHaveAttribute('alt', '');
  });

  it('carries the theme toggle', () => {
    const { getByRole } = render(<Hero />);
    expect(getByRole('button')).toHaveAttribute(
      'aria-label',
      'Switch to dark theme',
    );
  });
});
