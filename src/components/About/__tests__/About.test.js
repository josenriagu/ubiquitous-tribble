import React from 'react';
import { render, fireEvent, waitForElement, cleanup } from '@testing-library/react';
import About from '../About';

afterEach(cleanup);

describe('Test suite for About', () => {
  it('renders about div', () => {
    const { getByTestId } = render(<About />);
    expect(getByTestId('about')).toBeInTheDocument();
  });

  it('renders code snippet', () => {
    const { getByAltText } = render(<About />);
    expect(getByAltText('gallery visit')).toBeInTheDocument();
  });

  it('renders an emoji', () => {
    const { getAllByLabelText } = render(<About />);
    expect(getAllByLabelText(/smiling/i)).toHaveLength(1);
  });

  it('renders button', () => {
    const { getByText } = render(<About />);
    expect(getByText('say.hello()')).toBeInTheDocument();
  });

  it('dislays message when button is clicked', async () => {
    const { getByText, getByTestId } = render(<About />);
    fireEvent.click(getByText('say.hello()'));
    expect(await waitForElement(() => getByTestId('message'))).toBeInTheDocument();
  });
});
