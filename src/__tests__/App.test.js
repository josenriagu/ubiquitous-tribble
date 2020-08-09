import React from 'react';
import {
  render,
  waitForElement,
  waitForDomChange,
  cleanup,
} from '@testing-library/react';
import App from '../App';

afterEach(cleanup);

describe('Test suite for App', () => {
  it('renders all initial emojis and images', async () => {
    const { getAllByRole } = render(<App />);
    // since certain parts of the website are now loaded lazily, number of accesible imgs will drop
    expect(await waitForElement(() => getAllByRole('img'))).toHaveLength(11);
  });

  it('checks element in DOM change', async () => {
    render(<App />);
    const dom = await waitForDomChange();
    const name = Array.from('Josemaria Nriagu');
    expect(name.some((el) => dom[0].addedNodes.includes(el)));
  });
});
