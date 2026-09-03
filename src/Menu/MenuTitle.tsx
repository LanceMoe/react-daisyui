import React from 'react';
import { twMerge } from 'tailwind-merge';

import { IComponentBaseProps } from '../types';

export type MenuTitleProps = React.ComponentPropsWithoutRef<'li'> & IComponentBaseProps;

const MenuTitle = React.forwardRef<HTMLLIElement, MenuTitleProps>(({ dataTheme, className, ...props }, ref) => {
  const classes = twMerge('menu-title', className);

  return <li {...props} data-theme={dataTheme} className={classes} ref={ref} />;
});

export default MenuTitle;
