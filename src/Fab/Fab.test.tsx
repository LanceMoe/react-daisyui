import { render, screen } from '@testing-library/react';

import Fab from './Fab';

describe('Fab', () => {
  it('renders the floating action button container', () => {
    render(<Fab>Actions</Fab>);

    expect(screen.getByText('Actions')).toHaveClass('fab');
  });

  it('supports the flower layout', () => {
    render(<Fab flower>Actions</Fab>);

    expect(screen.getByText('Actions')).toHaveClass('fab', 'fab-flower');
  });
});
