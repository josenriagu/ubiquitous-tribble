import { render, cleanup } from '@testing-library/react';
import Experience, { axisYears, labelStep, span } from '../Experience';
import { roles } from '../roles';
import { yearsLabel } from '../../../utils/experience';

afterEach(cleanup);

const october2026 = new Date(2026, 9, 8);

describe('Test suite for Experience', () => {
  it('renders the timeline as a list with one item per role', () => {
    const { getAllByRole } = render(<Experience />);
    const items = getAllByRole('listitem');
    expect(items).toHaveLength(4);
    expect(items[1]).toHaveTextContent('AKASHA Foundation');
    expect(items[1]).toHaveTextContent('Sep 2020 to Jan 2026');
  });

  it('hides the bars and the year grid from assistive technology', () => {
    const { container } = render(<Experience />);
    expect(container.querySelectorAll('.track')).toHaveLength(4);
    container.querySelectorAll('.track, .grid').forEach((el) => {
      expect(el).toHaveAttribute('aria-hidden', 'true');
    });
  });

  it('says how long, in the same words as the hero', () => {
    const { getByTestId } = render(<Experience />);
    expect(getByTestId('years')).toHaveTextContent(yearsLabel(new Date()));
    expect(getByTestId('years').parentElement).toHaveTextContent(
      /years, all remote\. Drawn to scale\.$/,
    );
  });

  it('runs the axis from 2017 to the current year', () => {
    expect(axisYears(october2026)).toBe(10);
    expect(axisYears(new Date(2027, 0, 1))).toBe(11);
    const { container } = render(<Experience />);
    const columns = container.querySelectorAll('.grid span');
    expect(columns).toHaveLength(axisYears(new Date()));
    expect(columns[0]).toHaveTextContent('2017');
  });

  it('draws finished roles to scale', () => {
    // Sep 2020 is month 44 of 120, and the role ran 65 months
    expect(span(roles[1], october2026)).toEqual({
      '--s': '36.67%',
      '--w': '54.17%',
    });
    expect(span(roles[3], october2026)).toEqual({
      '--s': '0.83%',
      '--w': '35.00%',
    });
  });

  it('draws the current role up to today', () => {
    expect(span(roles[0], october2026)).toEqual({
      '--s': '90.83%',
      '--w': '7.50%',
    });
  });

  it('rescales every bar when the axis gains a year', () => {
    // 132 months from January 2027: the same start is a smaller share
    expect(span(roles[1], new Date(2027, 0, 15))).toEqual({
      '--s': '33.33%',
      '--w': '49.24%',
    });
    expect(span(roles[0], new Date(2027, 0, 15))).toEqual({
      '--s': '82.58%',
      '--w': '9.09%',
    });
  });

  it('thins the year labels out when columns get narrow', () => {
    expect(labelStep(700, 10)).toBe(1);
    expect(labelStep(300, 10)).toBe(2);
    expect(labelStep(250, 10)).toBe(2);
    expect(labelStep(240, 12)).toBe(2);
    expect(labelStep(240, 14)).toBe(3);
    // width not measured yet
    expect(labelStep(0, 10)).toBe(1);
  });
});
