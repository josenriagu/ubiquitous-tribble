import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Footer from '../Footer';

afterEach(cleanup);

describe('Test suite for Project', () => {
  it('renders the footer', () => {
    const { getByTestId } = render(<Footer />);
    expect(getByTestId('footer')).toBeInTheDocument();
  });

  it('renders all of the emoji spans', () => {
    const { getAllByRole } = render(<Footer />);
    expect(getAllByRole('img')).toHaveLength(2);
  });
});
