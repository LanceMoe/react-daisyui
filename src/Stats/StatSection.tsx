import clsx from 'clsx';
import React from 'react';
import { twMerge } from 'tailwind-merge';

import type { IComponentBaseProps } from '../types';

export type StatSectionProps = React.ComponentPropsWithoutRef<'div'> &
  IComponentBaseProps & {
    section: 'title' | 'value' | 'desc' | 'figure' | 'actions';
  };

const StatSection = React.forwardRef<HTMLDivElement, StatSectionProps>(
  ({ children, section, dataTheme, className, ...props }, ref): React.JSX.Element => {
    const classes = twMerge(
      className,
      clsx({
        'stat-title': section === 'title',
        'stat-value': section === 'value',
        'stat-desc': section === 'desc',
        'stat-figure': section === 'figure',
        'stat-actions': section === 'actions',
      }),
    );

    return (
      <div {...props} data-theme={dataTheme} className={classes} ref={ref}>
        {children}
      </div>
    );
  },
);

export default StatSection;
