import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Header from '../Header';

afterEach(cleanup);

describe('Test suite for Header', () => {
  it('renders nameplate div', () => {
    const { getByTestId } = render(<Header />);
    expect(getByTestId('nameplate')).toBeInTheDocument();
  });

  it('renders mouse scroll icon', () => {
    const { getByAltText } = render(<Header />);
    expect(getByAltText('mouse scroll')).toBeInTheDocument();
  });

  it('renders scroll down icon', () => {
    const { getByAltText } = render(<Header />);
    expect(getByAltText('scroll up')).toBeInTheDocument();
  });
});
