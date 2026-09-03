import '@testing-library/jest-dom';

import { fireEvent, render, screen } from '@testing-library/react';
import * as React from 'react';

import Form from '../Form';
import Textarea from './Textarea';

describe('Textarea', () => {
  it('should render', () => {
    render(<Textarea data-testid="textarea" />);
    expect(screen.getByTestId('textarea')).toBeInTheDocument();
  });

  it('should render disabled', () => {
    render(<Textarea disabled data-testid="textarea" />);
    expect(screen.getByTestId('textarea')).toBeDisabled();
  });

  it('should render with label', () => {
    render(
      <Form className="flex flex-col gap-2">
        <Form.Label title="label text">
          <Textarea />
        </Form.Label>
      </Form>,
    );
    expect(screen.getByLabelText(/label text/i)).toBeInTheDocument();
  });

  it('should have placeholder', () => {
    render(<Textarea placeholder="textarea placeholder" />);
    expect(screen.getByPlaceholderText('textarea placeholder')).toBeInTheDocument();
  });
});
