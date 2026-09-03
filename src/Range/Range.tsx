import clsx from 'clsx';
import React, { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

import { ComponentColor, ComponentSize, IComponentBaseProps } from '../types';

export type RangeProps = Omit<React.ComponentPropsWithoutRef<'input'>, 'size'> &
  IComponentBaseProps & {
    color?: ComponentColor;
    size?: ComponentSize;
    displayTicks?: boolean;
    ticksStep?: number;
  };

const Range = forwardRef<HTMLInputElement, RangeProps>(
  ({ color, size, step, displayTicks, ticksStep, dataTheme, className, ...props }, ref): React.JSX.Element => {
    const classes = twMerge(
      'range',
      className,
      clsx({
        'range-xl': size === 'xl',
        'range-lg': size === 'lg',
        'range-md': size === 'md',
        'range-sm': size === 'sm',
        'range-xs': size === 'xs',
        'range-primary': color === 'primary',
        'range-secondary': color === 'secondary',
        'range-accent': color === 'accent',
        'range-info': color === 'info',
        'range-success': color === 'success',
        'range-warning': color === 'warning',
        'range-error': color === 'error',
      }),
    );

    const numericStep = step !== undefined ? Number(step) : undefined;
    const hasValidStep = numericStep !== undefined && Number.isFinite(numericStep);
    const calculatedDisplayTicks = displayTicks ?? hasValidStep;
    const calculatedStep = hasValidStep && numericStep > 0 ? numericStep : 1;
    const calculatedTicksStep =
      ticksStep !== undefined && Number.isFinite(ticksStep) && ticksStep > 0 ? ticksStep : calculatedStep;
    const parsedMin = props.min !== undefined ? Number(props.min) : 0;
    const parsedMax = props.max !== undefined ? Number(props.max) : 100;
    const min = Number.isFinite(parsedMin) ? parsedMin : 0;
    const max = Number.isFinite(parsedMax) ? parsedMax : 100;

    // use Math.max to solve multiple issues with negative numbers throwing errors
    const numTicks = Math.min(Math.max(Math.ceil(Math.abs(max - min) / calculatedTicksStep), 1) + 1, 1001);

    return (
      <>
        <input {...props} ref={ref} type="range" step={step} data-theme={dataTheme} className={classes} />
        {calculatedDisplayTicks && (
          <div className="w-full flex justify-between text-xs px-2">
            {[...Array(numTicks)].map((_, i) => {
              return <span key={i}>|</span>;
            })}
          </div>
        )}
      </>
    );
  },
);

Range.displayName = 'Range';

export default Range;
