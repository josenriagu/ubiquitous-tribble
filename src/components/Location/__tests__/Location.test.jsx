import { render, cleanup } from '@testing-library/react';
import Location from '../Location';

afterEach(cleanup);

describe('Test suite for Location', () => {
  it('names the place and how the work is done', () => {
    const { getByText, getByRole } = render(<Location />);
    expect(getByRole('heading')).toHaveTextContent('Location');
    expect(getByText('Abuja, Nigeria')).toBeInTheDocument();
    expect(
      getByText('Working remotely with global teams.'),
    ).toBeInTheDocument();
  });

  it('shows the time in Abuja, marked WAT', () => {
    const { getByTestId } = render(<Location />);
    expect(getByTestId('clock').textContent).toMatch(/^\d{2}:\d{2}$/);
    expect(getByTestId('clock').parentElement).toHaveTextContent(/WAT$/);
  });

  it('draws the map as decoration with the dot on Abuja', () => {
    const { container } = render(<Location />);
    const map = container.querySelector('svg.map');
    expect(map).toHaveAttribute('aria-hidden', 'true');
    expect(map).toHaveAttribute('viewBox', '0 0 110 42');
    expect(map.querySelector('.dots').getAttribute('d').length).toBeGreaterThan(
      10000,
    );
    ['.here', '.ping'].forEach((dot) => {
      expect(map.querySelector(dot)).toHaveAttribute('cx', '57.26');
      expect(map.querySelector(dot)).toHaveAttribute('cy', '21.73');
    });
  });
});
