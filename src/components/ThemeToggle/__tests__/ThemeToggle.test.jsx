import { render, fireEvent, act, cleanup } from '@testing-library/react';
import ThemeToggle from '../ThemeToggle';

const root = document.documentElement;

// stand in for the system setting, which jsdom does not have
const setSystem = (theme) => {
  const listeners = [];
  const media = {
    matches: theme === 'dark',
    addEventListener: (type, listener) => listeners.push(listener),
    removeEventListener: () => {},
  };
  window.matchMedia = () => media;
  return (next) => {
    media.matches = next === 'dark';
    listeners.forEach((listener) => listener());
  };
};

afterEach(() => {
  cleanup();
  localStorage.clear();
  root.removeAttribute('data-theme');
  delete window.matchMedia;
});

describe('Test suite for ThemeToggle', () => {
  it('follows the system by default and overrides nothing', () => {
    setSystem('dark');
    const { getByRole } = render(<ThemeToggle />);
    expect(getByRole('button')).toHaveAttribute(
      'aria-label',
      'Switch to light theme',
    );
    expect(root).not.toHaveAttribute('data-theme');
    expect(localStorage.getItem('theme')).toBeNull();
  });

  it('switches away from the system theme and remembers it', () => {
    setSystem('light');
    const { getByRole } = render(<ThemeToggle />);
    fireEvent.click(getByRole('button', { name: 'Switch to dark theme' }));
    expect(root).toHaveAttribute('data-theme', 'dark');
    expect(localStorage.getItem('theme')).toBe('dark');
    expect(getByRole('button')).toHaveAttribute(
      'aria-label',
      'Switch to light theme',
    );
  });

  it('goes back to following the system on the second click', () => {
    setSystem('light');
    const { getByRole } = render(<ThemeToggle />);
    fireEvent.click(getByRole('button'));
    expect(root).toHaveAttribute('data-theme', 'dark');
    fireEvent.click(getByRole('button'));
    expect(root).not.toHaveAttribute('data-theme');
    expect(localStorage.getItem('theme')).toBeNull();
  });

  it('restores a saved choice over the system setting', () => {
    setSystem('light');
    localStorage.setItem('theme', 'dark');
    const { getByRole } = render(<ThemeToggle />);
    expect(root).toHaveAttribute('data-theme', 'dark');
    expect(getByRole('button')).toHaveAttribute(
      'aria-label',
      'Switch to light theme',
    );
  });

  it('keeps up when the system setting changes', () => {
    const changeSystem = setSystem('light');
    const { getByRole } = render(<ThemeToggle />);
    expect(getByRole('button')).toHaveAttribute(
      'aria-label',
      'Switch to dark theme',
    );
    act(() => changeSystem('dark'));
    expect(getByRole('button')).toHaveAttribute(
      'aria-label',
      'Switch to light theme',
    );
    expect(root).not.toHaveAttribute('data-theme');
  });

  it('hides the icon from assistive technology', () => {
    const { getByRole } = render(<ThemeToggle />);
    expect(getByRole('button').querySelector('svg')).toHaveAttribute(
      'aria-hidden',
      'true',
    );
  });
});
