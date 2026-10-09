import { render, fireEvent, cleanup } from '@testing-library/react';
import Toolkit from '../Toolkit';

afterEach(cleanup);

const skillsIn = (list) =>
  Array.from(list.querySelectorAll('li')).map((li) => li.textContent);

describe('Test suite for Toolkit', () => {
  it('lists the seventeen skills', () => {
    const { container } = render(<Toolkit />);
    const skills = skillsIn(container.querySelector('ul'));
    expect(skills).toHaveLength(17);
    expect(skills).toEqual(
      expect.arrayContaining(['MySQL', 'Next.js', 'Claude Code', 'Codex']),
    );
    expect(skills).not.toContain('Nuxt');
  });

  it('repeats the list once, hidden from assistive technology', () => {
    const { container } = render(<Toolkit />);
    const lists = container.querySelectorAll('.marquee ul');
    expect(lists).toHaveLength(2);
    expect(lists[0]).not.toHaveAttribute('aria-hidden');
    expect(lists[1]).toHaveAttribute('aria-hidden', 'true');
    expect(skillsIn(lists[1])).toEqual(skillsIn(lists[0]));
  });

  it('pauses and resumes from the button', () => {
    const { container, getByRole } = render(<Toolkit />);
    const marquee = container.querySelector('.marquee');
    const button = getByRole('button');
    expect(button).toHaveTextContent('Pause');
    expect(button).toHaveAttribute('aria-pressed', 'false');
    expect(marquee).not.toHaveClass('paused');

    fireEvent.click(button);
    expect(button).toHaveTextContent('Play');
    expect(button).toHaveAttribute('aria-pressed', 'true');
    expect(marquee).toHaveClass('paused');

    fireEvent.click(button);
    expect(button).toHaveTextContent('Pause');
    expect(button).toHaveAttribute('aria-pressed', 'false');
    expect(marquee).not.toHaveClass('paused');
  });
});
