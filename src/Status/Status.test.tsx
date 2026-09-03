import { render, screen } from '@testing-library/react';

import Status from './Status';

describe('Status', () => {
  it('renders its color and size classes', () => {
    render(<Status color="success" size="lg" aria-label="Online" />);

    expect(screen.getByLabelText('Online')).toHaveClass('status', 'status-success', 'status-lg');
  });
});
