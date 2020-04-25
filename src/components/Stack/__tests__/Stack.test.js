import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Stack from '../Stack';

afterEach(cleanup);

describe('Test suite for Stack', () => {
  it('renders stack div', () => {
    const { getByTestId } = render(<Stack />);
    expect(getByTestId('stack')).toBeInTheDocument();
  });

  it('renders one of the image icons', () => {
    const { getByAltText } = render(<Stack />);
    expect(getByAltText('redux')).toBeInTheDocument();
  });
});
