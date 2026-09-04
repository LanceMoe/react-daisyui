import { fireEvent, render } from '@testing-library/react';
import React, { createRef } from 'react';

import Swap from './';

describe('Swap', () => {
  it('Should render Swap', () => {
    render(<Swap onElement="On" offElement="Off" />);
  });

  it('Should render onElement and offElement', () => {
    const { getByText } = render(<Swap onElement="On" offElement="Off" />);
    expect(getByText('On')).toBeInTheDocument();
    expect(getByText('Off')).toBeInTheDocument();
  });

  it('Should apply active prop', () => {
    const { container } = render(<Swap onElement="On" offElement="Off" active />);
    expect(container.firstChild).toHaveClass('swap-active');
  });

  it('Should sync input checked state with active prop', () => {
    const { container: containerTrue } = render(<Swap onElement="On" offElement="Off" active={true} />);
    const inputTrue = containerTrue.querySelector('input[type="checkbox"]') as HTMLInputElement;
    expect(inputTrue.checked).toBe(true);

    const { container: containerFalse } = render(<Swap onElement="On" offElement="Off" active={false} />);
    const inputFalse = containerFalse.querySelector('input[type="checkbox"]') as HTMLInputElement;
    expect(inputFalse.checked).toBe(false);
  });

  it('Should support checked and defaultChecked props', () => {
    const onChange = vi.fn();
    const { container } = render(<Swap onElement="On" offElement="Off" checked={true} onChange={onChange} />);
    const input = container.querySelector('input[type="checkbox"]') as HTMLInputElement;
    expect(input.checked).toBe(true);

    const { container: containerDefault } = render(<Swap onElement="On" offElement="Off" defaultChecked={true} />);
    const defaultInput = containerDefault.querySelector('input[type="checkbox"]') as HTMLInputElement;
    expect(defaultInput.checked).toBe(true);
  });

  it('Should support disabled prop', () => {
    const { container } = render(<Swap onElement="On" offElement="Off" disabled />);
    expect(container.firstChild).toHaveClass('swap-disabled');
    const input = container.querySelector('input[type="checkbox"]') as HTMLInputElement;
    expect(input.disabled).toBe(true);
  });

  it('Should support indeterminateElement and indeterminate prop', () => {
    const { container, getByText } = render(
      <Swap onElement="On" offElement="Off" indeterminateElement="Indeterminate" indeterminate={true} />,
    );
    expect(getByText('Indeterminate')).toBeInTheDocument();
    expect(getByText('Indeterminate')).toHaveClass('swap-indeterminate');
    const input = container.querySelector('input[type="checkbox"]') as HTMLInputElement;
    expect(input.indeterminate).toBe(true);
  });

  it('Should render as div when as="div" and omit input', () => {
    const { container, queryByRole } = render(<Swap onElement="On" offElement="Off" as="div" active />);
    expect(container.firstChild?.nodeName).toBe('DIV');
    expect(container.firstChild).toHaveClass('swap');
    expect(container.firstChild).toHaveClass('swap-active');
    expect(queryByRole('checkbox')).toBeNull();
  });

  it('Should forward inputRef to the inner input element', () => {
    const inputRef = createRef<HTMLInputElement>();
    render(<Swap onElement="On" offElement="Off" inputRef={inputRef} />);
    expect(inputRef.current).not.toBeNull();
    expect(inputRef.current?.tagName).toBe('INPUT');
    expect(inputRef.current?.type).toBe('checkbox');
  });

  it('Should forward aria-label to inner input for accessibility', () => {
    const { container } = render(<Swap onElement="On" offElement="Off" aria-label="Toggle mute" />);
    const input = container.querySelector('input[type="checkbox"]') as HTMLInputElement;
    expect(input).toHaveAttribute('aria-label', 'Toggle mute');
  });

  it('Should render number 0 without swallowing it', () => {
    const { getByText } = render(<Swap onElement={0} offElement={1} />);
    expect(getByText('0')).toBeInTheDocument();
    expect(getByText('1')).toBeInTheDocument();
  });

  it('Should trigger onChange and onClick on user interaction', () => {
    const onClick = vi.fn();
    const onChange = vi.fn();
    const { container } = render(<Swap onElement="On" offElement="Off" onClick={onClick} onChange={onChange} />);
    const input = container.querySelector('input[type="checkbox"]') as HTMLInputElement;
    fireEvent.click(input);
    expect(onClick).toHaveBeenCalled();
    expect(onChange).toHaveBeenCalled();
  });

  it('Should apply rotate prop', () => {
    const { container } = render(<Swap onElement="On" offElement="Off" rotate />);
    expect(container.firstChild).toHaveClass('swap-rotate');
  });

  it('Should apply flip prop', () => {
    const { container } = render(<Swap onElement="On" offElement="Off" flip />);
    expect(container.firstChild).toHaveClass('swap-flip');
  });

  it('Should apply additional class names', () => {
    const { container } = render(<Swap onElement="On" offElement="Off" className="custom-class" />);
    expect(container.firstChild).toHaveClass('custom-class');
  });

  it('Should pass down data-theme prop', () => {
    const { container } = render(<Swap onElement="On" offElement="Off" dataTheme="dark" />);
    expect(container.firstChild).toHaveAttribute('data-theme', 'dark');
  });
});
