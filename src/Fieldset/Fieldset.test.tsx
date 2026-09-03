import { render, screen } from '@testing-library/react';

import Fieldset from './Fieldset';

describe('Fieldset', () => {
  it('renders the legend, content, and description', () => {
    render(
      <Fieldset legend="Account" description="Required fields">
        <input aria-label="Email" />
      </Fieldset>,
    );

    expect(screen.getByRole('group')).toHaveClass('fieldset');
    expect(screen.getByText('Account')).toHaveClass('fieldset-legend');
    expect(screen.getByText('Required fields')).toHaveClass('label');
  });
});
