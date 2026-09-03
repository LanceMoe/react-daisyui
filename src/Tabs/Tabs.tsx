import clsx from 'clsx';
import React, { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

import type { ComponentPosition, ComponentSize, IComponentBaseProps } from '../types';
import RadioTab from './RadioTab';
import Tab from './Tab';

export type TabsProps = React.ComponentPropsWithoutRef<'div'> &
  IComponentBaseProps & {
    variant?: 'bordered' | 'lift' | 'boxed';
    size?: ComponentSize;
    position?: Extract<ComponentPosition, 'top' | 'bottom'>;
  };

const Tabs = forwardRef<HTMLDivElement, TabsProps>(
  ({ children, className, variant, size, position, dataTheme, ...props }, ref): React.JSX.Element => {
    const classes = twMerge(
      'tabs',
      className,
      clsx({
        'tabs-box': variant === 'boxed',
        'tabs-border': variant === 'bordered',
        'tabs-lift': variant === 'lift',
        'tabs-xl': size === 'xl',
        'tabs-lg': size === 'lg',
        'tabs-md': size === 'md',
        'tabs-sm': size === 'sm',
        'tabs-xs': size === 'xs',
        'tabs-top': position === 'top',
        'tabs-bottom': position === 'bottom',
      }),
    );

    return (
      <div role="tablist" {...props} data-theme={dataTheme} className={classes} ref={ref}>
        {children}
      </div>
    );
  },
);

export default Object.assign(Tabs, { Tab, RadioTab });
