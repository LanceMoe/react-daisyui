import clsx from 'clsx';
import { type ComponentPropsWithoutRef, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

import type { ComponentColor, ComponentSize, IComponentBaseProps } from '../types';

export type OtpProps = Omit<ComponentPropsWithoutRef<'input'>, 'type' | 'size' | 'maxLength' | 'pattern'> &
  IComponentBaseProps & {
    length?: 4 | 5 | 6;
    size?: ComponentSize;
    color?: Exclude<ComponentColor, 'ghost'>;
    joined?: boolean;
    inputClassName?: string;
  };

const Otp = forwardRef<HTMLInputElement, OtpProps>(
  ({ length = 6, size, color, joined, inputClassName, dataTheme, className, ...props }, ref) => {
    const classes = twMerge(
      'otp',
      clsx({
        'otp-xl': size === 'xl',
        'otp-lg': size === 'lg',
        'otp-md': size === 'md',
        'otp-sm': size === 'sm',
        'otp-xs': size === 'xs',
        'otp-neutral': color === 'neutral',
        'otp-primary': color === 'primary',
        'otp-secondary': color === 'secondary',
        'otp-accent': color === 'accent',
        'otp-info': color === 'info',
        'otp-success': color === 'success',
        'otp-warning': color === 'warning',
        'otp-error': color === 'error',
        'otp-joined': joined,
      }),
      className,
    );

    return (
      <label data-theme={dataTheme} className={classes}>
        {Array.from({ length }, (_, index) => (
          <span key={index} aria-hidden="true" />
        ))}
        <input
          {...props}
          ref={ref}
          type="text"
          maxLength={length}
          pattern={`[0-9]{${length}}`}
          autoComplete={props.autoComplete || 'one-time-code'}
          inputMode={props.inputMode || 'numeric'}
          aria-label={props['aria-label'] || 'One-time password'}
          className={inputClassName}
        />
      </label>
    );
  },
);

Otp.displayName = 'Otp';

export default Otp;
