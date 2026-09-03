import clsx from 'clsx';
import React from 'react';
import { twMerge } from 'tailwind-merge';

import type { ComponentSize, IComponentBaseProps } from '../types';
import type { MenuDetailsProps as DetailsProps } from './MenuDetails';
import MenuDetails from './MenuDetails';
import type { MenuDropdownProps as DropdownProps } from './MenuDropdown';
import MenuDropdown from './MenuDropdown';
import type { MenuItemProps as ItemProps } from './MenuItem';
import MenuItem from './MenuItem';
import type { MenuTitleProps as TitleProps } from './MenuTitle';
import MenuTitle from './MenuTitle';

export type MenuTitleProps = TitleProps;
export type MenuItemProps = ItemProps;
export type MenuDropdownProps = DropdownProps;
export type MenuDetailsProps = DetailsProps;

export type MenuProps = React.ComponentPropsWithoutRef<'ul'> &
  IComponentBaseProps & {
    vertical?: boolean; // Vertical menu (default)
    horizontal?: boolean; // Horizontal menu
    responsive?: boolean;
    size?: ComponentSize;
  };

const Menu = React.forwardRef<HTMLUListElement, MenuProps>(
  ({ responsive, horizontal, vertical, dataTheme, className, size, ...props }, ref) => {
    const classes = twMerge(
      'menu',
      className,
      clsx({
        'menu-vertical lg:menu-horizontal': responsive,
        'menu-xl': size === 'xl',
        'menu-lg': size === 'lg',
        'menu-md': size === 'md',
        'menu-sm': size === 'sm',
        'menu-xs': size === 'xs',
        'menu-vertical': vertical,
        'menu-horizontal': horizontal,
      }),
    );

    return <ul role="menu" data-theme={dataTheme} className={classes} {...props} ref={ref} />;
  },
);

export default Object.assign(Menu, {
  Title: MenuTitle,
  Item: MenuItem,
  Dropdown: MenuDropdown,
  Details: MenuDetails,
});
