import clsx from 'clsx';
import React, { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

import type { ComponentColor, ComponentSize, IComponentBaseProps } from '../types';

export type ToggleProps = Omit<React.ComponentPropsWithoutRef<'input'>, 'size'> &
  IComponentBaseProps & {
    color?: ComponentColor;
    size?: ComponentSize;
  };

const Toggle = forwardRef<HTMLInputElement, ToggleProps>(
  ({ color, size, dataTheme, className, ...props }, ref): React.JSX.Element => {
    const classes = twMerge(
      'toggle',
      className,
      clsx({
        'toggle-xl': size === 'xl',
        'toggle-lg': size === 'lg',
        'toggle-md': size === 'md',
        'toggle-sm': size === 'sm',
        'toggle-xs': size === 'xs',
        'toggle-neutral': color === 'neutral',
        'toggle-primary': color === 'primary',
        'toggle-secondary': color === 'secondary',
        'toggle-accent': color === 'accent',
        'toggle-info': color === 'info',
        'toggle-success': color === 'success',
        'toggle-warning': color === 'warning',
        'toggle-error': color === 'error',
      }),
    );

    return <input {...props} ref={ref} type="checkbox" data-theme={dataTheme} className={classes} />;
  },
);

Toggle.displayName = 'Toggle';

export default Toggle;
