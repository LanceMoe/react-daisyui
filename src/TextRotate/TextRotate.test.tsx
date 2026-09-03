import { render, screen } from '@testing-library/react';

import TextRotate from './TextRotate';

describe('TextRotate', () => {
  it('keeps the required nested span structure', () => {
    render(<TextRotate texts={['One', 'Two', 'Three']} />);

    const element = screen.getByText('One').parentElement?.parentElement;
    expect(element).toHaveClass('text-rotate');
    expect(element?.children).toHaveLength(1);
    expect(element?.firstElementChild?.children).toHaveLength(3);
  });
});
