import clsx from 'clsx';
import React, { useId } from 'react';
import { twMerge } from 'tailwind-merge';

import type { IComponentBaseProps } from '../types';

export type DrawerProps = React.ComponentPropsWithoutRef<'div'> &
  IComponentBaseProps & {
    side: React.ReactNode;
    open?: boolean;
    end?: boolean;
    toggleClassName?: string;
    contentClassName?: string;
    sideClassName?: string;
    overlayClassName?: string;
    toggleId?: string;
    onClickOverlay?: () => void;
  };

function Drawer({
  children,
  side,
  open,
  end,
  dataTheme,
  className,
  toggleClassName,
  contentClassName,
  sideClassName,
  overlayClassName,
  toggleId,
  onClickOverlay,
  ...props
}: DrawerProps) {
  const generatedToggleId = useId();
  const resolvedToggleId = toggleId || `drawer-${generatedToggleId}`;
  const classes = twMerge(
    'drawer',
    className,
    clsx({
      'drawer-end': end,
    }),
  );

  return (
    <div aria-expanded={open} {...props} data-theme={dataTheme} className={classes}>
      <input
        id={resolvedToggleId}
        type="checkbox"
        className={clsx('drawer-toggle', toggleClassName)}
        checked={open}
        readOnly
      />
      <div className={clsx('drawer-content', contentClassName)}>{children}</div>
      <div className={clsx('drawer-side', sideClassName)}>
        <label
          htmlFor={resolvedToggleId}
          aria-label="Close drawer"
          className={clsx('drawer-overlay', overlayClassName)}
          onClick={onClickOverlay}
        />
        {side}
      </div>
    </div>
  );
}

export default Drawer;
