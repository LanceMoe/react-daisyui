import { render, screen } from '@testing-library/react';

import Calendar from './Calendar';

describe('Calendar', () => {
  it('uses the Cally styling by default', () => {
    render(<Calendar>Calendar content</Calendar>);

    expect(screen.getByLabelText('Calendar')).toHaveClass('cally');
  });

  it('supports the React Day Picker styling', () => {
    render(<Calendar library="react-day-picker">Calendar content</Calendar>);

    expect(screen.getByLabelText('Calendar')).toHaveClass('react-day-picker');
  });
});
