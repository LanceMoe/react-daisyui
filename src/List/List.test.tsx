import { render, screen } from '@testing-library/react';

import List from './List';

describe('List', () => {
  it('renders list rows with the required classes', () => {
    render(
      <List>
        <List.Row>First</List.Row>
        <List.Row>Second</List.Row>
      </List>,
    );

    expect(screen.getByRole('list')).toHaveClass('list');
    expect(screen.getAllByRole('listitem')).toHaveLength(2);
    expect(screen.getAllByRole('listitem')[0]).toHaveClass('list-row');
  });
});
