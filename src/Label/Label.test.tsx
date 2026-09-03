import { render, screen } from '@testing-library/react';

import Label from './Label';

describe('Label', () => {
  it('renders the label class and its content', () => {
    render(<Label htmlFor="email">Email</Label>);

    expect(screen.getByText('Email')).toHaveClass('label');
    expect(screen.getByText('Email')).toHaveAttribute('for', 'email');
  });
});
