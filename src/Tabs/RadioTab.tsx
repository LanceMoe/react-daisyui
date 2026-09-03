import clsx from 'clsx';
import React, { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

import { ComponentColor, IComponentBaseProps } from '../types';

export type RadioTabProps = Omit<React.ComponentPropsWithoutRef<'input'>, 'type' | 'color'> &
  IComponentBaseProps & {
    color?: ComponentColor;
    bgColor?: string;
    borderColor?: string;
    active?: boolean;
    disabled?: boolean;
    label: string;
    name: string;
    contentClassName?: string;
  };

const RadioTab = forwardRef<HTMLInputElement, RadioTabProps & IComponentBaseProps>(
  (
    {
      children,
      className,
      color,
      bgColor,
      borderColor,
      active,
      label,
      disabled,
      name,
      contentClassName,
      dataTheme,
      ...props
    },
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
    const contentClasses = twMerge('tab-content', contentClassName);

    return (
      <>
        <input
          className={classes}
          role="tab"
          type="radio"
          name={name}
          disabled={disabled}
          aria-label={label}
          data-theme={dataTheme}
          {...props}
          ref={ref}
          checked={active ?? props.checked}
        />
        <div data-theme={dataTheme} className={contentClasses}>
          {children}
        </div>
      </>
    );
  },
);

export default RadioTab;
