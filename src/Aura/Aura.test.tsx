import { render, screen } from '@testing-library/react';
import { createRef } from 'react';

import Aura from './Aura';

describe('Aura', () => {
  it('renders the aura variant and children', () => {
    render(<Aura variant="rainbow">Content</Aura>);

    expect(screen.getByText('Content')).toHaveClass('aura', 'aura-rainbow');
  });

  it('forwards its ref', () => {
    const ref = createRef<HTMLDivElement>();
    render(<Aura ref={ref}>Content</Aura>);

    expect(ref.current).toBe(screen.getByText('Content'));
  });
});
