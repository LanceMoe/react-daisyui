import clsx from 'clsx';
import React from 'react';
import { twMerge } from 'tailwind-merge';

import { ComponentColor,IComponentBaseProps } from '../types';

export type StepProps = Omit<React.ComponentPropsWithoutRef<'li'>, 'value' | 'color'> &
  IComponentBaseProps & {
    value?: string;
    color?: 'neutral' | ComponentColor;
  };

const Step = React.forwardRef<HTMLLIElement, StepProps>(
  ({ children, value, color, dataTheme, className, ...props }, ref): React.JSX.Element => {
    const classes = twMerge(
      'step',
      className,
      clsx({
        'step-primary': color === 'primary',
        'step-secondary': color === 'secondary',
        'step-accent': color === 'accent',
        'step-info': color === 'info',
        'step-success': color === 'success',
        'step-warning': color === 'warning',
        'step-error': color === 'error',
      }),
    );

    return (
      <li aria-label="Step" {...props} data-theme={dataTheme} data-content={value} className={classes} ref={ref}>
        {children}
      </li>
    );
  },
);
export default Step;
