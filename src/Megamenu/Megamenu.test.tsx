import { render, screen } from '@testing-library/react';

import Megamenu from './Megamenu';

describe('Megamenu', () => {
  it('renders the active indicator and variant classes', () => {
    render(<Megamenu variant="wide">Menu</Megamenu>);

    expect(screen.getByText('Menu')).toHaveClass('megamenu', 'megamenu-wide');
    expect(screen.getByText('Menu').querySelector('.megamenu-active')).toBeInTheDocument();
  });
});
