import { yearsLabel } from './experience';

// months are zero-based: 9 is October, 1 is February, 2 is March
describe('Test suite for yearsLabel', () => {
  it('adds a plus outside the anniversary month', () => {
    expect(yearsLabel(new Date(2026, 9, 8))).toBe('9+ years');
    expect(yearsLabel(new Date(2027, 0, 31))).toBe('9+ years');
    expect(yearsLabel(new Date(2027, 2, 1))).toBe('10+ years');
  });

  it('shows a whole number in the anniversary month', () => {
    expect(yearsLabel(new Date(2027, 1, 1))).toBe('10 years');
    expect(yearsLabel(new Date(2027, 1, 28))).toBe('10 years');
  });

  it('uses the singular for exactly one year', () => {
    expect(yearsLabel(new Date(2018, 1, 10))).toBe('1 year');
    expect(yearsLabel(new Date(2018, 2, 10))).toBe('1+ years');
  });

  it('never goes below zero', () => {
    expect(yearsLabel(new Date(2016, 5, 1))).toBe('0+ years');
  });
});
