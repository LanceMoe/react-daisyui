import clsx from 'clsx';
import React, { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

import { ComponentColor, IComponentBaseProps } from '../types';

export type TabProps = Omit<React.ComponentPropsWithoutRef<'a'>, 'color'> &
  IComponentBaseProps & {
    color?: ComponentColor;
    bgColor?: string;
    borderColor?: string;
    active?: boolean;
    disabled?: boolean;
  };

const Tab = forwardRef<HTMLAnchorElement, TabProps>(
  (
    { children, className, color, bgColor, borderColor, active, disabled, dataTheme, ...props },
    ref,
  ): React.JSX.Element => {
    const classes = twMerge(
      'tab',
      className,
      clsx({
        [`[--tab-bg:${bgColor}]`]: bgColor,
        [`[--tab-border-color:${borderColor}]`]: borderColor,
        'text-neutral': color === 'neutral',
        'text-primary': color === 'primary',
        'text-secondary': color === 'secondary',
        'text-accent': color === 'accent',
        'text-info': color === 'info',
        'text-success': color === 'success',
        'text-warning': color === 'warning',
        'text-error': color === 'error',
        'tab-active': active,
        'tab-disabled': disabled,
      }),
    );
    return (
      <a
        role="tab"
        {...props}
        data-theme={dataTheme}
        aria-disabled={disabled}
        tabIndex={disabled ? -1 : props.tabIndex}
        ref={ref}
        className={classes}
      >
        {children}
      </a>
    );
  },
);

export default Tab;
