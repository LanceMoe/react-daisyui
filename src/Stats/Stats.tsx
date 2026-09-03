import clsx from 'clsx';
import React from 'react';
import { twMerge } from 'tailwind-merge';

import { IComponentBaseProps } from '../types';
import Stat from './Stat';

export type StatsProps = React.ComponentPropsWithoutRef<'div'> &
  IComponentBaseProps & {
    direction?: 'horizontal' | 'vertical';
  };

const Stats = React.forwardRef<HTMLDivElement, StatsProps>(
  ({ direction = 'horizontal', dataTheme, className, children, ...props }, ref): React.JSX.Element => {
    const classes = twMerge(
      'stats',
      className,
      clsx({
        'stats-vertical': direction === 'vertical',
        'stats-horizontal': direction === 'horizontal',
      }),
    );

    return (
      <div {...props} ref={ref} data-theme={dataTheme} className={classes}>
        {children}
      </div>
    );
  },
);

export default Object.assign(Stats, { Stat });
