import { render, screen } from '@testing-library/react';

import HoverGallery from './HoverGallery';

describe('HoverGallery', () => {
  it('renders a hover gallery with its images', () => {
    render(
      <HoverGallery>
        <img src="one.jpg" alt="One" />
        <img src="two.jpg" alt="Two" />
      </HoverGallery>,
    );

    expect(screen.getByAltText('One').parentElement).toHaveClass('hover-gallery');
    expect(screen.getAllByRole('img')).toHaveLength(2);
  });
});
