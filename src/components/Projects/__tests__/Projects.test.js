import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Projects from '../Projects';

afterEach(cleanup);

describe('Test suite for Projects', () => {
  it('renders the projects wrapper div', () => {
    const { getByTestId } = render(<Projects />);
    expect(getByTestId('projects-wrapper')).toBeInTheDocument();
  });

  it('renders one of the image icons', () => {
    const { getByAltText } = render(<Projects />);
    expect(getByAltText('Pluto')).toBeInTheDocument();
  });
});
