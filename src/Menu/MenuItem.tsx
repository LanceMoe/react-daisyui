import clsx from 'clsx';
import React from 'react';
import { twMerge } from 'tailwind-merge';

import { IComponentBaseProps } from '../types';

export type MenuItemProps = React.ComponentPropsWithoutRef<'li'> &
  IComponentBaseProps & {
    focus?: boolean;
    active?: boolean;
    disabled?: boolean;
  };

const MenuItem = React.forwardRef<HTMLLIElement, MenuItemProps>(
  ({ className, focus, active, disabled, dataTheme, ...props }, ref) => {
    const classes = twMerge(
      className,
      clsx({
        'menu-focus': focus,
        'menu-active': active,
        'menu-disabled': disabled,
      }),
    );

    return (
      <li role="menuitem" aria-disabled={disabled} data-theme={dataTheme} className={classes} {...props} ref={ref} />
    );
  },
);

export default MenuItem;
