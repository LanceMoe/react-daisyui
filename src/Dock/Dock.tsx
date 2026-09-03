import clsx from 'clsx';
import React, { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

import type { ComponentSize, IComponentBaseProps } from '../types';
import type { DockItemProps as ItemProps } from './DockItem';
import DockItem from './DockItem';
import type { DockLabelProps as LabelProps } from './DockLabel';
import DockLabel from './DockLabel';

export type DockItemProps = ItemProps;
export type DockLabelProps = LabelProps;

export type DockProps = React.ComponentPropsWithoutRef<'div'> &
  IComponentBaseProps & {
    size?: ComponentSize;
  };

const Dock = forwardRef<HTMLDivElement, DockProps>(
  ({ size, dataTheme, className, children, ...props }, ref): React.JSX.Element => {
    const classes = twMerge(
      'dock',
      clsx({
        'dock-lg': size === 'lg',
        'dock-md': size === 'md',
        'dock-sm': size === 'sm',
        'dock-xs': size === 'xs',
      }),
      className,
    );

    return (
      <div {...props} role="navigation" data-theme={dataTheme} className={classes} ref={ref}>
        {children}
      </div>
    );
  },
);

Dock.displayName = 'Dock';

export default Object.assign(Dock, {
  Item: DockItem,
  Label: DockLabel,
});
