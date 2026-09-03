import React, { forwardRef } from 'react';

import type { ButtonProps } from '../Button';
import Button from '../Button';
import type { ComponentColor, ComponentSize, IComponentBaseProps } from '../types';

export type DropdownToggleProps = Omit<React.ComponentPropsWithoutRef<'label'>, 'color'> &
  IComponentBaseProps & {
    color?: ComponentColor;
    size?: ComponentSize;
    button?: boolean;
    disabled?: boolean;
  };

function DropdownToggle({
  children,
  color,
  size,
  button = true,
  dataTheme,
  className,
  disabled,
  ...props
}: DropdownToggleProps) {
  return (
    <label tabIndex={0} data-theme={dataTheme} className={className} {...props}>
      {button ? (
        <Button type="button" dataTheme={dataTheme} color={color} size={size} disabled={disabled}>
          {children}
        </Button>
      ) : (
        children
      )}
    </label>
  );
}

export type SummaryProps = Omit<ButtonProps, 'tag'>;
export const Summary = forwardRef<HTMLElement, SummaryProps>((props, ref): React.JSX.Element => {
  return <Button {...props} ref={ref} tag="summary" />;
});

export default DropdownToggle;
