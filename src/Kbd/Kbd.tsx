import clsx from 'clsx';
import React, { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

import { ComponentSize,IComponentBaseProps } from '../types';

export type KbdProps = React.ComponentPropsWithoutRef<'kbd'> &
  IComponentBaseProps & {
    size?: ComponentSize;
  };

const Kbd = forwardRef<HTMLElement, KbdProps>(
  ({ children, size, dataTheme, className, ...props }, ref): React.JSX.Element => {
    const classes = twMerge(
      'kbd',
      className,
      clsx({
        'kbd-xl': size === 'xl',
        'kbd-lg': size === 'lg',
        'kbd-md': size === 'md',
        'kbd-sm': size === 'sm',
        'kbd-xs': size === 'xs',
      }),
    );

    return (
      <kbd {...props} data-theme={dataTheme} className={classes} ref={ref}>
        {children}
      </kbd>
    );
  },
);

export default Kbd;
