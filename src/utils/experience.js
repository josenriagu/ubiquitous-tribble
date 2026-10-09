// the month work started: February 2017
const start = { year: 2017, month: 2 };

// Years of experience. A whole number of years reads "10 years"; anything past
// the anniversary month reads "10+ years".
export const yearsLabel = (now) => {
  const months =
    (now.getFullYear() - start.year) * 12 + (now.getMonth() + 1 - start.month);
  const years = Math.max(0, Math.floor(months / 12));
  const whole = months % 12 === 0;
  const unit = years === 1 && whole ? 'year' : 'years';
  return `${years}${whole ? '' : '+'} ${unit}`;
};
