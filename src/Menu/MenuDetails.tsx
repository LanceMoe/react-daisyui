import React from 'react';

import type { IComponentBaseProps } from '../types';

export type MenuDetailsProps = React.ComponentPropsWithoutRef<'details'> &
  IComponentBaseProps & {
    label: React.ReactNode;
    open?: boolean;
  };

const MenuDetails = React.forwardRef<HTMLDetailsElement, MenuDetailsProps>(
  ({ className, label, open, children, dataTheme, ...props }, ref) => {
    return (
      <details {...props} open={open} data-theme={dataTheme} className={className} ref={ref}>
        <summary>{label}</summary>
        <ul>{children}</ul>
      </details>
    );
  },
);

export default MenuDetails;
