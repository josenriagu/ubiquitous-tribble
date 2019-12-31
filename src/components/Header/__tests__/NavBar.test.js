import React from 'react';
import { render, cleanup } from '@testing-library/react';
import NavBar from '../NavBar';

afterEach(cleanup);

describe('Test suite for NavBar', () => {
  it('renders the site logo', () => {
    const { getByAltText } = render(<NavBar />);
    expect(getByAltText('Josemaria Nriagu')).toBeInTheDocument();
  });

  it('renders desktop navigation elements', () => {
    const { getByTestId } = render(<NavBar />);
    expect(getByTestId('desktopNav')).toBeInTheDocument();
  });

  it('renders mobile navigation elements', () => {
    const { getByTestId } = render(<NavBar />);
    expect(getByTestId('mobileNav')).toBeInTheDocument();
  });
});
