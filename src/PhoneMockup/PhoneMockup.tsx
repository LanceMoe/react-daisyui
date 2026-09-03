import clsx from 'clsx';
import React, { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

import type { ComponentColor, IComponentBaseProps } from '../types';

export type PhoneMockupProps = React.ComponentPropsWithoutRef<'div'> &
  IComponentBaseProps & {
    color?: Exclude<ComponentColor, 'ghost'>;
    innerProps?: React.ComponentPropsWithoutRef<'div'>;
    innerRef?: React.Ref<HTMLDivElement>;
  };

const PhoneMockup = forwardRef<HTMLDivElement, PhoneMockupProps>(
  ({ color, dataTheme, className, children, innerRef, innerProps, ...props }, ref): React.JSX.Element => {
    const classes = twMerge(
      'mockup-phone',
      clsx({
        'border-primary': color === 'primary',
        'border-secondary': color === 'secondary',
        'border-info': color === 'info',
        'border-success': color === 'success',
        'border-warning': color === 'warning',
        'border-error': color === 'error',
      }),
      className,
    );

    return (
      <div aria-label="Phone mockup" {...props} data-theme={dataTheme} className={classes} ref={ref}>
        <div className="mockup-phone-camera" />
        <div className="mockup-phone-display">
          <div
            {...innerProps}
            className={twMerge('min-h-full w-full bg-base-100', innerProps?.className)}
            ref={innerRef}
          >
            {children}
          </div>
        </div>
      </div>
    );
  },
);

PhoneMockup.displayName = 'PhoneMockup';

export default PhoneMockup;
