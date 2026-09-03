import { render, screen } from '@testing-library/react';

import Otp from './Otp';

describe('Otp', () => {
  it('renders the configured number of digit slots', () => {
    render(<Otp length={4} joined color="primary" />);

    const input = screen.getByRole('textbox', { name: 'One-time password' });
    expect(input).toHaveAttribute('maxlength', '4');
    expect(input.parentElement).toHaveClass('otp', 'otp-joined', 'otp-primary');
    expect(input.parentElement?.querySelectorAll(':scope > span')).toHaveLength(4);
  });
});
