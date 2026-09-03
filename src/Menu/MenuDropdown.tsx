import clsx from 'clsx';
import React from 'react';
import { twMerge } from 'tailwind-merge';

import type { IComponentBaseProps } from '../types';

export type MenuDropdownProps = React.ComponentPropsWithoutRef<'span'> &
  IComponentBaseProps & {
    label: React.ReactNode;
    open?: boolean;
  };

const MenuDropdown = React.forwardRef<HTMLSpanElement, MenuDropdownProps>(
  ({ className, label, open, children, dataTheme, ...props }, ref) => {
    const classes = twMerge('menu-dropdown-toggle', className, clsx({ 'menu-dropdown-show': open }));

    return (
      <>
        <span {...props} data-theme={dataTheme} className={classes} ref={ref}>
          {label}
        </span>
        <ul data-theme={dataTheme} className={clsx('menu-dropdown', { 'menu-dropdown-show': open })}>
          {children}
        </ul>
      </>
    );
  },
);

export default MenuDropdown;
