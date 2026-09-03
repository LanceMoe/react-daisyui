import clsx from 'clsx';
import React from 'react';
import { twMerge } from 'tailwind-merge';

import { ComponentSize,IComponentBaseProps } from '../types';
import TableBody from './TableBody';
import TableFooter from './TableFooter';
import TableHead from './TableHead';
import TableRow from './TableRow';

export type TableProps = React.ComponentPropsWithoutRef<'table'> &
  IComponentBaseProps & {
    size?: ComponentSize;
    zebra?: boolean;
    pinRows?: boolean;
    pinCols?: boolean;
  };

const Table = React.forwardRef<HTMLTableElement, TableProps>(
  ({ children, size, zebra, pinRows, pinCols, dataTheme, className, ...props }, ref): React.JSX.Element => {
    const classes = twMerge(
      'table',
      className,
      clsx({
        'table-zebra': zebra,
        'table-xl': size === 'xl',
        'table-lg': size === 'lg',
        'table-md': size === 'md',
        'table-sm': size === 'sm',
        'table-xs': size === 'xs',
        'table-pin-rows': pinRows,
        'table-pin-cols': pinCols,
      }),
    );

    return (
      <table {...props} data-theme={dataTheme} className={classes} ref={ref}>
        {children}
      </table>
    );
  },
);

export default Object.assign(Table, {
  Head: TableHead,
  Body: TableBody,
  Row: TableRow,
  Footer: TableFooter,
});
