import clsx from 'clsx';
import React, { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

import { ComponentColor, ComponentSize, IComponentBaseProps } from '../types';

export type InputProps = Omit<React.ComponentPropsWithoutRef<'input'>, 'size' | 'color'> &
  IComponentBaseProps & {
    size?: ComponentSize;
    color?: ComponentColor;
    bordered?: boolean;
    borderOffset?: boolean;
  };

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { value, placeholder, size, color, dataTheme, className, type, bordered, borderOffset, ...props },
    ref,
  ): React.JSX.Element => {
    const classes = twMerge(
      'input',
      className,
      clsx({
        'input-xl': size === 'xl',
        'input-lg': size === 'lg',
        'input-md': size === 'md',
        'input-sm': size === 'sm',
        'input-xs': size === 'xs',
        'input-primary': color === 'primary',
        'input-secondary': color === 'secondary',
        'input-accent': color === 'accent',
        'input-ghost': color === 'ghost',
        'input-info': color === 'info',
        'input-success': color === 'success',
        'input-warning': color === 'warning',
        'input-error': color === 'error',
        border: bordered,
        'focus:outline-offset-0': borderOffset === false,
      }),
    );

    return (
      <input
        {...props}
        ref={ref}
        type={type}
        value={value}
        placeholder={placeholder}
        data-theme={dataTheme}
        className={classes}
      />
    );
  },
);

Input.displayName = 'Input';

export default Input;
