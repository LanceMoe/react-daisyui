import { render, screen } from '@testing-library/react';

import Validator from './Validator';

describe('Validator', () => {
  it('renders the validator and its hint', () => {
    render(
      <Validator hint="Invalid value">
        <input required aria-label="Value" />
      </Validator>,
    );

    expect(screen.getByLabelText('Value').parentElement).toHaveClass('validator');
    expect(screen.getByText('Invalid value')).toHaveClass('validator-hint');
  });
});
