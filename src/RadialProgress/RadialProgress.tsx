import clsx from 'clsx';
import React, { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

import { ComponentColor, IComponentBaseProps } from '../types';

export type RadialProgressProps = React.ComponentPropsWithoutRef<'div'> &
  IComponentBaseProps & {
    value: number;
    size?: string;
    thickness?: string;
    color?: ComponentColor;
  };

const RadialProgress = forwardRef<HTMLDivElement, RadialProgressProps>(
  (
    { value, size = '4rem', thickness = '4px', color, dataTheme, className, style, children, ...props },
    ref,
  ): React.JSX.Element => {
    const classes = twMerge(
      'radial-progress',
      className,
      clsx({
        'text-primary': color === 'primary',
        'text-secondary': color === 'secondary',
        'text-accent': color === 'accent',
        'text-info': color === 'info',
        'text-success': color === 'success',
        'text-warning': color === 'warning',
        'text-error': color === 'error',
      }),
    );

    const displayedValue = Number.isFinite(value) ? Math.min(100, Math.max(0, value)) : 0;
    const progressStyle: React.CSSProperties = {
      ...style,
      '--value': displayedValue,
      '--size': size,
      '--thickness': thickness,
    } as React.CSSProperties;

    return (
      <div
        role="progressbar"
        aria-valuenow={displayedValue}
        aria-valuemin={0}
        aria-valuemax={100}
        {...props}
        ref={ref}
        data-theme={dataTheme}
        className={classes}
        style={progressStyle}
      >
        {children ?? `${displayedValue}%`}
      </div>
    );
  },
);

RadialProgress.displayName = 'RadialProgress';

export default RadialProgress;
