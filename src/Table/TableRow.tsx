import clsx from 'clsx';
import React from 'react';
import { twMerge } from 'tailwind-merge';

import type { IComponentBaseProps } from '../types';

export type TableRowProps = React.ComponentPropsWithoutRef<'tr'> &
  IComponentBaseProps & {
    children?: React.ReactNode[];
    active?: boolean;
    noCell?: boolean; // don't wrap children in th/td, should pass children as th/tds manually
  };

const TableRow = React.forwardRef<HTMLTableRowElement, TableRowProps>(
  ({ children, active, noCell = false, dataTheme, className, ...props }, ref): React.JSX.Element => {
    const classes = twMerge(
      className,
      clsx({
        active,
      }),
    );

    const renderChildren = noCell
      ? children
      : children?.map((child, i) => (i < 1 ? <th key={i}>{child}</th> : <td key={i}>{child}</td>));

    return (
      <tr {...props} data-theme={dataTheme} className={classes} ref={ref}>
        {renderChildren}
      </tr>
    );
  },
);

export default TableRow;
