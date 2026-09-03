import clsx from 'clsx';
import React, { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

import { ComponentBrandColors, ComponentStatus,IComponentBaseProps } from '../types';

export type DockItemProps = React.ComponentPropsWithoutRef<'button'> &
  IComponentBaseProps & {
    color?: ComponentBrandColors | ComponentStatus;
    active?: boolean;
  };

const DockItem = forwardRef<HTMLButtonElement, DockItemProps>(
  ({ children, className, color, dataTheme, active, disabled, ...props }, ref): React.JSX.Element => {
    const classes = twMerge(
      className,
      clsx({
        'text-neutral': color === 'neutral',
        'text-primary': color === 'primary',
        'text-secondary': color === 'secondary',
        'text-accent': color === 'accent',
        'text-info': color === 'info',
        'text-success': color === 'success',
        'text-warning': color === 'warning',
        'text-error': color === 'error',
        active,
        disabled,
      }),
    );
    return (
      <button {...props} className={classes} data-theme={dataTheme} ref={ref}>
        {children}
      </button>
    );
  },
);

export default DockItem;
