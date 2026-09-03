import clsx from 'clsx';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

import type { ComponentColor, ComponentSize, IComponentBaseProps } from '../types';

export type StatusProps = Omit<React.ComponentPropsWithoutRef<'span'>, 'color'> &
  IComponentBaseProps & {
    color?: Exclude<ComponentColor, 'ghost'>;
    size?: ComponentSize;
  };

const Status = forwardRef<HTMLSpanElement, StatusProps>(({ color, size, dataTheme, className, ...props }, ref) => {
  const classes = twMerge(
    'status',
    clsx({
      'status-xl': size === 'xl',
      'status-lg': size === 'lg',
      'status-md': size === 'md',
      'status-sm': size === 'sm',
      'status-xs': size === 'xs',
      'status-neutral': color === 'neutral',
      'status-primary': color === 'primary',
      'status-secondary': color === 'secondary',
      'status-accent': color === 'accent',
      'status-info': color === 'info',
      'status-success': color === 'success',
      'status-warning': color === 'warning',
      'status-error': color === 'error',
    }),
    className,
  );

  return <span {...props} ref={ref} data-theme={dataTheme} className={classes} />;
});

Status.displayName = 'Status';

export default Status;
