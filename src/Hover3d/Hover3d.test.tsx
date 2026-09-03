import { render, screen } from '@testing-library/react';

import Hover3d from './Hover3d';

describe('Hover3d', () => {
  it('creates the nine direct children required by daisyUI', () => {
    render(
      <Hover3d>
        <img src="image.jpg" alt="Card" />
      </Hover3d>,
    );

    const element = screen.getByAltText('Card').closest('.hover-3d');
    expect(element).toHaveClass('hover-3d');
    expect(element?.children).toHaveLength(9);
  });
});
