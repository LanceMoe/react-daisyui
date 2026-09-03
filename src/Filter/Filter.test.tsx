import { render, screen } from '@testing-library/react';

import Filter from './Filter';

describe('Filter', () => {
  it('renders a reset control and filter options', () => {
    render(
      <Filter reset>
        <input type="radio" name="filter" aria-label="All" />
      </Filter>,
    );

    expect(screen.getByRole('form')).toHaveClass('filter');
    expect(screen.getByRole('button', { name: 'Reset filter' })).toHaveClass('filter-reset');
    expect(screen.getByRole('radio', { name: 'All' })).toBeInTheDocument();
  });
});
