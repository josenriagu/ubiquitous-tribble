import React from 'react';
import { render, waitForElement, waitForDomChange, cleanup } from '@testing-library/react';
import App from '../App';

afterEach(cleanup);

describe('Test suite for App', () => {
  it('renders all initial emojis and images', async () => {
    const { getAllByRole } = render(<App />);
    expect(await waitForElement(() => getAllByRole('img'))).toHaveLength(35);
  });

  it('checks element in DOM change', async () => {
    render(<App />);
    const dom = await waitForDomChange();
    const name = Array.from("Josemaria Nriagu");
    expect(name.some(el => dom[0].addedNodes.includes(el)));
  });
});
